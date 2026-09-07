import homeHeader from "../assets/images/homeHeader.jpg";
import aboutHeader from "../assets/images/aboutHeader.jpg";
import projectsHeader from "../assets/images/projectsHeader.jpeg";
import experienceHeader from "../assets/images/experienceHeader.jpg";
import contactHeader from "../assets/images/contactHeader.jpg";
import linkedinIcon from "../assets/images/linkedinIcon.png";
import githubIcon from "../assets/images/githubIcon.png";
import mailIcon from "../assets/images/mailIcon.png";
import artPortfolioThumbnail from "../assets/images/artPortfolioThumbnail.jpeg";
import digiFitThumbnail from "../assets/images/DigiFit.png";
import myRotationsThumbnail from "../assets/images/myRotationsThumbnail.jpg";
import georgiaTechLogo from "../assets/images/gt.png";
import njitLogo from "../assets/images/njit.jpg";
import optumLogo from "../assets/images/optum.png";
import colgateLogo from "../assets/images/colgate.jpeg";
import bdLogo from "../assets/images/bd.jpg";
import aboutMe from "../assets/images/me.jpg";
import njitAbout from "../assets/images/njit.jpeg";
import skateboarding from "../assets/images/skateboarding.JPG";
import hiking from "../assets/images/hiking.jpg";
import yoyoing from "../assets/images/yoyoing.jpg";
import blonde from "../assets/images/blonde.jpeg";
import rodeo from "../assets/images/rodeo.jpg";
import whatCouldPossiblyGoWrong from "../assets/images/whatcouldpossiblygowrong.webp";
import letsStartHere from "../assets/images/letsstarthere.jpeg";

export const navigation = [
  { label: "Home", href: "#home", image: homeHeader },
  { label: "About", href: "#about", image: aboutHeader },
  { label: "Projects", href: "#projects", image: projectsHeader },
  {
    label: "Experience",
    href: "#experience",
    image: experienceHeader,
  },
  { label: "Contact", href: "#contact", image: contactHeader },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/benmcca/",
    image: linkedinIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/benmcca",
    image: githubIcon,
  },
  {
    label: "Email",
    href: "mailto:benmccabe19@gmail.com",
    image: mailIcon,
  },
];

export const projects = [
  {
    title: "Art Portfolio",
    date: "Sept. '26",
    href: "https://benmakes.vercel.app/",
    image: artPortfolioThumbnail,
    description:
      "A personal portfolio showcasing my paintings, woodworking projects, videos, and other creative work.",
  },
  {
    title: "DigiFit",
    date: "Dec. '24",
    href: "https://www.youtube.com/watch?v=bpV8qwx5OAY",
    image: digiFitThumbnail,
    description:
      "A Kotlin mobile app that lets users build a digital closet from photos of their clothing and create and share outfit combinations.",
  },
  {
    title: "myRotations",
    date: "May '24 - July '24",
    href: "https://myrotations.vercel.app/",
    image: myRotationsThumbnail,
    description:
      "A music discovery platform built with the MERN stack and iTunes API, featuring my most-listened-to albums and a UI I'm especially proud of.",
  },
];

export const education = [
  {
    school: "Georgia Institute of Technology",
    logo: georgiaTechLogo,
    degree: "M.S. in Computer Science — Artificial Intelligence",
    credential: "OMSCS",
    date: "2025 -",
    current: true,
    details: ["Machine Learning for Trading, Game AI"],
  },
  {
    school: "New Jersey Institute of Technology",
    logo: njitLogo,
    degree: "B.S. in Computer Science",
    credential: "Albert Dorman Honors College",
    date: "2021 - 2025",
    details: [
      "Data Structures & Algorithms, Web Development, Mobile Programming, UI Design, Machine Learning, Data Science",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Optum",
    logo: optumLogo,
    date: "July '25 -",
    current: true,
    details: [
      "Built the platform's homepage feed with cursor-based pagination, trending content, content filtering, and featured content capabilities.",
      "Led the end-to-end development of an AI-powered conversational platform, designing chat workflows, messaging APIs, user interfaces, conversation history, caching, and automated test coverage.",
      "Designed and implemented post commenting, content lifecycle management, and multi-user feedback systems across the database, API, and service layers.",
      "Improved Azure security and infrastructure by remediating vulnerabilities, enforcing resource-tagging policies, provisioning staging resources, and supporting legacy-system migrations.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Colgate-Palmolive",
    logo: colgateLogo,
    date: "Sept. '23 - May '24",
    details: [
      "Improved product data quality and consistency by using JavaScript to synchronize attributes and digital assets in Stibo PIM, improving listings across major online retailers.",
      "Implemented product archiving to streamline lifecycle management for thousands of SKUs.",
      "Improved customer access to nutrition facts by building a web UI to display product information online.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Optum",
    logo: optumLogo,
    date: "June '24 - Aug. '24",
    details: [
      "Migrated CI/CD pipelines from Jenkins to GitHub Actions across 60+ repositories, improving security and monitoring while eliminating legacy infrastructure dependencies.",
      "Generated $400K in annual cost savings by eliminating licensing, storage, computing, and support costs.",
      "Led a team of interns by facilitating daily standups and sprint retrospectives, managing the Agile board, and coordinating task assignments to ensure timely delivery.",
    ],
  },
  {
    role: "IT Developer Intern",
    company: "Colgate-Palmolive",
    logo: colgateLogo,
    date: "Sept. '23 - May '24",
    details: [
      "Automated CSV transfers from AWS S3 to Google Drive using AWS Lambda and Google Apps Script, automatically converting incoming files to Google Sheets and eliminating manual uploads.",
      "Collaborated with interns to build a server status dashboard with real-time Splunk data visualization, improving visibility into system uptime.",
      "Integrated a Python script with Splunk for automated Rapid7 API data retrieval and built interactive dashboards with dynamic filters and time pickers for faster issue diagnosis.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Optum",
    logo: optumLogo,
    date: "June '23 - Aug. '23",
    details: [
      "Designed and built a responsive internal job board using React and CSS, with drag-and-drop, filtering, and search functionality.",
      "Built Node.js endpoints to connect the database to the frontend, enabling users to view and interact with available positions.",
      "Implemented SQL update queries and API endpoints to persist user interactions to the database.",
    ],
  },
  {
    role: "IT Developer Intern",
    company: "Colgate-Palmolive",
    logo: colgateLogo,
    date: "June '22 - May '23",
    details: [
      "Used Google Apps Script to automate data reporting and maintain synchronization of Test & Production databases on Splunk.",
      "Enhanced team efficiency by creating workflow tools and scripts to reduce manual tasks, resulting in improved ticket completion rates.",
      "Utilized Stonebranch to schedule and manage IT processes held on SAP and Linux servers.",
    ],
  },
  {
    role: "Material Science Research Intern",
    company: "Becton Dickinson",
    logo: bdLogo,
    date: "Sept. '20 - May '21",
    details: [
      "Built a desktop application using OpenCV to analyze videos of rubber samples under increasing tensile stress.",
      "Analyzed test data with Pandas to identify material strengths and weaknesses, informing the development of medical syringes.",
    ],
  },
];

export const aboutImages = {
  default: { src: aboutMe, rotation: "-2deg" },
  njit: { src: njitAbout, rotation: "1deg" },
  skateboarding: { src: skateboarding, rotation: "3deg" },
  hiking: { src: hiking, rotation: "1deg" },
  yoyo: { src: yoyoing, rotation: "4deg" },
  blonde: { src: blonde, rotation: "2deg" },
  rodeo: { src: rodeo, rotation: "3deg" },
  what: { src: whatCouldPossiblyGoWrong, rotation: "4deg" },
  lets: { src: letsStartHere, rotation: "1deg" },
};
