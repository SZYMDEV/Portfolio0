import React from "react";
import { motion } from "framer-motion";
import "../styles/Main.css";
import frontImage from "../assets/computer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Navigation } from "./Navigation";

const Main = ({ scrollToPortfolio }) => {
  return (
    <>
    <Navigation/>
    <motion.div
      className="main-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="content-wrapper">
        <motion.div
          className="left-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="title">Szymon Sowula</h1>
          <h2 className="subtitle">Software Engineer / Web Developer</h2>
          <div className="red-line"></div>

          <p className="description">
            I am a junior front-end developer specializing in{" "}
            <span className="highlight">modern, responsive websites</span> and{" "}
            <span className="highlight">AI-powered chatbots</span> that enhance
            user engagement. With experience in{" "}
            <span className="highlight">HTML</span>,{" "}
            <span className="highlight">CSS</span>,{" "}
            <span className="highlight">JavaScript</span>,{" "}
            <span className="highlight">React</span>,{" "}
            <span className="highlight">React Native</span>,{" "}
            <span className="highlight">Python</span>, and{" "}
            <span className="highlight">Next.js</span>, I create efficient and
            visually appealing solutions. Let's bring your project to life—
            <span className="highlight">contact me today</span>!
          </p>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/szymon665519"
              target="_blank"
              aria-label="Facebook"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://x.com/sNotSune"
              target="_blank"
              aria-label="XTwitter"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a
              href="https://github.com/SZYMDEV"
              target="_blank"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="right-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={frontImage} alt="Profile" className="profile-image" />
        </motion.div>
      </div>
    </motion.div>
    </>
  );
};

export default Main;
