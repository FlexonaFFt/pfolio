import '../assets/InfoSection.css';

export default function InfoSection() {
  return (
    <section className="info-section">
      <div className="info-content">
        <h1>Ваше Имя</h1>
        <h2>Frontend Developer</h2>
        <p>Краткое описание вашего опыта и навыков</p>
        
        <div className="skills">
          <h3>Навыки</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
}