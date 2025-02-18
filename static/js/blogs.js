// Sample blog data
const blogPosts = [
    {
        title: "The Future of Web Development",
        image: "https://admin.12grids.com/uploads/blogs/original_cover_images/Webp/Top_11_Web_Development_Technologies_You_Must_Know_In_2024_12Grids-compressed.webp",
        excerpt: "Exploring new trends in modern web development practices...",
        tags: ["Technology", "Web Dev"],
        date: "March 15, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "The Future of AI Sector",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Kou69LOoiWkrjTdz",
        excerpt: "Exploring new trends in AI developments and practices...",
        tags: ["Technology", "AI"],
        date: "March 16, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Blockchain Revolution in Finance",
        image: "https://previews.123rf.com/images/funtap/funtap1812/funtap181200333/113273359-rewolucja-blockchain-innowacyjna-technologia-w-nowoczesnym-biznesie.jpg",
        excerpt: "How blockchain is transforming the financial sector...",
        tags: ["Technology", "Blockchain"],
        date: "March 17, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Cybersecurity Trends in 2024",
        image: "https://linfordco.com/wp-content/uploads/2021/12/cybersecurity-trends-for-2023-2024.jpg",
        excerpt: "The latest cybersecurity threats and how to prevent them...",
        tags: ["Technology", "Cybersecurity"],
        date: "March 18, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Impact of IoT on Smart Cities",
        image: "https://cdn-bbaid.nitrocdn.com/wYFmIWkSNKpdInpiRfVoEqTErZtkFjBo/assets/images/optimized/rev-94c27ed/www.rishabhsoft.com/wp-content/uploads/2023/02/Blog-Banner-IoT-in-Smart-City-700x350.jpg",
        excerpt: "How IoT is shaping the future of urban infrastructure...",
        tags: ["Technology", "IoT"],
        date: "March 19, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "The Rise of Quantum Computing",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*KYDGLCDYVJRQfVOzXJMecA.png",
        excerpt: "How quantum computing is set to change the world...",
        tags: ["Technology", "Quantum Computing"],
        date: "March 20, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Ethical AI: Challenges and Solutions",
        image: "https://www.zedroit.com/wp-content/uploads/2023/09/ethical-ai-768x384.jpg",
        excerpt: "The moral dilemmas in artificial intelligence...",
        tags: ["AI", "Ethics"],
        date: "March 21, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "E-Waste Management: A Global Challenge",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*QMpiD0UVAg6NpG5r.jpg",
        excerpt: "How we can tackle the growing issue of electronic waste...",
        tags: ["Environment", "E-Waste"],
        date: "March 22, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Drone Technology in Surveillance",
        image: "https://www.zenadrone.com/wp-content/uploads/2022/10/ZenaDrone-as-commercial-drone-700x366.jpg",
        excerpt: "How drones are being used for security and surveillance...",
        tags: ["Technology", "Drones"],
        date: "March 23, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "The Role of AI in Healthcare",
        image: "https://imageio.forbes.com/blogs-images/bernardmarr/files/2018/07/AdobeStock_157266517-1200x640.jpeg?height=379&width=711&fit=bounds",
        excerpt: "AI innovations improving patient care and diagnosis...",
        tags: ["AI", "Healthcare"],
        date: "March 24, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "The Future of Space Exploration",
        image: "https://scx1.b-cdn.net/csz/news/800w/2018/8-researcherdi.jpg?f=webp",
        excerpt: "The next steps in humanity’s journey beyond Earth...",
        tags: ["Space", "Technology"],
        date: "March 25, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "5G and Beyond: The Future of Connectivity",
        image: "https://image.slidesharecdn.com/5ganetworkandbeyond-170107113220/85/5G-A-network-and-beyond-1-638.jpg",
        excerpt: "How 5G is transforming communication technology...",
        tags: ["Technology", "5G"],
        date: "March 26, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Sustainable Mining Practices",
        image: "https://www.mining.com/wp-content/uploads/2024/01/Mining-trucks-stock-scaled-e1705093794841-768x512.jpeg",
        excerpt: "How the mining industry is becoming more sustainable...",
        tags: ["Mining", "Sustainability"],
        date: "March 27, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Metaverse: The Next Digital Frontier",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*AaGiAyTDOx0Feav0crP8QQ.jpeg",
        excerpt: "How the metaverse is shaping the future of digital interactions...",
        tags: ["Technology", "Metaverse"],
        date: "March 28, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "How AI is Transforming Gaming",
        image: "https://media.geeksforgeeks.org/wp-content/uploads/20240105174408/AI-in-Gaming-768.webp",
        excerpt: "The impact of artificial intelligence on modern gaming...",
        tags: ["AI", "Gaming"],
        date: "March 29, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "The Role of Blockchain in Supply Chain",
        image: "https://solistechnology.in/wp-content/uploads/2024/07/Blockchain-supply-1-768x320.webp",
        excerpt: "Enhancing transparency and security in supply chains...",
        tags: ["Technology", "Blockchain"],
        date: "March 30, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Electric Vehicles: The Road Ahead",
        image: "https://waya.media/wp-content/uploads/sites/3/2024/10/Egypt-aims-to-attract-Chinese-investments-in-the-electric-vehicles-sector.jpg.webp",
        excerpt: "How EVs are revolutionizing the automobile industry...",
        tags: ["Technology", "EV"],
        date: "March 31, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Smart Homes: The Future of Living",
        image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*lV2cSzuBUmfoCd2i9v8r8Q.jpeg",
        excerpt: "How IoT is making homes smarter and more efficient...",
        tags: ["Technology", "IoT"],
        date: "April 1, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Cloud Computing in 2024",
        image: "https://imageio.forbes.com/specials-images/imageserve/656623a046f40f879846f1ca/Cloud-Computing-Backup-Cyber-Security-Fingerprint-Identity-Encryption-Technology/960x0.jpg?format=jpg&width=960",
        excerpt: "New trends and advancements in cloud computing...",
        tags: ["Technology", "Cloud"],
        date: "April 2, 2024",
        author: "Anshuman Singh"
    },
    {
        title: "Green Energy Innovations",
        image: "https://www.gulla.net/contentassets/b1db970449ab439999ed800022e18d49/green-energy.jpg",
        excerpt: "Exploring new sustainable energy technologies...",
        tags: ["Energy", "Sustainability"],
        date: "April 3, 2024",
        author: "Anshuman Singh"
    }
];