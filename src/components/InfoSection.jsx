import '../assets/InfoSection.css';
import '../assets/AdaptiveSettings.css';

export default function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-content">
        <h1>I create products that<br />impact on people's life.</h1>
        <p className="intro-text">Hello, Jordi Espinosa here. I'm a Product<br />Designer based in Barcelona.</p>
        
        <nav className="navigation">
          <ul>
            <li><span className="icon">💡</span> Consultation</li>
            <li><span className="icon">📂</span> Portfolio</li>
            <li><span className="icon">📝</span> Case Studies</li>
            <li><span className="icon">🤝</span> Partnerships</li>
            <li><span className="icon">ℹ️</span> About</li>
            <li><span className="icon">📞</span> Contact</li>
            <li><span className="icon">📰</span> Newsletter</li>
            <li><span className="icon">📸</span> Photography</li>
            <li><span className="icon">✍️</span> Content Creation</li>
            <li><span className="icon">📷</span> GTAV Photography</li>
          </ul>
        </nav>
      </div>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-content">
            <img src="../assets/images/project1.jpg" alt="CupsCoffee" className="project-image" />
            <div className="project-info">
              <h3>CupsCoffee →</h3>
              <p>Web Design & Web Development</p>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <img src="../assets/images/project1.jpg" alt="CupsCoffee" className="project-image" />
            <div className="project-info">
              <h3>CupsCoffee →</h3>
              <p>Web Design & Web Development</p>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <img src="../assets/images/project1.jpg" alt="CupsCoffee" className="project-image" />
            <div className="project-info">
              <h3>CupsCoffee →</h3>
              <p>Web Design & Web Development</p>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-content">
            <img src="../assets/images/project1.jpg" alt="CupsCoffee" className="project-image" />
            <div className="project-info">
              <h3>CupsCoffee →</h3>
              <p>Web Design & Web Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}