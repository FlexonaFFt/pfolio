import Spline from "@splinetool/react-spline";
import '../assets/IntroScene.css';

export default function SplineScene() {
  return (
    <div className="intro-scene">
      <div className="hero-content">
        <p className="subtitle">Frontend Developer</p>
        <h1 className="title">Создаю современные веб-решения</h1>
        <div className="scroll-indicator">↓</div>
      </div>
      <Spline scene="https://prod.spline.design/keVyr60pLS0gHOpf/scene.splinecode" />
    </div>
  );
}