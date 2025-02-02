import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import FreeAi from "../assets/FreeAi.png";
import lifequest from "../assets/lifequest.png";
import chatbot from "../assets/chatbotypl.png";
import "../styles/Portfolio.css";
import streamline from "../assets/streamline.png";
import beautymania from "../assets/beautymania.png";

const projects = [
  {
    name: "LifeQuest",
    language: "React, Node.js",
    description:
      "An application for tracking daily routines and setting goals.",
    descriptionmore:
      " - Connected to a Supabase database / currently facing technical issues.",
    image: lifequest,
    link: "https://qekyouvwslrbzkdr.vercel.app/",
    github: "https://github.com/SZYMDEV/LifeQuest",
  },
  {
    name: "StreamLine",
    language: "React, Node.js",
    description:
      "Boost productivity and simplify your processes with our intuitive SaaS platform.",
    descriptionmore:
      "Optimized for speed, secure by design, and offers insightful analytics.",
    descriptionmore2: "Enhance teamwork with built-in collaboration features.",
    image: streamline,
    link: "https://2bbe5dppoq5r0h6l.vercel.app/",
  },
  {
    name: "FreeAI",
    language: "React",
    description:
      "An AI tool that allows you to translate provided text or voice into another language.",
    descriptionmore: "Users can select the source and target languages.",
    descriptionmore2: "Uses the @xenova/transformers API.",
    image: FreeAi,
    link: "https://freeaisite.netlify.app/",
  },
  {
    name: "ChatbotPL",
    language: "React, Node.js",
    description: "Increase sales and customer satisfaction with a chatbot.",
    descriptionmore:
      "Automate customer service and boost conversion with the intelligent Smartsupp chatbot.",
    descriptionmore2:
      "Full integration with the Smartsupp platform ensures professional customer service.",
    image: chatbot,
    link: "https://chatbotpl.netlify.app/",
    github: "https://github.com/SZYMDEV/chatbot-ai-website",
  },
  {
    name: "BeautyMania",
    language: "React, Node.js",
    description:
      "A professional beauty salon in Skała specializing in nail and eyelash styling.",
    descriptionmore: "Created on behalf of a client.",
    image: beautymania,
    link: "https://beautymania.netlify.app/",
    github: "https://github.com/SZYMDEV/beauty-salon",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="portfolio" className="portfolio-container">
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Portfolio</h1>
      </motion.div>

      <motion.div
        className="portfolio-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <motion.img
                src={project.image}
                alt={project.name}
                className="portfolio-image"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="image-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  whileHover={{ scale: 1.2 }}
                >
                  <ExternalLink className="icon" />
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  whileHover={{ scale: 1.2 }}
                >
                  <Github className="icon" />
                </motion.a>
              </motion.div>
            </div>

            <div className="project-info">
              <h2>{project.name}</h2>
              <p className="tech-stack">
                <strong>Technologies:</strong> {project.language}
              </p>
              <div className="description">
                <p>{project.description}</p>
                {project.descriptionmore && <p>{project.descriptionmore}</p>}
                {project.descriptionmore2 && <p>{project.descriptionmore2}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
