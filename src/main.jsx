import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';


import IntroScene from './components/IntroScene.jsx';
import DesignSection from './components/DesignSection.jsx';
import InfoSection from './components/InfoSection.jsx'; /* нужно потом будет её включить */ 


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <IntroScene />
      <DesignSection />
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
