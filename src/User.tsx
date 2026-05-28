import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandX} from "@tabler/icons-react";

const Info = {
    name: "Bihan Banerjee",
    stack: ["Final Year Undergraduate", "Full Stack Web Developer", "DevSecOps Engineer", "Cybersecurity Researcher", "AIML Enthusiast"],
    bio: "I am a final year Computer Science student at VIT Vellore specialising in Information Security, with hands-on experience in cybersecurity, full-stack development and DevSecOps. I have built and shipped production-grade security tools including a PyPI-published CLI with 2,500+ downloads, filed a patent for AI-generated code analysis, and interned at Reliance Industries. I am passionate about building systems that sit at the intersection of security, infrastructure, and intelligent automation. Let's connect to discuss security research, open-source projects, or potential opportunities."
}

const ProjectInfo = [
    {
        title: "GuardOps",
        desc: "GuardOps is a production-grade DevSecOps CLI that wraps a complete secure delivery pipeline behind a single command. It integrates Semgrep, Bandit, Trivy, SonarQube, and OWASP ZAP across pre-deploy SAST and post-deploy DAST stages, blocking pipelines on HIGH+ severity findings. The tool deploys to AWS EKS via Helm with Terraform-managed VPC/ECR/IAM infrastructure, GitHub OIDC authentication (no static keys), and automatic rollback on CRITICAL DAST findings. A full Prometheus + Grafana observability stack provides custom application metrics and PromQL dashboards. Published to PyPI with 1,700+ downloads across 8 versioned releases and 167+ tests across 5 test suites.",
        image: "GuardOps.png",
        live: true,
        technologies: ["Python", "Docker", "Kubernetes", "Terraform", "AWS", "Helm", "Prometheus", "Grafana", "OWASP ZAP", "Trivy"],
        link: "https://pypi.org/project/guardops/",
        github: "https://github.com/Bihan-Banerjee/GuardOps"
    },
    {
        title: "CyberX",
        desc: "CyberX is a comprehensive web-based cybersecurity toolkit designed for learning, analysis, and simulation. It integrates offensive and defensive tools into a unified platform, including container and Kubernetes scanners, cryptography utilities (hashing, cipher, RSA/AES, JWT), steganography modules (image, audio, metadata), OSINT tools (breach checker, Google dorking), and advanced features like network packet analysis. The project also features PPO-based attacker-defender RL agents trained via adversarial self-play across 500K+ timesteps with real-time attack intelligence dashboards featuring geospatial globe-based visualization handling 1,000+ live events at sub-2s refresh latency.",
        image: "Cyber-X.png",
        live: true,
        technologies: ["React", "TypeScript", "Python", "Wireshark", "Node.js", "Reinforcement Learning"],
        link: "https://cyber-x-coral.vercel.app/",
        github: "https://github.com/Bihan-Banerjee/Cyber-X"
    },
    {
        title: "FortiScan",
        desc: "FortiScan is a cutting-edge web platform designed to analyze and secure AI-generated source code. The system accepts code snippets or uploaded files from models like ChatGPT, Gemini, or Copilot and scans them for vulnerabilities using tools like Semgrep, SonarQube, and Bandit. It then suggests or applies AI-generated security patches, ensuring safer deployments. The platform features a React + TypeScript frontend, Flask backend, and a modular design that supports multiple programming languages. Ideal for researchers and developers, it offers real-time insights, auto-fixes, and visual reports for secure development workflows.",
        image: "FortiScan.png",
        live: true,
        technologies: ["React", "TypeScript", "Flask", "Python", "Semgrep", "SonarQube", "Bandit"],
        link: "https://ai-code-security.vercel.app/",
        github: "https://github.com/Bihan-Banerjee/AI-Code-Security"
    },
    {
        title: "SheetSync",
        desc: "SheetSync is a lightweight real-time collaborative spreadsheet built with Next.js 15 and React 19. It enables concurrent users to edit, share, and synchronize spreadsheet data instantly with sub-second state distribution using Firebase real-time listeners. Features include a formula parsing engine with cross-cell referencing (SUM, arithmetic), collaborative presence indicators showing active cursors, document management, CSV and XLSX export, dynamic grid manipulation via drag interface, and full cell formatting including typography, alignment, borders, currency, and percentage. Secured with Google OAuth authentication.",
        image: "SheetSync.png",
        live: true,
        technologies: ["Next.js", "React", "Firebase", "TypeScript", "Tailwind CSS"],
        link: "https://sheet-sync-beryl.vercel.app/",
        github: "https://github.com/Bihan-Banerjee/SheetSync"
    },
    {
        title: "Serenity Gardens",
        desc: "Serenity Gardens is a dynamic, full-stack web platform designed to showcase and manage a family-owned garden estate. Built with the MERN stack (MongoDB, Express, React, Node.js) and styled using TailwindCSS, it features a modern, mobile-friendly interface for both visitors and administrators. Users can explore the rich biodiversity of the estate, browse a multimedia gallery, read reviews, and shop for home-grown produce, fish, and flowers. The Shop module includes secure user authentication, a persistent cart, and payment options via UPI, cash, or card. Admins can log in to manage product listings and view orders.",
        image: "SerenityGardens.png",
        live: true,
        technologies: ["React", "TypeScript", "Tailwind", "Node.js", "MongoDB", "Express.js", "Razorpay"],
        link: "https://www.serenitygardens.online/",
        github: "https://github.com/Bihan-Banerjee/Serenity-Gardens/"
    },
    {
        title: "NeuroPharm",
        desc: "NeuroPharm is an AI-powered research platform focused on drug discovery, enabling users to input protein IDs and visualize the best ligand interactions in 3D. By leveraging cutting-edge tools like AlphaFold for protein structures and ChEMBL for ligand databases, it automates complex bioinformatics processes. The system utilizes a full-stack architecture (React, Node.js, MongoDB) along with Python-powered molecular computation to deliver meaningful pharmacological predictions and visual insights for researchers and developers alike.",
        image: "NeuroPharm.png",
        live: true,
        technologies: ["React", "Node.js", "Python", "MongoDB", "ChEMBL API", "AlphaFold"],
        link: "https://gen-z-ai-neuro-pharm.vercel.app/",
        github: "https://github.com/ArshSharan/GenZ-AI-NeuroPharm"
    },
    {
        title: "Map-It",
        desc: "MapIt is a React + Leaflet-based geolocation utility that visualizes custom travel data on interactive maps. Featuring a clean, responsive UI built with TailwindCSS and Mantine, MapIt allows users to plot locations, add labels and notes, and explore spatial patterns through a user-friendly interface. The app leverages Leaflet's powerful mapping capabilities to support zoom, marker clustering, and dynamic layers. Ideal for documenting trips or planning logistics, MapIt focuses on usability and clarity, offering a smooth experience on both mobile and desktop.",
        image: "Map-It.png",
        live: true,
        technologies: ["React", "Leaflet", "MongoDB", "Tailwind", "Mantine UI", "GeoJSON"],
        link: "https://map-it-9g3b.vercel.app/",
        github: "https://github.com/Bihan-Banerjee/Map-It"
    },
    {
        title: "NetSentinel",
        desc: "NetSentinel is a modular passive wireless intelligence and threat detection framework that runs three detection engines simultaneously on a single capture stream. The Fingerprint engine handles passive OS detection, MAC OUI lookup, and live topology graphing. The Wireless IDS engine detects deauth floods, Evil Twin APs, PMKID harvesting, and ARP poisoning. The Protocol Intel engine tracks DNS timelines, HTTP credential leaks, TLS JA3 fingerprinting, and DHCP metadata. All events stream to a React dashboard over WebSocket in real-time. Supports both live monitor-mode capture and PCAP replay.",
        image: "NetSentinel.png",
        live: false,
        technologies: ["Python", "FastAPI", "Scapy", "React", "WebSocket", "SQLite", "D3.js", "Wireshark"],
        link: "https://github.com/Bihan-Banerjee/NetSentinel",
        github: "https://github.com/Bihan-Banerjee/NetSentinel"
    },
    {
        title: "ConsumeWise AI-Eyes",
        desc: "ConsumeWise AI-Eyes is an AI-powered health tracking tool designed to assess the nutritional quality of food products by scanning barcodes or entering EAN numbers. The platform delivers insights into ingredients, additives, and potential health risks using advanced language models. Built with a React frontend and Node.js backend, it ensures fast, responsive user experience and accurate information retrieval. By integrating Google's Gemini API and a MongoDB database, the app combines AI reasoning with scalable data handling for personalized recommendations.",
        image: "ConsumeWise.png",
        live: false,
        technologies: ["Docker", "Gemini API", "MongoDB", "React", "Node.js"],
        link: "https://github.com/ArshSharan/ConsumeWise-AI-Eyes",
        github: "https://github.com/ArshSharan/ConsumeWise-AI-Eyes"
    },
]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "TypeScript", "JavaScript", "React JS", "Next.js", "Angular", "Vite", "Redux", "Tailwind CSS", "Leaflet", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Flask", "FastAPI", "Node JS", "Express JS", "MySQL", "MS SQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Cybersecurity",
        skills: ["Kali Linux", "Wireshark", "Burp Suite", "Metasploit", "SonarQube", "Semgrep", "Bandit", "Trivy", "OWASP ZAP", "Nmap"]
    },
    {
        title: "DevSecOps & Cloud",
        skills: ["Docker", "Kubernetes", "Terraform", "AWS", "Helm", "GitHub Actions", "Prometheus", "Grafana", "Kafka"]
    },
    {
        title: "Languages & Tools",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python", "Git", "Github", "Bash"]
    },
    {
        title: "Machine Learning",
        skills: ["Jupyter", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"]
    },
]

const socialLinks = [
    { link: "https://github.com/Bihan-Banerjee", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/bihan-banerjee26/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/banerjee.bihan/", icon: IconBrandInstagram },
    { link: "https://x.com/BanerjeeBihan", icon: IconBrandX },
    { link: "https://www.leetcode.com/u/Bihan26/", icon: IconBrandLeetcode }
];

const ExperienceInfo = [
    {
        role: "Full Stack Intern",
        company: "Reliance Industries",
        date: "May 2026 - Present",
        desc: "Developing full-stack internal tooling for the Jamnagar refinery complex — the world's largest oil refinery — using Angular, Node.js, and MS SQL Server. Building RESTful APIs and dynamic frontend modules to support refinery operations and workflow data management systems.",
        skills: ["Angular", "Node.js", "MS SQL Server", "REST APIs", "Full Stack Development"]
    },
    {
        role: "MLOps Intern",
        company: "DCG Data-Core Systems India Pvt Ltd",
        date: "June 2025 - July 2025",
        desc: "Built and containerized a real-time sentiment analysis system on 50K+ IMDb reviews using Flask, TF-IDF vectorization, and Docker, achieving 89% accuracy. Automated streaming inference pipelines using Kafka and Zookeeper with live feedback dashboards.",
        skills: ["Flask", "Python", "Kafka", "Docker", "Jupyter", "Linux & Bash Scripting", "Machine Learning"]
    },
    {
        role: "General Secretary",
        company: "Mozilla Firefox Club VIT",
        date: "July 2024 - Present",
        desc: "As the General Secretary, I spearheaded the planning and execution of technical workshops, speaker sessions, and hackathons for 300+ students focused on open-source and emerging technologies. Anchored 50+ events and mentored juniors through technical workshops and club activities. Coordinated sponsorships, logistics, and cross-functional teams.",
        skills: ["General Management", "Public Speaking", "Team Leadership", "Event Planning", "Outreach"]
    },
    {
        role: "R&D Senior Core Member",
        company: "IEEE Computer Society, VIT",
        date: "May 2024 - Sept 2025",
        desc: "Worked on research-driven development projects, explored innovative tech stacks, and contributed to IEEE CS's annual publications and internal tools. Mentored junior members and helped drive the technical direction of ongoing society initiatives.",
        skills: ["Research & Documentation", "Technical Writing", "Mentorship", "Git", "Blog Writing"]
    },
]

const Slugs = [
    // Languages
    "typescript", "javascript", "python", "java", "cplusplus", "c",
    // Frontend
    "react", "nextdotjs", "angular", "html5", "css3", "tailwindcss",
    "vite", "redux", "leaflet", "materialui", "bootstrap", "d3dotjs",
    // Backend
    "nodedotjs", "express", "flask", "fastapi", "bash",
    // Databases
    "mongodb", "mysql", "postgresql", "firebase", "sqlite", "microsoftsqlserver",
    // DevSecOps & Cloud
    "docker", "kubernetes", "terraform", "amazonaws", "githubactions",
    "prometheus", "grafana", "apachekafka", "helm",
    // Cybersecurity
    "wireshark", "kalilinux", "metasploit", "sonarqube", "semgrep", "owasp", "burpsuite",
    // ML
    "jupyter", "pandas", "numpy", "scikitlearn", "tensorflow",
    // Tools
    "git", "github", "visualstudiocode", "postman", "canva", "vercel",
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };