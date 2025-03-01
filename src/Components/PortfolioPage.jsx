import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Portfolio.css";
import profilePic from "../assets/profile.jpeg";
import VidCutProject from "./VidCut";
import LifeQuestProject from "./LifeQuest";
import StreamLineProject from "./StreamLine";

const PortfolioPage = () => {
  // Ref for the projects container
  const projectsContainerRef = useRef(null);
  // State to track which project is being viewed
  const [viewingProject, setViewingProject] = useState(null);

  // Set up intersection observer for scroll animations
  useEffect(() => {
    // Skip the observer setup if we're viewing a specific project
    if (viewingProject) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        root: projectsContainerRef.current,
      }
    );

    // Observe all project cards
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => {
      card.classList.add("scroll-reveal");
      observer.observe(card);
    });

    return () => {
      projectCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, [viewingProject]);

  const projects = [
    {
      title: "VidCut",
      tagline: "Convert videos in seconds, not hours",
      price: "$0/mo",
      color: "#FF7676",
      chartHeight: "60%",
      language: "React, Node.js",
      description:
        "A video conversion tool that helps users quickly trim and edit videos.",
      link: "#", // Changed to # to prevent navigation
      github: "#", // Add your GitHub link here if available
      hasDetailPage: true,
    },
    {
      title: "LifeQuest",
      tagline: "Track your routines in days, not months",
      price: "$0/mo",
      color: "#7676FF",
      chartHeight: "45%",
      language: "React, Node.js",
      description:
        "An application for tracking daily routines and setting goals. Connected to a Supabase database.",
      link: "https://qekyouvwslrbzkdr.vercel.app/",
      github: "https://github.com/SZYMDEV/LifeQuest",
      hasDetailPage: true,
    },
    {
      title: "StreamLine",
      tagline: "Boost productivity in minutes, not hours",
      price: "$0/mo",
      color: "#76C6FF",
      chartHeight: "70%",
      language: "React, Node.js",
      description:
        "Boost productivity and simplify your processes with our intuitive SaaS platform. Optimized for speed, secure by design, and offers insightful analytics.",
      link: "https://2bbe5dppoq5r0h6l.vercel.app/",
      github: "",
      hasDetailPage: true,
    },
    {
      title: "FreeAI",
      tagline: "Translate text with AI, not guesses",
      price: "$0/mo",
      color: "#76FFB8",
      language: "React",
      description:
        "An AI tool that allows you to translate provided text or voice into another language. Users can select the source and target languages.",
      link: "https://freeaisite.netlify.app/",
      github: "",
      isWebsite: true,
    },
    {
      title: "ChatbotPL",
      tagline: "Focus on customer service, not responses",
      price: "$0/mo",
      color: "#FFD976",
      language: "React, Node.js",
      description:
        "Increase sales and customer satisfaction with a chatbot. Automate customer service and boost conversion with the intelligent Smartsupp chatbot.",
      link: "https://chatbotpl.netlify.app/",
      github: "https://github.com/SZYMDEV/chatbot-ai-website",
      isWebsite: true,
    },
    {
      title: "BeautyMania",
      tagline: "Beauty salon management in clicks, not hours",
      price: "$0/mo",
      color: "#FF76C6",
      language: "React, Node.js",
      description:
        "A professional beauty salon in Skała specializing in nail and eyelash styling. Created on behalf of a client.",
      link: "https://beautymania.netlify.app/",
      github: "https://github.com/SZYMDEV/beauty-salon",
      isWebsite: true,
    },
  ];

  // Function to handle back to all projects
  const handleBackToProjects = () => {
    setViewingProject(null);
  };

  // Function to render the correct project component
  const renderProjectComponent = () => {
    switch (viewingProject) {
      case "VidCut":
        return <VidCutProject />;
      case "LifeQuest":
        return <LifeQuestProject />;
      case "StreamLine":
        return <StreamLineProject />;
      default:
        return null;
    }
  };

  return (
    <div className="portfolio-container">
      {/* Left Side: Profile Section */}
      <div className="profile-section">
        <div className="profile-pic-container">
          <img src={profilePic} alt="Szymon Sowula" className="profile-pic" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">Szymon Sowula</h1>
          <div className="profile-location">
            <span className="location-icon">📍</span> Cracow 🇵🇱
            <span className="income-tag">$0/month</span>
          </div>

          <p className="profile-bio">
            18 year old student building startups until one hits
          </p>

          <p className="profile-description">
            Coding is my passion/obsession✨
          </p>

          <div className="social-icons">
            <a
              href="https://twitter.com/sNotSune"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://github.com/SZYMDEV"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/szymon665519"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>

          <div className="build-button-container">
            <button
              className="build-button"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="button-icon">🚀</span> Contact me
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Projects Container or Project Detail */}
      {viewingProject ? (
        <div className="project-detail-container">
          <button className="back-button" onClick={handleBackToProjects}>
            ← Back to Projects
          </button>
          {renderProjectComponent()}
        </div>
      ) : (
        <div className="projects-container" ref={projectsContainerRef}>
          <h2 className="projects-title">My Projects</h2>
          <div className="projects-grid">
            {projects
              .filter(
                (project) =>
                  !project.isWebsite
              )
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  tagline={project.tagline}
                  price={project.price}
                  color={project.color}
                  chartHeight={project.chartHeight}
                  language={project.language}       
                  description={project.description}
                  link={project.link} 
                  github={project.github}
                  isWebsite={false}
                  onClick={project.hasDetailPage ? () => setViewingProject(project.title) : null}
                />
              ))}
          </div>

          <h2 className="projects-title">Websites Done By Me</h2>
          <div className="projects-grid">
            {projects
              .filter((project) => project.isWebsite)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  tagline={project.tagline}
                  color={project.color}
                  language={project.language}
                  description={project.description}
                  link={project.link}
                  github={project.github}
                  isWebsite={true}
                  externalLink={true}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({
  title,
  tagline,
  price,
  color,
  chartHeight,
  language,
  description,
  link,
  github,
  isWebsite,
  onClick,
  externalLink,
}) => {
  const handleCardClick = (e) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const renderCardContent = () => (
    <div className={onClick ? "project-card-content clickable" : "project-card-content"}>
      <div className="project-header">
        <div className="project-logo" style={{ backgroundColor: color }}>
          {title.charAt(0)}
        </div>
        <div className="project-title">
          <h3>{title}</h3>
          <p>{tagline}</p>
        </div>
        {!isWebsite && <div className="project-price">{price}</div>}
      </div>

      {!isWebsite && (
        <div className="project-chart">
          <div className="chart-visual">
            <div className="chart-placeholder">
              <div
                className="chart-line"
                style={{
                  height: chartHeight,
                  backgroundColor: `${color}40`,
                  borderColor: color,
                }}
              ></div>
            </div>
          </div>
          <div className="chart-labels">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>
      )}

      <div className="project-details">
        <div className="project-tech">{language}</div>
        <p className="project-description">{description}</p>
        {github && github !== "#" && github !== "" && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );

  // If it's a website or external link, make it a direct link
  if (externalLink && link && link !== "#") {
    return (
      <div className="project-card">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {renderCardContent()}
        </a>
      </div>
    );
  }

  // For projects with detail pages
  return (
    <div className="project-card" onClick={handleCardClick}>
      {renderCardContent()}
    </div>
  );
};

export default PortfolioPage;