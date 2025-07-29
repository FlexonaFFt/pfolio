import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';

import IntroScene from './components/IntroScene.jsx';
import ResumeScene from './components/ResumeScene.jsx';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <section className='scroll-section'>
        <IntroScene />
      </section>
      <section className='scroll-section'>
        <ResumeScene />
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
