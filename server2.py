from flask import Flask, request, jsonify, render_template, send_from_directory, redirect, url_for, session, send_file import json import os import difflib from flask_sqlalchemy import SQLAlchemy import razorpay from werkzeug.security import generate_password_hash, check_password_hash

Razorpay Client

client = razorpay.Client(auth=("your_key_id", "your_key_secret"))

app = Flask(name) app.secret_key = 'your_secret_key' app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db' db = SQLAlchemy(app)

class User(db.Model): id = db.Column(db.Integer, primary_key=True) name = db.Column(db.String(100), nullable=False) email = db.Column(db.String(100), unique=True, nullable=False) password = db.Column(db.String(100), nullable=False) is_subscribed = db.Column(db.Boolean, default=False)

Load search data

def load_json_data(file_path): try: with open(file_path, "r", encoding="utf-8") as file: return json.load(file) except (FileNotFoundError, json.JSONDecodeError): return {}

search_data = load_json_data("data/search_data.json") article_data = load_json_data("data/article_data.json")

@app.route("/search", methods=["GET"]) def search(): query = request.args.get("q", "").strip().lower() if not query: return jsonify([]) suggestions = {} for key, url in search_data.items(): if query in key.lower() or difflib.get_close_matches(query, [key.lower()], cutoff=0.5): suggestions[key] = url return jsonify(suggestions)

Main Pages

@app.route("/") def index(): return render_template("index.html", articles=article_data)

@app.route("/articles") def articles(): return render_template("articles.html", articles=article_data)

@app.route("/about") def about(): return render_template("about.html")

@app.route("/contact", methods=["GET", "POST"]) def contact(): if request.method == "POST": name = request.form.get("name") email = request.form.get("email") message = request.form.get("message") if not name or not email or not message: return jsonify({"error": "All fields are required"}), 400 with open("contact.txt", "a") as contact_file: contact_file.write(f"{name}, {email}, {message}\n") return jsonify({"success": "Message sent successfully!"}) return render_template("contact.html")

@app.route("/article/<title>") def article(title): formatted_title = title.replace("-", " ") article = article_data.get(formatted_title, None) if article: return render_template("article.html", article=article) return "Article not found", 404

@app.route("/api/article/<title>") def get_article(title): formatted_title = title.replace("-", " ") article = article_data.get(formatted_title, None) return jsonify(article) if article else jsonify({"error": "Article not found"}), 404

@app.route("/article/static/js/<filename>") def serve_js(filename): return send_from_directory(os.path.join(app.root_path, 'static', 'js'), filename)

@app.route('/ads.txt') def ads_txt(): return send_file('ads.txt', mimetype='text/plain')

@app.route('/contact.txt') def contact_txt(): return send_file('contact.txt', mimetype='text/plain')

Authentication Routes

@app.route('/register', methods=['GET', 'POST']) def register(): if request.method == 'POST': name = request.form['name'] email = request.form['email'] password = request.form['password'] existing_user = User.query.filter_by(email=email).first() if existing_user: return "Email already exists. Try logging in." hashed_password = generate_password_hash(password) new_user = User(name=name, email=email, password=hashed_password, is_subscribed=False) db.session.add(new_user) db.session.commit() session['user_id'] = new_user.id return redirect(url_for('payment')) return render_template('register.html')

@app.route('/login', methods=['GET', 'POST']) def login(): if request.method == 'POST': email = request.form['email'] password = request.form['password'] user = User.query.filter_by(email=email).first() if user and check_password_hash(user.password, password): session['user_id'] = user.id return redirect(url_for('dashboard')) return "Invalid login credentials. Try again." return render_template('login.html')

Payment Routes

@app.route('/payment', methods=['GET', 'POST']) def payment(): if 'user_id' not in session: return redirect(url_for('login')) if request.method == 'POST': amount = request.form.get('amount') currency = request.form.get('currency', 'INR') try: payment_order = client.order.create({ "amount": int(amount) * 100,  # Convert to paise "currency": currency, "payment_capture": "1" }) return jsonify({"order_id": payment_order['id']}) except Exception as e: return jsonify({"error": str(e)}), 400 return render_template('payment.html')

@app.route('/payment/success', methods=['POST']) def payment_success(): payment_order_id = request.form['razorpay_order_id'] payment_payment_id = request.form['razorpay_payment_id'] params = { 'razorpay_order_id': payment_order_id, 'razorpay_payment_id': payment_payment_id } try: client.utility.verify_payment_signature(params) user = User.query.get(session['user_id']) user.is_subscribed = True db.session.commit() return redirect(url_for('dashboard')) except Exception as e: return str(e)

@app.route('/dashboard') def dashboard(): if 'user_id' not in session: return redirect(url_for('login')) user = User.query.get(session['user_id']) return render_template('dashboard.html', user=user) if user.is_subscribed else redirect(url_for('payment'))

with app.app_context(): db.create_all()

if name == "main": app.run(debug=True, host="0.0.0.0", port=5000)

