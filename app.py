from flask import Flask, request, jsonify, render_template, send_file
import json
import difflib

app = Flask(__name__)

# Load search data from a separate JSON file
def load_json_data(file_path):
    try:
        with open(file_path, "r", encoding="utf-8") as file:
            return json.load(file)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

search_data = load_json_data("data/search_data.json")
article_data = load_json_data("data/article_data.json")

# API to get search suggestions
@app.route("/search", methods=["GET"])
def search():
    query = request.args.get("q", "").strip().lower()
    if not query:
        return jsonify([])

    suggestions = {}
    for key, url in search_data.items():
        if query in key.lower():
            suggestions[key] = url
        elif difflib.get_close_matches(query, [key.lower()], cutoff=0.5):
            suggestions[key] = url

    return jsonify(suggestions)

# Main pages
@app.route("/")
def index():
    return render_template("index.html", articles=article_data)

@app.route("/articles")
def articles():
    return render_template("articles.html", articles=article_data)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        email = request.form.get("email")
        message = request.form.get("message")
        contact=open("contact.txt","a")
        data=[name, email, message]
        contact.write(str(data))
        if not name or not email or not message:
            return jsonify({"error": "All fields are required"}), 400

        # Here, you can save to a database or send an email
        return jsonify({"success": "Message sent successfully!"})

    return render_template("contact.html")

# Article routes
@app.route("/article/<title>")
def article(title):
    formatted_title = title.replace("-", " ")
    article = article_data.get(formatted_title, None)
    if article:
        return render_template("article.html", article=article)
    return "Article not found", 404

@app.route("/api/article/<title>")
def get_article(title):
    formatted_title = title.replace("-", " ")
    article = article_data.get(formatted_title, None)
    if article:
        return jsonify(article)
    return jsonify({"error": "Article not found"}), 404



@app.route('/ads.txt')
def ads_txt():
    try:
        return send_file('ads.txt', mimetype='text/plain')
    except Exception as e:
        return str(e), 500 

@app.route('/contact.txt')
def contact_txt():
    try:
        return send_file('contact.txt', mimetype='text/plain')
    except Exception as e:
        return str(e), 500 


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 10000)))
