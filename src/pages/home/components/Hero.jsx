import { Code } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import '../../../assets/hero.css';
import Image from '../../../assets/photo.jpeg';

export const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Jeremy van der Hansz</span>
            </h1>
            <p className="hero-subtitle">ICT Student | Full-Stack Developer</p>
            <p className="hero-description">
              I craft beautiful and functional web experiences. Passionate about turning ideas into reality through clean code and modern design.
            </p>
            <div className="hero-buttons">
              <Button onClick={() => scrollToSection('projects')}>
                View My Work
              </Button>
              <Button 
                variant="secondary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <div className="hero-image-border">
                <div className="hero-image-inner">
                  <img 
                    src= {Image}
                    alt="Jeremy van der Hansz"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};