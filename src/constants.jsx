const META = {
    title: "Aram Zaprosyan",
    description: "Aram Zaprosyan",
};

const INTRO_DATA = {
    title: "Hi! I’m Aram Zaprosyan",
    statements: [
        "I love coding",
        "I'm a puzzle enthusiast",
        "I write mysteries",
        "I play soccer",
    ],
    description: `I'm a jack of all trades, master of some. 
        When I'm not coding, you'll probably catch me playing soccer,
        writing detective fiction stories, or catching rays at the beach.
        You're welcome to explore my portfolio and get in touch with me!`
};

const ABOUT_ME_BLURB = {
    aboutMe: `I graduate in May of 2026 from the University of Maryland, College Park
        with a Bachelor of Science (B.S.) in Computer Science, a minor in Cybersecurity
        through the Advanced Cybersecurity Experience for Students (ACES) Honors Program, and
        a minor in Data Science. I've worked as a software engineer, computer science researcher,
        and teaching assistant. I'm very passionate about full stack software engineering work and 
        always open to chat!`,
};
const WORK_HISTORY = [{
        job: "Software Engineer (Part-Time)",
        company: "Ncyber",
        dates: "Aug. 2025 - Present",
    },
    {
        job: "Software Engineering Intern",
        company: "Ncyber",
        dates: "June 2025 - Aug. 2025",
    },
    {
        job: "CS Researcher",
        company: "UMD Department of CS",
        dates: "Aug. 2024 - Present",
    },
    {
        job: "Software Engineering Intern",
        company: "Ncyber",
        dates: "June 2024 - Aug. 2024",
    },
    {
        job: "Software Engineering Intern",
        company: "U.S. Dept. of VA (VSFS)",
        dates: "Aug. 2023 - May 2024",
    },
    {
        job: "CS Teaching Assistant",
        company: "UMD Department of CS",
        dates: "Aug. 2023 - May 2024",
    }
];

const SKILLS = [
    "Java/Kotlin",
    "Python",
    "JavaScript/React",
    "Linux/Bash",
    "x86-64 Assembly",
    "SQL/PostgreSQL/MySQL/SQLite",
    "NoSQL/MongoDB",
    "Racket/OCaml",
    "C",
    "HTML/CSS",
    "MaterialUI",
    "Git/GitHub/GitLab",
    "Visual Studio Code / PyCharm / Eclipse / Vim"
];

const RELEVANT_COURSEWORK = [
    "Introduction to Compilers (CMSC430)",
    "Bioinformatic Algorithms, Databases, and Tools (CMSC423)"
];

// const services = [{
//         title: "UI & UX Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Mobile Apps",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
//     {
//         title: "Wordpress Design",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
//     },
// ];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const CONTACT_INFO = {
    email: "aram.zaprosyan@gmail.com",
    description: "Feel free to send me a message through here or directly to my email yourself!",
    serviceId: "service_l3768bs",
    templateId: "template_2czmgdm",
    publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const SOCIAL_PROFILES = {
    LinkedIn: "https://www.linkedin.com/in/aram-zaprosyan/",
    GitHub: "https://github.com/azapo",
    "Google Scholar": "https://scholar.google.com/citations?user=1gAuwGgAAAAJ&hl=en&oi=ao"
};
export {
    META,
    ABOUT_ME_BLURB,
    dataportfolio,
    WORK_HISTORY,
    SKILLS,
    RELEVANT_COURSEWORK,
    INTRO_DATA,
    CONTACT_INFO,
    SOCIAL_PROFILES
};