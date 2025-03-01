import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "../styles/Portfolio.css";
import lifeQuestImage from "../assets/lifequest.png";

const LifeQuest = () => {
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
          src={lifeQuestImage}
          alt="LifeQuest"
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
            href="https://github.com/SZYMDEV/LifeQuest"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            whileHover={{ scale: 1.2 }}
          >
            <Github className="icon" />
          </motion.a>
          <motion.a
            href="https://v0-life-quest-6dsyuk.vercel.app/"
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
        <h2>LifeQuest</h2>
        <p className="tech-stack">
          <strong>Technologies:</strong> React, Node.js, Supabase
        </p>
        <div className="description">
          <p>Track and manage your daily routines and habits with precision.</p>
          <p>Set personal goals and visualize your progress with intuitive charts.</p>
          <p>Connected to Supabase for reliable data storage and retrieval.</p>
          <p>Features achievement system to keep you motivated on your journey.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default LifeQuest;