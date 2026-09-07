export const navigation = [
  { label: "Home", href: "#home", image: "/img/homeHeader.jpg" },
  { label: "About", href: "#about", image: "/img/aboutHeader.jpg" },
  { label: "Projects", href: "#projects", image: "/img/projectsHeader.jpeg" },
  {
    label: "Experience",
    href: "#experience",
    image: "/img/experienceHeader.jpg",
  },
  { label: "Contact", href: "#contact", image: "/img/contactHeader.jpg" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/benmcca/",
    image: "/img/linkedinIcon.png",
  },
  {
    label: "GitHub",
    href: "https://github.com/benmcca",
    image: "/img/githubIcon.png",
  },
  {
    label: "Email",
    href: "mailto:benmccabe19@gmail.com",
    image: "/img/mailIcon.png",
  },
];

export const projects = [
  {
    title: "Art Portfolio",
    date: "Sept. '26",
    href: "https://benmakes.vercel.app/",
    image: "/img/artPortfolioThumbnail.jpeg",
    description:
      "A website to display some of my paintings, woodworking projects, and videos I've created.",
  },
  {
    title: "DigiFit",
    date: "Dec. '24",
    href: "https://www.youtube.com/watch?v=bpV8qwx5OAY",
    image: "/img/DigiFit.png",
    description:
      "A mobile app made in Kotlin, enabling users to create a digital closet by uploading photos of their clothing and posting outfit combinations of their digital clothing items.",
  },
  {
    title: "myRotations",
    date: "May '24 - July '24",
    href: "https://myrotations.vercel.app/",
    image: "/img/myRotationsThumbnail.jpg",
    description:
      "A music discovery platform leveraging the MERN stack and iTunes API to explore my most listened-to albums with an engaging user interface I designed.",
  },
];

export const education = [
  {
    school: "Georgia Institute of Technology",
    logo: "/img/gt.png",
    degree: "OMSCS - Specialization in Artificial Intelligence",
    credential: "Master of Science in Computer Science",
    date: "2025 -",
    current: true,
    details: ["Machine Learning for Trading, Game AI"],
  },
  {
    school: "New Jersey Institute of Technology",
    logo: "/img/njit.jpg",
    degree: "Albert Dorman Honors College",
    credential: "Bachelor of Science in Computer Science",
    date: "2021 - 2025",
    details: [
      "Adv. Data Structures & Algorithms, Adv. Web Development, Mobile Programming, UI Design, Machine Learning, C Programming, Computer Networks, Data Science, Database Design & Management, Cybersecurity",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Optum",
    logo: "/img/optum.png",
    date: "July '25 -",
    current: true,
    details: [
      "Built the platform's homepage feed experience with cursor-based pagination, trending content logic, content filtering, and featured content capabilities for a scalable content feed.",
      "Led end-to-end implementation of an AI-powered conversational platform, designing chat workflows, messaging APIs and user interfaces, conversation history management, caching mechanisms, and automated test coverage.",
      "Designed and implemented post comment workflows, content lifecycle management, and multi-user feedback systems through database, API, and service-layer enhancements.",
      "Contributed to Azure security and infrastructure improvements by remediating vulnerabilities, enforcing resource-tagging policies, provisioning staging resources, and supporting migration efforts from legacy systems.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Colgate-Palmolive",
    logo: "/img/colgate.jpeg",
    date: "Sept. '23 - May '24",
    details: [
      "Enhanced product data quality and consistency by using JavaScript to sync attributes and digital assets in Stibo PIM, improving product listings across major online retailers.",
      "Implemented product archiving, reducing clutter and streamlining lifecycle management for thousands of SKUs.",
      "Improved customer access to nutrition facts by building a web UI to display product information online.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Optum",
    logo: "/img/optum.png",
    date: "June '24 - Aug. '24",
    details: [
      "Migrated Jenkinsfile Pipelines to Github Actions, seamlessly integrating with a preexisting codebase on Github, improving security and enhancing monitoring of CI/CD processes for over 60 repositories.",
      "Achieved cost savings of $400k by eliminating licensing, storage, computing, and support costs.",
      "Led a team of interns by facilitating daily standup meetings, sprint retrospectives, and managing the Agile Board to delegate tasks and ensure timely project delivery.",
    ],
  },
  {
    role: "IT Developer Intern",
    company: "Colgate-Palmolive",
    logo: "/img/colgate.jpeg",
    date: "Sept. '23 - May '24",
    details: [
      "Automated CSV file transfers from AWS S3 to Google Drive using AWS Lambda and developed a Google Apps Script to detect and convert incoming files to Google Sheets, eliminating manual data uploads.",
      "Collaborated with interns to build a server status dashboard with real-time Splunk data visualization, improving visibility into system uptime.",
      "Integrated a Python script with Splunk for automated Rapid7 API data retrieval and built interactive dashboards with dynamic filters and time pickers for faster issue diagnosis.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Optum",
    logo: "/img/optum.png",
    date: "June '23 - Aug. '23",
    details: [
      "Designed and built a responsive internal job board website using React and CSS, implementing drag-and-drop, filters, and search bar functionality to improve user experience when applying to roles.",
      "Created static and dynamic data retrieval endpoints using NodeJS to connect the database to the front-end website allowing users to view and interact with the positions offered.",
      "Integrated SQL update queries and update endpoints to ensure the database gets modified based on user interactions.",
    ],
  },
  {
    role: "IT Developer Intern",
    company: "Colgate-Palmolive",
    logo: "/img/colgate.jpeg",
    date: "June '22 - May '23",
    details: [
      "Developed multiple Google Chrome Extensions using Google Apps Script to automate data reporting and maintain synchronization of Test & Production databases on Splunk.",
      "Streamlined employee tasks and enhanced team efficiency by creating workflow tools and scripts to reduce manual tasks, resulting in improved ticket completion rates.",
      "Utilized the Stonebranch automation tool to schedule and manage IT processes held on SAP and Linux servers.",
    ],
  },
  {
    role: "Material Science Research Intern",
    company: "Becton Dickinson",
    logo: "/img/bd.jpg",
    date: "Sept. '20 - May '21",
    details: [
      "Created a material science analysis desktop application that utilizes OpenCV image recognition to evaluate videos of different rubbers under increasing tensile stress.",
      "Applied the Pandas library to analyze the collected data, identifying strengths and weaknesses within each material to guide the development of medical syringes.",
    ],
  },
];

export const aboutImages = {
  default: { src: "/img/aboutme/me.jpg", rotation: "-2deg" },
  njit: { src: "/img/aboutme/njit.jpeg", rotation: "1deg" },
  skateboarding: { src: "/img/aboutme/skateboarding.JPG", rotation: "3deg" },
  hiking: { src: "/img/aboutme/hiking.jpg", rotation: "1deg" },
  yoyo: { src: "/img/aboutme/yoyoing.jpg", rotation: "4deg" },
  blonde: { src: "/img/aboutme/blonde.jpeg", rotation: "2deg" },
  rodeo: { src: "/img/aboutme/rodeo.jpg", rotation: "3deg" },
  what: { src: "/img/aboutme/whatcouldpossiblygowrong.webp", rotation: "4deg" },
  lets: { src: "/img/aboutme/letsstarthere.jpeg", rotation: "1deg" },
};
