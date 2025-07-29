import { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';
import IntroScene from './components/IntroScene.jsx';
import ResumeScene from './components/ResumeScene.jsx';

const TABS = [
  { key: 'intro', label: 'Введение', component: <IntroScene /> },
  { key: 'resume', label: 'Резюме', component: <ResumeScene /> },
];

export default function Portfolio() {
  const [activeTab] = useState('resume'); 

  return (
    <div className='portfolio'>
      <section className='scroll-section'>
        {TABS.find(tab => tab.key === activeTab)?.component}
      </section>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio />
  </StrictMode>,
);