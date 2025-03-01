import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "../styles/Portfolio.css";
import streamLineImage from "../assets/streamline.png";

const StreamLine = () => {
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
          src={streamLineImage}
          alt="StreamLine"
          className="portfolio-image"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="image-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
        >
          {/* GitHub link is empty in the original data */}
          <motion.a
            href="https://2bbe5dppoq5r0h6l.vercel.app/"
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
        <h2>StreamLine</h2>
        <p className="tech-stack">
          <strong>Technologies:</strong> React, Node.js, TailwindCSS
        </p>
        <div className="description">
          <p>A modern SaaS platform designed to boost productivity and streamline workflows.</p>
          <p>Optimized for speed and performance, even with complex operations.</p>
          <p>Built with security by design to protect sensitive business data.</p>
          <p>Features comprehensive analytics dashboard to monitor efficiency metrics.</p>
          <p>Intuitive user interface that eliminates the learning curve for new users.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default StreamLine;