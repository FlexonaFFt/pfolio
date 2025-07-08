import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './main.css';

import IntroScene from './components/IntroScene.jsx';
import InfoScene from './components/InfoScene.jsx';
import StackScene from './components/StackScene.jsx';
import AboutMe from './components/AboutMe.jsx';

const Portfolio = () => {
  return (
    <BrowserRouter>
      <div className='portfolio'>
        <Routes>
          <Route path="/" element={
            <>
              <section className="scroll-section">
                <IntroScene />
              </section>
              <section className="scroll-section">
                <InfoScene />
              </section>
              <section className="scroll-section stack-scene-container">
                <StackScene />
              </section>
            </>
          } />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
