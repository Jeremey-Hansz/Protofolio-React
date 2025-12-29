import { skillsData } from '../../../data/skills';
import '../../../assets/skills.css';

export const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          <span className="section-number">03.</span> Technical Skills
        </h2>
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.name}</h3>
              <div className="skill-items">
                {category.items.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};