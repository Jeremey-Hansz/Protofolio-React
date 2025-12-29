import { Mail, Github, Linkedin } from 'lucide-react';
import '../../../assets/contact.css';

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">
          <span className="section-number">05.</span> Get In Touch
        </h2>
        <div className="contact-content">
          <p className="contact-text">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="mailto:jeremy@example.com" className="contact-link">
              <Mail className="contact-icon" />
              Email
            </a>
            <a href="https://github.com" className="contact-link">
              <Github className="contact-icon" />
              GitHub
            </a>
            <a href="https://linkedin.com" className="contact-link">
              <Linkedin className="contact-icon" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};