import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Me</h2>
          <div className="form-wrapper">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <p>Szymon Sowula</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <p>kontaktbizn@gmail.com</p>
              </div>
              <div className="form-group">
                <label htmlFor="email">Location</label>
                <p>Cracow, Małopolska</p>
              </div>

              <button
                type="button"
                className="submit-button"
                onClick={() =>
                  (window.location.href = "mailto:kontaktbizn@gmail.com")
                }
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className="allright">
          <p>All rights reserved, Szymon Sowula © {new Date().getFullYear()}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
