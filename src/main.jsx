import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';


import IntroScene from './components/IntroScene.jsx';
import InfoSection from './components/InfoSection.jsx';


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <IntroScene />
      <InfoSection />
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
