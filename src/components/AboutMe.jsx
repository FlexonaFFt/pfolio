import React from 'react';
import '../assets/AboutPage.css';

const AboutMe = () => {
  return (
    <div className='body-container'>
      <div className='header'>
        <div className='head-line'>
          <div className='left-text-block'>
            <p className='name-text'>Igor Zharov,</p>
            <p className='bottom-text'>ML engineer</p>
          </div>
          <p className='right-about-text'>About</p>
        </div>
      </div>



      <div className='main-section'>
        <div className='left-fixed-block'>
          <div className='inner-block'>
            <div className='text-block'>
              <div className='navigator-line top-line'></div>
              <p className='top-text-about-me'>A seasoned Senior Producer with 10+ years of experience, 
              I excel in leading complex marketing and design projects from concept to completion.</p>
            </div>
            <div className='email-block'>
              <div className='navigator-line'></div>
              <p className='my-email'>Zharov.ia.ru@gmail.com</p>
            </div>
            <div className='phone-block'>
              <div className='navigator-line'></div>
              <p className='phone-number'>+ 7 961 420 07 61</p> 
            </div>
            <div className='git-block'>
              <div className='navigator-line'></div>
              <p className='link'>My GitHub</p>
            </div>
            <div className='leet-block'>
              <div className='navigator-line'></div>
              <p className='link'>My LeetCode</p>
            </div>
          </div>
        </div>



        <div className='right-content-block'>
          <div className='long-block'>
            <div className='sections'>
              <div className='own-experience-section'>
                <div className='navigator-line top-line'></div>
                <div className='own-settings'>
                  <div className='content-container'>
                    <p className='head-p'>Experience</p>
                  </div>
                  <div className='vacancies'>
                    <div className='vacancy-one'>
                      <div className='navigator-line'></div>
                      <div className='top-section'></div>
                      <div className='bottom-section'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;