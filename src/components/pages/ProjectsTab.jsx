import React from "react";
import "../../assets/BlockStyles.css";
import "../../assets/pages/ProjectsTabStyle.css";
import LeftImage from "../../assets/images/Art.jpg";
import NavigationBar from "../assets/NavigationBar.jsx";

const projects = [
  {
    title: "Luminous",
    type: "Visual Design",
    year: 2025,
    link: "/projects/luminous",
  },
  {
    title: "Nova",
    type: "Product Design",
    year: 2024,
    link: "/projects/nova",
  },
  {
    title: "Osaka",
    type: "Branding",
    year: 2023,
    link: "/projects/osaka",
  },
  {
    title: "Atlas",
    type: "Photography",
    year: 2022,
    link: "/projects/atlas",
  },
  {
    title: "Prism",
    type: "UI/UX Design",
    year: 2021,
    link: "/projects/prism",
  },
];

export default function App() {
  return (
    <div className="main-container">
      <div className="left-block">
        <img
          src={ LeftImage }
          alt="Описание изображения"
          className="left-block-img"
        />
      </div>
      <div className="right-block projects-block">
        <NavigationBar />
        <h2 className="projects-title">Projects</h2>
        <p className="projects-desc">
          Here’s a collection of the work I’ve had the privilege to bring to life. Each project tells a unique story, crafted with creativity and attention to detail. Here’s a collection of the work I’ve had the privilege to bring to life. Each project tells a unique story, crafted with creativity and attention to detail.
        </p>
        <ul className="projects-list">
          {projects.map((project) => (
            <li key={project.title} className="project-item">
              <a href={project.link} className="project-link">
                <span className="project-title">
                  {project.isNew && <span className="project-badge">NEW</span>}
                  {project.title}
                </span>
                <span className="project-type">{project.type}</span>
                <span className="project-year">{project.year}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}