import React from "react";
import "../../assets/components/NavigationBar.css";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Projects", link: "/projects" },
  { label: "Blog", link: "/blog" },
  { label: "Contact", link: "/contact" },
];

export default function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`navbar-item${item.label === "Projects" ? " active" : ""}`}
          >
            <a href={item.link} className="navbar-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}