import { Link } from 'react-router-dom';
import ShinyText from './assets/ShinyText.jsx';
import SpotlightCard from './assets/SpotlightCard.jsx';

import '../assets/InfoScene.css';
import ProfileImage from '../assets/images/my-image.png';

export default function InfoScene() {
  return (
    <div className='info-scene'>
        <SpotlightCard className="left-block" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className='text-section'>
                <p>Find Inspiration.<br/>Create, Generate,<br/>Produce&Automate</p>
                <p className="bottom-text">Welcome to PromptVerse. Effortlessly create content, explore endless prompts, 
                    and stay ahead with real-time trends. Automate emails, social media, and more 
                    while our AI extracts knowledge from any document or URL. Experience a stunning, 
                    futuristic design that boosts productivity.</p>
                <p className="bottom-text">Welcome to PromptVerse. Effortlessly create content, explore endless prompts, 
                    and stay ahead with real-time trends. Automate emails, social media, and more 
                    while our AI extracts knowledge from any document or URL. Experience a stunning, 
                    futuristic design that boosts productivity.</p>
                <Link to="/aboutme">
                  <ShinyText text="Show more about me →" disabled={false} speed={3} className='link-text' />
                </Link>
            </div>
        </SpotlightCard>
        <div className='right-block'>
            <img src={ProfileImage} alt="Profile" className="right-block-image" />
        </div>
    </div>
  );
}