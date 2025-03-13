// components/Contact.js
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          {/* Replace with your actual SVG or image */}
          <img src="/chat.png" alt="Decorative SVG" style={styles.image} />
        </div>
        <div style={styles.contentContainer}>
          <h1 style={styles.title}>Contact Me</h1>
          <p style={styles.description}>
            I’m practically the social media version of Batman, always lurking
            in the shadows of every platform, ready to swoop in and save the
            day! So, whether you need some industry wizardry or a tech talk
            virtuoso, just reach out to me. Let’s connect and sprinkle some
            laughter into the world of tech!
          </p>
          <div style={styles.socialIcons}>
            <a
              href="https://github.com/Sharmeen-Rauf/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <FaGithub style={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/sharmeen.rs/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <FaInstagram style={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/sharmeen-rauf-504097269"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.iconLink}
            >
              <FaLinkedin style={styles.icon} />
            </a>
          </div>
          {/* Email Button */}
          <a
            href="mailto:sharmeenpakistan8@gmail.com" // Replace with your email
            style={styles.emailButton}
          >
            Reach Me via Email
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: "20px",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "1200px",
    height: "80%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    flex: "1",
    marginRight: "40px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "400px",
  },
  contentContainer: {
    flex: "2",
    textAlign: "left",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  socialIcons: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px", // Added margin to separate from the button
  },
  iconLink: {
    textDecoration: "none",
    color: "inherit",
  },
  icon: {
    fontSize: "2rem",
    color: "#333",
    transition: "color 0.3s ease",
  },
  iconHover: {
    color: "#0077b5", // LinkedIn blue
  },
  emailButton: {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#e0e0e0", // Greyish background
    color: "#333", // Dark text color
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    textAlign: "center",
    maxWidth: "200px",
    marginTop: "10px", // Added margin to separate from icons
  },
  emailButtonHover: {
    backgroundColor: "#d0d0d0", // Slightly darker grey on hover
    transform: "scale(1.05)", // Slight scale effect on hover
  },
};

export default Contact;
