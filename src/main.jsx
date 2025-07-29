import { useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';
import IntroScene from './components/IntroScene.jsx';
import ResumeScene from './components/ResumeScene.jsx';
import ProjectTab from './components/pages/ProjectsTab.jsx';
import MobileBlocker from "./components/assets/MobileBlocker.jsx";

const TABS = [
  { key: 'intro', label: 'Введение', component: <IntroScene /> },
  { key: 'resume', label: 'Резюме', component: <ResumeScene /> },
  { key: 'projects', label: 'projects', component: <ProjectTab /> },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, [breakpoint]);

  return isMobile;
}

export default function Portfolio() {
  const [activeTab] = useState('projects');
  const isMobile = useIsMobile();

  if (isMobile) return <MobileBlocker />;

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