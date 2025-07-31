import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';

import IntroScene from './components/IntroScene.jsx';
import AboutScene from './components/AboutScene.jsx';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <IntroScene />
      <AboutScene />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);
