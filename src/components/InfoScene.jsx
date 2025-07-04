import React from 'react';
import ShinyText from './assets/ShinyText.jsx';
import '../assets/InfoScene.css';

export default function InfoScene() {
  return (
    <div className='info-scene'>
        <div className='left-block'>
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
                <ShinyText text="Show more about me →" disabled={false} speed={3} className='link-text' />
            </div>
        </div>
        <div className='right-block'>

        </div>
    </div>
  );
}