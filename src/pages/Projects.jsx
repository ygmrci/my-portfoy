import React from "react";
import "./Projects.css"; // CSS dosyasını bağladık
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      title: "WEATHER APP",
      description: "API kullanarak hava durumu uygulaması.",
      technologies: " Html5,Css3,Javascript",
      image: "/weather-app.png",
      links: {
        github: "https://github.com/ygmrci/Api",
      },
    },
    {
      title: "MY TODO-LİST APP",
      description: "YAPILACAKLAR LİSTESİ UYGULAMASI",
      technologies: " HTML,CSS VE JAVASCRİPT",
      image: "/todolist.png",
      links: {
        github: "https://github.com/ygmrci/TodoL-st",
      },
    },
    {
      title: "CALCULATOR",
      description: "HESAP MAKİNESİ UYGULAMASI",
      technologies: "HTML,CSS VE JAVASCRİPT",
      image: "/calculator.png",
      links: {
        github: "https://github.com/ygmrci/calculator",
      },
    },
    {
      title: "RİCK AND MORTY",
      description: "Rick and Morty Character List",
      technologies: "Next.js, React, Axios,SSR",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/currency-rate",
      },
    },
    {
      title: "ANALOG SAAT",
      description: "ANALOG SAAT UYGULAMASI",
      technologies: "HTML,CSS VE JAVASCRİPT",
      image: "/analog-saat.png", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/analog-clock",
      },
    },
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {
      title: "MY PORTFOLİO",
      description: " Portfolio web sitesi with React",
      technologies: " React, React Router Dom, CSS",
      image: "/portföy.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },

    {
      title: "REACT İLE HAVA DURUMU APP",
      description: "Current weather application from Weather API",
      technologies: "React, React Router Dom,Weather api",
      image: "/react-weather.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "MOVİE APP WİTH REACT",
      description:
        "A website similar to the TMDB movie site, created by pulling the API from that site. ",
      technologies: "React ,React Router Dom, Axios,Metarial UI",
      image: "/react_film.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "PICTURE SEARCH APP",
      description: "A website that searches for pictures from the API.",
      technologies: "html,css,javascipt",
      image: "/resim-bulma.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "MIGROS MONEY CARD APP",
      description: " Inheritance(miras alma) kullanarak uygulama yapımı",
      technologies: "html,css,javascript ",
      image: "/migros.png", // Görsel URL'si
      links: {
        github: "https://github.com", 
      },
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p>Here are some of my recent projects:</p>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
            <div className="project-links">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
