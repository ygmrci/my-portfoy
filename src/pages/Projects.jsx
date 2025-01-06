import React from "react";
import "./Projects.css"; // CSS dosyasını bağladık
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      title: "Hava Durumu",
      description:
        "API kullanarak hava durumu uygulaması.",
      technologies:
        " Html5,Css3,Javascript",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/Api",
      },
    },
    {
      title: "MY TODO-LİST APP",
      description:
        "YAPILACAKLAR LİSTESİ UYGULAMASI",
      technologies:
        " HTML,CSS VE JAVASCRİPT",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/TodoL-st",
      },
    },
    {
      title: "CALCULATOR",
      description:
        "HESAP MAKİNESİ UYGULAMASI",
      technologies:
        "HTML,CSS VE JAVASCRİPT",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/calculator",
      },
    },
    {
      title: "CURRENCY RATE APP",
      description:
        "DÖVİZ KURU UYGULAMASI",
      technologies:
        "HTML,CSS VE JAVASCRİPT",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/currency-rate",
      },
    },
    {
      title: "E-Commerce Web App",
      description:
        "ANALOG SAAT UYGULAMASI",
      technologies:
        "HTML,CSS VE JAVASCRİPT",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com/ygmrci/analog-clock",
      },
    },
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {
      title: "MY PORTFOLİO",
      description:
        "Built a responsive, minimalist e-commerce app with category filtering, sorting, product details, and cart management features.",
      technologies:
        "React, TypeScript, Jotai State Management, React Router, Tailwind CSS, Supabase",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "E-TİCARET SİTESİ REACT İLE",
      description:
        "Built a responsive, minimalist e-commerce app with category filtering, sorting, product details, and cart management features.",
      technologies:
        "React, TypeScript, Jotai State Management, React Router, Tailwind CSS, Supabase",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACT İLE MY TODO-LİST",
      description:
        "Built a responsive, minimalist e-commerce app with category filtering, sorting, product details, and cart management features.",
      technologies:
        "React, TypeScript, Jotai State Management, React Router, Tailwind CSS, Supabase",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACTİLE HAVA DURUMU APP",
      description:
        "Built a responsive, minimalist e-commerce app with category filtering, sorting, product details, and cart management features.",
      technologies:
        "React, TypeScript, Jotai State Management, React Router, Tailwind CSS, Supabase",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACT İLE FİLM SİTESİ",
      description:
        "Built a responsive, minimalist e-commerce app with category filtering, sorting, product details, and cart management features.",
      technologies:
        "React, TypeScript, Jotai State Management, React Router, Tailwind CSS, Supabase",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACT İLE RESİM UYUGULAMASI",
      description:
        "Built a responsive, minimalist e-commerce app with category filtering, sorting, product details, and cart management features.",
      technologies:
        "React, TypeScript, Jotai State Management, React Router, Tailwind CSS, Supabase",
      image: "https://via.placeholder.com/300", // Görsel URL'si
      links: {
        github: "https://github.com",
      },
    },
    {
      title: "REACT İLE DÖVİZ KURU UYGULAMASI",
      description:
        "Built a responsive, minimalist e-commerce app with category filtering, sorting, product details, and cart management features.",
      technologies:
        "React, TypeScript, Jotai State Management, React Router, Tailwind CSS, Supabase",
      image: "https://via.placeholder.com/300", // Görsel URL'si
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
