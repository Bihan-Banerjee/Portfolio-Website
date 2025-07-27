import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandTwitter, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Bihan Banerjee",
    stack: ["3rd Year Undergraduate", "Full Stack Web Developer", "Competitive Programmer", "Cybersecurity Enthusiast", "AIML Enthusiast"],
    bio: "I am a third year Computer Science student at VIT Vellore with a strong foundation in programming languages like Java, Python, and C++. I am passionate about AI, machine learning, and cybersecurity, and am always trying to learn more in these domains. I am eager to apply my skills in internships and collaborative projects, contributing to impactful tech solutions while learning from experienced professionals. Let's connect to discuss tech trends, projects, or potential opportunities."
}



const ProjectInfo = [
    {
        title: "Serenity Gardens",
        desc: "Serenity Gardens is a dynamic, full-stack web platform designed to showcase and manage a family-owned garden estate. Built with the MERN stack (MongoDB, Express, React, Node.js) and styled using TailwindCSS, it features a modern, mobile-friendly interface for both visitors and administrators. Users can explore the rich biodiversity of the estate, browse a multimedia gallery, read reviews, and shop for home-grown produce, fish, and flowers. The Shop module includes secure user authentication, a persistent cart, and payment options via UPI, cash, or card. Admins can log in to manage product listings and view orders. Serenity Gardens blends natural beauty with technical sophistication for an engaging and immersive experience.",
        image: "Serenity Gardens.png",
        live: true,
        technologies: ["React","TypeScript", "Tailwind", "Node.js", "MongoDB", "Express.js"],
        link: "https://serenity-gardens-pi.vercel.app/",
        github: "https://github.com/Bihan-Banerjee/Serenity-Gardens/"
    },
    {
        title: "Map-It",
        desc: "MapIt is a React + Leaflet-based geolocation utility that visualizes custom travel data on interactive maps. Featuring a clean, responsive UI built with TailwindCSS and Mantine, MapIt allows users to plot locations, add labels and notes, and explore spatial patterns through a user-friendly interface. The app leverages Leaflet’s powerful mapping capabilities to support zoom, marker clustering, and dynamic layers. Ideal for documenting trips or planning logistics, MapIt focuses on usability and clarity, offering a smooth experience on both mobile and desktop. With scalable architecture and future-ready integration for Firebase or cloud storage, MapIt is a reliable tool for intuitive, map-based storytelling.",
        image: "Map-It.png",
        live: true,
        technologies: ["React", "Leaflet", "MongoDB", "Tailwind", "Mantine UI", "GeoJSON"],
        link: "https://map-it-9g3b.vercel.app/",
        github: "https://github.com/Bihan-Banerjee/Map-It"
    },
    {
        title: "ConsumeWise AI-Eyes",
        desc: "ConsumeWise AI-Eyes is an AI-powered health tracking tool designed to assess the nutritional quality of food products by scanning barcodes or entering EAN numbers. The platform delivers insights into ingredients, additives, and potential health risks using advanced language models. Built with a React frontend and Node.js backend, it ensures fast, responsive user experience and accurate information retrieval. By integrating Google's Gemini API and a MongoDB database, the app combines AI reasoning with scalable data handling for personalized recommendations.",
        image: "ConsumeWise.png",
        live: false,
        technologies: ["React", "Node.js", "Express.js", "Gemini API", "MongoDB"],
        link: "https://github.com/ArshSharan/ConsumeWise-AI-Eyes",
        github: "https://github.com/ArshSharan/ConsumeWise-AI-Eyes"
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
        title: "Secure Code Whisperer",
        desc: "Secure Code Whisperer is a cutting-edge web platform designed to analyze and secure AI-generated source code. The system accepts code snippets or uploaded files from models like ChatGPT, Gemini, or Copilot and scans them for vulnerabilities using tools like Semgrep, SonarQube, and Bandit. It then suggests or applies AI-generated security patches, ensuring safer deployments. The platform features a React + TypeScript frontend, Flask backend, and a modular design that supports multiple programming languages. Ideal for researchers and developers, it offers real-time insights, auto-fixes, and visual reports for secure development workflows.",
        image: "Secure Code Whisperer.png",
        live: false,
        technologies: ["React", "TypeScript", "Flask", "Python", "Semgrep", "SonarQube"],
        link: "https://github.com/Bihan-Banerjee/AI-Code-Security",
        github: "https://github.com/Bihan-Banerjee/AI-Code-Security"
    },
    {
        title: "RogueAI",
        desc: "A Reinforcement Learning agent in a custom Gridworld environment, RogueAI is a simulation-based AI project that explores reinforcement learning through a custom-built Gridworld survival environment. The agent learns optimal navigation and decision-making strategies through reward-based training using Q-learning and deep reinforcement techniques. Developed in Unity for immersive game simulation and Python for training algorithms, the project allows real-time visualization of the AI’s learning progression. It's a foundational experiment in adaptive AI behavior, game AI design, and RL-based decision systems.",
        image: "work_in_progress.png",
        live: false,
        technologies: ["Unity", "Python", "PyTorch"],
        link: "https://github.com/Bihan-Banerjee/Rogue-AI",
        github: "https://github.com/Bihan-Banerjee/Rogue-AI"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "TypeScript", "JavaScript", "React JS", "Vite", "Redux", "Tailwind CSS", "Leaflet", "Material UI", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Flask", "Node JS", "Express JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"]
    },
    {
        title: "Cybersecurity",
        skills: ["Kali", "Wireshark", "Bash", "SonarQube", "Semgrep", "BurpSuite", "Metasploit"]
    },
    {
        title: "Machine Learning",
        skills: ["Jupyter", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "Docker", "Canva", "Unity", "Kafka"]
    }
]
const socialLinks = [
    { link: "https://github.com/Bihan-Banerjee", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/bihan-banerjee-70905228b/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/banerjee.bihan/", icon: IconBrandInstagram }, 
    { link: "https://x.com/BanerjeeBihan", icon: IconBrandX },
    { link: "https://www.leetcode.com/u/Bihan26/", icon: IconBrandLeetcode }
];


const ExperienceInfo = [
    {
        role: "Events Head",
        company: "Mozilla Firefox Club VIT",
        date: "June 2024 - Present",
        desc: "As Events Head, I spearheaded the planning and execution of technical workshops, speaker sessions, and hands-on hack events focused on open-source and emerging technologies. I collaborated with external clubs and industry experts to curate engaging content and boost student participation across campus.",
        skills: ["General Management", "Public Speaking", "Team Leadership", "Event Planning", "Outreach"]
    },
    {
        role: "R&D Senior Core Member",
        company: "IEEE Computer Society, VIT",
        date: "May 2024 - Present",
        desc: "In my role as a senior core member of the R&D team, I worked on research-driven development projects, explored innovative tech stacks, and contributed to IEEE CS’s annual publications and internal tools. I also mentored junior members and helped drive the technical direction of ongoing society initiatives.",
        skills: ["Research & Documentation", "Technical Writing", "Mentorship", "Git", "Blog Writing"]
    },
    {
        role: "MLOps Intern",
        company: "DCG Data-Core Systems India Pvt Ltd",
        date: "June 2025 - July 2025",
        desc: "During my internship, I built a real-time sentiment analysis system using IMDb datasets with a Flask-based API, Kafka for streaming, and a live dashboard for visualization. The project involved integrating ML model inference, ensuring robust performance, and deploying the solution for internal evaluation.",
        skills: ["Flask", "Python", "Kafka", "Jupyter", "Linux & Bash Scripting", "DevOps", "Machine Learning"]
    }
]
const Slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "mysql",
    "postgresql",
    "firebase",
    "vercel",
    "testinglibrary",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "sonarqube",
    "vite",
    "tailwindcss",
    "kafka",
    "leaflet",
    "mantine",
    "pandas",
    "numpy",
    "kali",
    "wireshark",
    "bash",
    "sonarcloud",
    "semgrep",
    "burpsuite",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };