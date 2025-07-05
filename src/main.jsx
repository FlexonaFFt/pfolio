import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';

import IntroScene from './components/IntroScene.jsx';
import InfoScene from './components/InfoScene.jsx';
import StackScene from './components/StackScene.jsx';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <section className="scroll-section">
        <IntroScene />
      </section>
      <section className="scroll-section">
        <InfoScene />
      </section>
      <section className="scroll-section stack-scene-container">
        <StackScene />
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
