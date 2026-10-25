import React from "react";
import { FaDatabase, FaNetworkWired, FaShieldAlt, FaRobot, FaMicrophone } from "react-icons/fa";

// Projects taken from the CV (shown together with the projects stored in Firebase)
export const cvProjects = [
  {
    id: "cv-honours",
    icon: <FaRobot />,
    date: "02/2026 – 11/2026",
    title: "Honours Research Project",
    des: "Design and Implementation of an Interpretable Transformer-Based Framework for Long-Term Cardiovascular Mortality Risk Prediction. Developed CardioTransNet-I, a transformer-based model that predicts 10-year cardiovascular mortality using data from 142,244 participants, applying data preprocessing, statistical modelling, cross-validation and SHAP explainable AI to identify key risk factors.",
  },
  {
    id: "cv-ddos",
    icon: <FaShieldAlt />,
    date: "08/2026 – 10/2026",
    title: "Computer Security Research Project",
    des: "Detection and Ranking of Suspected Botmaster Nodes During DDoS Attacks. Collaborated on a cybersecurity project using Random Forest to detect DDoS attacks with 99.93% accuracy, analysing network traffic from the CICDDoS2019 and CTU-13 datasets to rank suspected botmaster nodes.",
  },
  {
    id: "cv-xitsonga",
    icon: <FaMicrophone />,
    date: "02/2025 – 11/2025",
    title: "End-to-end Model for Xitsonga Language",
    des: "Machine Learning project. Self-taught Hugging Face Transformers to fine-tune a speech recognition model for a low-resource language, achieving 10% WER on the NCHLT dataset, and gained end-to-end ML pipeline experience from data cleaning to deployment.",
  },
  {
    id: "cv-router",
    icon: <FaNetworkWired />,
    date: "02/2026 – 05/2026",
    title: "Ubuntu Linux Router Configuration",
    des: "Configured an Ubuntu Linux router with NAT, DHCP, firewall and routing capabilities, and created two virtual machines to test network connectivity and communication through the router.",
  },
  {
    id: "cv-database",
    icon: <FaDatabase />,
    date: "02/2025 – 05/2025",
    title: "Database Management",
    des: "Designed a centralized database system to manage projects, employees, clients, inventory and IT support tickets, including ER diagrams, a normalized schema and a data dictionary, and developed SQL queries to support key reporting and business operations.",
  },
];

// Skills taken from the CV
export const cvSkillGroups = [
  { name: "Programming Languages", items: ["HTML", "CSS", "React", "JavaScript", "Python", "Java"] },
  { name: "Artificial Intelligence", items: ["Machine Learning", "Transformers", "Predictive Modelling", "Hugging Face"] },
  { name: "Database", items: ["PostgreSQL", "Oracle SQL", "Firebase", "MongoDB", "MySQL"] },
  { name: "Data & Analytics", items: ["SQL (joins, window functions, query optimization)", "ETL/ELT pipelines", "Data warehousing (star schema)", "Python (pandas)", "Data Cleaning", "Data Preprocessing", "Statistical Analysis", "Power BI"] },
  { name: "Data Analysis Tools", items: ["SPSS", "SAS", "Microsoft Excel", "B-BBEE"] },
  { name: "Networking", items: ["TCP/IP", "DNS, DHCP, HTTP/HTTPS, FTP", "OSI Model", "Router & Switch configuration", "Network troubleshooting", "IP addressing & subnetting", "PowerShell", "LAN / WAN / Wi-Fi", "Ubuntu Linux"] },
  { name: "Software Development", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "Git / GitHub", "GitHub Desktop", "REST APIs", "Oracle APEX"] },
];

// Achievements / certificates taken from the CV
export const cvAchievements = [
  { id: "cv-ach-ulsteam", title: "ULSTEAM Ambassador Programme – AI & Robotics", result: "Sept 2026", des: "Participated in a 5-day AI and machine learning workshop, exploring data analytics and Edge AI for flood early warning." },
  { id: "cv-ach-network", title: "Network Micro-Certification", result: "Certificate", des: "Completed the Network Layer Protocols Micro-Certification with a comprehensive understanding of network layer protocols." },
  { id: "cv-ach-hackathon", title: "Hackathon Competition Certificate", result: "Certificate", des: "Led a team through a 3-day Hackathon competition, applying technical problem-solving and collaboration skills in a fast-paced environment." },
  { id: "cv-ach-nemisa", title: "Digital Literacy Made Easy – NEMISA", result: "Certificate", des: "Certificate of Attendance for Introduction to Digital Literacy, Microsoft Office and Emerging Technologies." },
];

// Adds the CV items to the saved ones without repeating anything with the same title
export const mergeByTitle = (saved, extra) => {
  const seen = new Set(saved.map((i) => (i.title || "").toLowerCase().trim()));
  return [...saved, ...extra.filter((i) => !seen.has(i.title.toLowerCase().trim()))];
};
