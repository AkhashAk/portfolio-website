import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import wizchat from "@/public/wizchat.png";
import mindspire from "@/public/Mindspire.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Tamilnadu College of Engineering",
    location: "Coimbatore, India",
    description:
      "I graduated with a Bachelor of Engineering degree in Computer Science and Engineering from TCE.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Associate Software Engineer",
    location: "Bangalore, India",
    description:
      "I worked as a ASE for 2 years in Accenture, India. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Software Engineer Analyst",
    location: "Coimbatore, India",
    description:
      "I'm now a full-stack developer working in Accenture. My stack includes React, Node, Spring Boot, JavaScript, MongoDB and MySQL.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
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
  "Spring Boot",
  "JavaScript",
  "Java",
  "MongoDB",
  "Redux",
  "HTML",
  "CSS",
  "TypeScript",
  "Next.js",
  "Git",
  "Tailwind",
] as const;
