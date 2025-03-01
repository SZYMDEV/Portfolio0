import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "../styles/Portfolio.css";
import vidcutImage from "../assets/inprogress.png";

const VidCut = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="portfolio-section"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="image-container">
        <motion.img
          src={vidcutImage}
          alt="VidCut"
          className="portfolio-image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="image-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          <motion.a
            href="https://github.com/SZYMDEV/VidCut"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            whileHover={{ scale: 1.2 }}
          >
            <Github className="icon" />
          </motion.a>
          <motion.a
            href="https://github.com/SZYMDEV/VidCut" // Replace with actual deployment URL if available
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            whileHover={{ scale: 1.2 }}
          >
            <ExternalLink className="icon" />
          </motion.a>
        </motion.div>
      </div>

      <div className="project-info">
        <h2>VidCut</h2>
        <p className="tech-stack">
          <strong>Technologies:</strong> React, Node.js, MongoDB
        </p>
        <div className="description">
          <p>A simple tool to cut and convert videos quickly and efficiently.</p>
          <p>Allows for batch processing and automated conversion between formats.</p>
          <p>Command-line interface for power users and scriptable workflows.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default VidCut;