import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import wizchat from "@/public/wizchat.png";
import mindspire from "@/public/Mindspire.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    companyName: "Tamilnadu College of Engineering",
    logo: '',
    width: 0,
    height: 0,
    title: "Computer Science and Engineering",
    location: "Coimbatore, Tamil Nadu, India",
    description:
      "I graduated with a Bachelor of Engineering degree in Computer Science and Engineering from TCE.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    companyName: "Accenture",
    logo: "/ACN_logo.png",
    width: 40,
    height: 40,
    title: "Associate Software Engineer",
    location: "Bangalore, Karnataka, India",
    description:
      "I worked as a ASE for 2 years in Accenture, India. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    companyName: "Accenture",
    logo: "/ACN_logo.png",
    width: 40,
    height: 40,
    title: "Software Engineer Analyst",
    location: "Coimbatore, Tamil Nadu, India",
    description:
      "Contibuted as a full-stack developer in Accenture. My stack includes React, Node, JavaScript, MongoDB and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    companyName: "Lowe's India",
    logo: "/LOWES_logo.png",
    width: 70,
    height: 50,
    title: "Software Engineer",
    location: "Bangalore, Karnataka, India",
    description:
      "Working as a Full stack developer mainly focused on UI and ssr. My stack includes React, Node, JavaScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Mindspire",
    description:
      "Mindspire is a blog app build using React and Node.js, where users can share their thougths about anything.",
    tags: ["React", "Node.js", "MongoDB", "Express", "AWS Lambda", "AWS APIGateway", "DynamoDB"],
    imageUrl: mindspire,
    demo_url: "https://mindspire-frontend-jcu816kk3-akhashs-projects.vercel.app"
  },
  {
    title: "WIZChat",
    description:
      "Developed a full-stack chat app with socket.io for real-time messaging. Users can chat with their friends and family with ease.",
    tags: ["React", "Node.js", "MongoDB", "socket.io", "Express"],
    imageUrl: wizchat,
    demo_url: "https://github.com/AkhashAk/WIZChat---Real-time-chat-application"
  },
] as const;

export const skillsData = [
  "ReactJs",
  "NodeJs",
  "JavaScript",
  "MongoDB",
  "Redux",
  "HTML",
  "CSS",
  "TypeScript",
  "Git",
  "Tailwind",
  "Styled Components",
  "Agentic AI Development"
] as const;
