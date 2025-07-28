import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';

import IntroScene from './components/IntroScene.jsx';
import ResumeScene from './components/ResumeScene.jsx';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <IntroScene />
      <ResumeScene />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
