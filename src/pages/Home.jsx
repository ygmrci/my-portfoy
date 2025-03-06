import React from "react";
import "./Home.css"; // CSS dosyasını bağladık
import { FaGithub, FaLinkedin } from "react-icons/fa";
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

        <p style={{ fontSize: "30px" }}>
          I'm a software engineer specializing in the front end.
        </p>
        <p style={{ fontSize: "30px" }}>
          I have a passion for Web Development.
        </p>

        <div className="icons">
          <a
            style={{ marginRight: "35px" }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            style={{ marginRight: "35px" }}
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

        <Link to="/projects" style={{ textDecoration: "none" }}>
          <button
            className="projects-button"
            style={{
              fontFamily: "Dancing Script",
              padding: "25px",
              fontSize: "25px",
            }}
          >
            My Projects <HiOutlineArrowRight />
          </button>
        </Link>
      </div>
      <div className="image-section">
        <img
          src="/profile.png"
          alt="Yağmur"
          style={{ width: "280px", height: "370px" }}
        />
      </div>
    </div>
  );
};

export default Home;
