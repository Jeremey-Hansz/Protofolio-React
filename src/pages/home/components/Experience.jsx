import { experienceData } from '../../../data/experience';
import '../../../assets/experience.css';

export const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">
          <span className="section-number">04.</span> Experience
        </h2>
        <div className="experience-list">
          {experienceData.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-job-title">{exp.title}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};