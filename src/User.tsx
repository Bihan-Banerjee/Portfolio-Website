import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandTwitter, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Bihan Banerjee",
    stack: ["3rd Year Undergraduate", "Full Stack Web Developer", "Competitive Programmer", "Cybersecurity Enthusiast", "AIML Enthusiast"],
    bio: "I am a third year Computer Science student at VIT Vellore with a strong foundation in programming languages like Java, Python, and C++. I am passionate about AI, machine learning, and cybersecurity, and am always trying to learn more in these domains. I am eager to apply my skills in internships and collaborative projects, contributing to impactful tech solutions while learning from experienced professionals. Let's connect to discuss tech trends, projects, or potential opportunities."
}



const ProjectInfo = [
    {
        title: "Ekart E-comm App",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Ekart.png",
        live: true,
        technologies: ["React", "Tailwind", "Redux", "Heroicons", "HeadlessUI"],
        link: "https://code-mars.github.io/Ekart/",
        github: "https://github.com/Code-Mars/Ekart/"
    },
    {
        title: "Facebook Clone",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Facebook.png",
        live: false,
        technologies: ["React", "Springboot", "MongoDB", "Tailwind", "Tabler-Icons", "Firebase"],
        link: "https://github.com/Code-Mars/Facebook-Clone",
        github: "https://github.com/Code-Mars/Facebook-Clone"
    },
    {
        title: "Spotify Clone",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Spotify.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Tabler-Icons", "MongoDB", "Firebase"],
        link: "https://github.com/Code-Mars/Spotify-Clone",
        github: "https://github.com/Code-Mars/Spotify-Clone"
    },
    {
        title: "Travel Tracker",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["React", "Node.js", "PostgresSQL", "Express", "Bootstrap"],
        link: "https://github.com/Code-Mars/Travel-Tracker",
        github: "https://github.com/Code-Mars/Travel-Tracker"
    },
    {
        title: "Instagram Clone",
        desc: "Instagram Clone is a full-stack web application that replicates the core features of Instagram, including user authentication, image uploading, and commenting. The front end is built with React, TailwindCSS, and Heroicons, while the back end uses Firebase for user authentication and image storage. Users can create an account, log in, upload images, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Instagram Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Instagram.png",
        live: false,
        technologies: ["React", "Springboot", "Tailwind", "Heroicons", "Firebase", "MongoDB"],
        link: "https://github.com/Code-Mars/Instagram-Clone",
        github: "https://github.com/Code-Mars/Instagram-Clone"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image: "CodeX.png",
        live: false,
        technologies: ["React", "Tailwind", "Ace Editor"],
        link: "https://github.com/Code-Mars/CodeX",
        github: "https://github.com/Code-Mars/CodeX"
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
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };