import React from "react";
import "./Projects.css"; // CSS dosyasını bağladık
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      title: "Hava Durumu",
      description: "API kullanarak hava durumu uygulaması.",
      technologies: " Html5,Css3,Javascript",
      image: "../public/Images/weather-app.png",
      links: {
        github: "https://github.com/ygmrci/Api",
      },
    },
    {
      title: "MY TODO-LİST APP",
      description: "YAPILACAKLAR LİSTESİ UYGULAMASI",
      technologies: " HTML,CSS VE JAVASCRİPT",
      image: "../public/Images/todolist.png",
      links: {
        github: "https://github.com/ygmrci/TodoL-st",
      },
    },
    {
      title: "CALCULATOR",
      description: "HESAP MAKİNESİ UYGULAMASI",
      technologies: "HTML,CSS VE JAVASCRİPT",
      image: "../public/Images/calculator.png",
      links: {
        github: "https://github.com/ygmrci/calculator",
      },
    },
    {
      title: "CURRENCY RATE APP",
      description: "DÖVİZ KURU UYGULAMASI",
      technologies: "HTML,CSS VE JAVASCRİPT",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/currency-rate",
      },
    },
    {
      title: "ANALOG SAAT",
      description: "ANALOG SAAT UYGULAMASI",
      technologies: "HTML,CSS VE JAVASCRİPT",
      image: "../public/Images/analog-saat.png", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/analog-clock",
      },
    },
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {
      title: "MY PORTFOLİO",
      description: "",
      technologies: "",
      image: "../public/Images/portföy.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "E-TİCARET SİTESİ REACT İLE",
      description: "",
      technologies: "",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACT İLE MY TODO-LİST",
      description: "",
      technologies: "",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACT İLE HAVA DURUMU APP",
      description: "Weather api den güncel hava durumu uygulması",
      technologies: "React, React Router Dom,Weather api",
      image: "../public/Images/react-weather.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACT İLE FİLM SİTESİ",
      description:
        "TMDB film sitesine benzeyen ,o siteden api çekerek oluşturulmuş bir web site",
      technologies: "React ,React Router Dom, Axios,Metarial UI",
      image: "../public/Images/react_film.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "Javascript İLE RESİM UYUGULAMASI",
      description: "",
      technologies: "html,css,javascipt",
      image: "../public/Images/resim-bulma.png", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "Migros Money Kart ile Alışveriş Tutarı",
      description: " Inheritance(miras alma) kullanarak uygulama yapımı",
      technologies: "html,css,javascript ",
      image: "../public/Images/migros.png", // Görsel URL'si
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
