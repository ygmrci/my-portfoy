import React from "react";
import "./Home.css"; // CSS dosyasını bağladık
import { FaGithub, FaLinkedin, FaDribbble, FaBehance } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>
          Hello, <br />
          I'm <span>Yağmur</span>.
        </h1>
        <p>I'm a software engineer specializing in the front end.</p>
        <p>I have a passion for  Web Development.</p>
        <div className="icons">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="../src/assets/YGMRCV.pdf" download>
            CV
          </a>
        </div>

        <Link to="/projects" style={{ textDecoration: "none" }}
        >
          <button className="projects-button">
            My Projects <HiOutlineArrowRight />
          </button>
        </Link>
      </div>
      <div className="image-section">
        <img src="../public/Images/profile.jpeg" alt="Yağmur" />
      </div>
    </div>
  );
};

export default Home;
