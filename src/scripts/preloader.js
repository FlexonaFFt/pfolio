export default class Preloader {
    constructor() {
      this.createPreloader();
      this.init();
    }
  
    createPreloader() {
      const preloader = document.createElement('div');
      preloader.className = 'preloader';
      preloader.innerHTML = `
        <div class="loader">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
          <p class="loading-text">Loading...</p>
        </div>
      `;
      document.body.insertBefore(preloader, document.body.firstChild);
      this.preloader = preloader;
    }
  
    init() {
      if (document.readyState === 'complete') {
        this.hide();
      } else {
        window.addEventListener('load', () => {
          setTimeout(() => this.hide(), 1000);
        });
      }
    }
  
    hide() {
      this.preloader.classList.add('hidden');
    }
  }