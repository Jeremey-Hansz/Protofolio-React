import '../../../assets/about.css';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">
          <span className="section-number">01.</span> About Me
        </h2>
        <div className="about-content">
          <p className="about-text">
            I'm Jeremey van der Hansz, an ICT student passionate about creating innovative digital solutions. 
            My journey in tech started with curiosity and has evolved into a deep commitment to mastering 
            both frontend and backend development.
          </p>
          <p className="about-text">
            I believe in writing clean, maintainable code and designing user experiences that are both 
            beautiful and intuitive. Every project is an opportunity to learn something new and push 
            the boundaries of what's possible.
          </p>
          <p className="about-text">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
            and staying up-to-date with the latest industry trends.
          </p>
        </div>
      </div>
    </section>
  );
};