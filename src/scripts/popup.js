export default class Popup {
    constructor() {
      this.init();
    }
  
    init() {
      // Ждем полной загрузки DOM
      document.addEventListener('DOMContentLoaded', () => {
        // Получаем элементы
        const arrowButton = document.querySelector('.arrow-button');
        const popupOverlay = document.querySelector('.popup-overlay');
        const closeButton = document.querySelector('.close-button');
        const mainSection = document.querySelector('.main-section');
  
        if (!arrowButton || !popupOverlay || !closeButton) {
          console.error('Popup elements not found');
          return;
        }
  
        // Открытие попапа при клике на стрелочку
        arrowButton.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openPopup(popupOverlay);
        });
  
        // Открытие попапа при клике на main-section
        mainSection.addEventListener('click', () => {
          this.openPopup(popupOverlay);
        });
  
        // Закрытие попапа при клике на кнопку закрытия
        closeButton.addEventListener('click', () => {
          this.closePopup(popupOverlay);
        });
  
        // Закрытие попапа при клике вне контейнера
        popupOverlay.addEventListener('click', (e) => {
          if (e.target === popupOverlay) {
            this.closePopup(popupOverlay);
          }
        });
  
        // Закрытие попапа при нажатии Escape
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            this.closePopup(popupOverlay);
          }
        });
  
        console.log('Popup initialized');
      });
    }
  
    openPopup(popupOverlay) {
      console.log('Opening popup');
      popupOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Предотвращаем прокрутку страницы
    }
  
    closePopup(popupOverlay) {
      console.log('Closing popup');
      popupOverlay.classList.remove('active');
      document.body.style.overflow = ''; // Возвращаем прокрутку страницы
    }
  }