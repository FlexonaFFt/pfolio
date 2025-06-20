import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';


import SplineScene from './components/SplineScene.jsx';
import InfoSection from './components/InfoSection.jsx';


const Portfolio = () => {
  return (
    <div className='portfolio'>
      <SplineScene />
      <InfoSection />
    </div>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
)
