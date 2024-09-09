// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/frog.jpg";
import projectImage2 from "./assets/projects/meal.jpg";
import projectImage3 from "./assets/projects/playlist.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Shera Reisha S",
  tagline: "I build things for web",
  img: profile,
  about: `Halo! Saya Shera Reisha Santosa, seorang software developer dengan pengalaman lebih dari 2 tahun di SMKN 4 Bandung..`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "/",
  github: "/",
  twitter: "/",
  instagram:
    "https://www.instagram.com/shrrsha_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Quality Engineer",
    Company: `Curaweda Palagan Simbiotech`,
    Location: "Bandung, Jawa Barat",
    Type: "Full Time",
    Duration: "Present",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Junior Web Dev",
    Company: "SMKN 4",
    Location: "Bandung",
    Type: "Full Time",
    Duration: "July 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  vscode: vscode,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: " Lazyest Group ",
    image: projectImage1,
    description: `Game ini hampir mirip seperti game mario, tetapi game ini dibuat berbeda karna ketika si katak membuka peti maka akan keluar pertanyaan`,
    techstack: "C#, Unity",
    
  },
  {
    title: "Meal App",
    image: projectImage2,
    description: `Saya membuat website ini untuk menyelesaikan tugas dari bu Arne, web isi berisi resep makanan dari berbagai dunia`,
    techstack: "HTML, CSS, JavaScript",
    
  },
  {
    title: "Playlist",
    image: projectImage3,
    description: `Saya membuat desain mirip seperti spotify tetapi di ganti menggunakan foto teman-teman saya dan lagu favorit mereka `,
    techstack: "Figma",
    
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "sherareisha78@gmail.com",
  instagram: "@shrrsha_",
};
