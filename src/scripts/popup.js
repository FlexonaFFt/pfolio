document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const mainSection = document.querySelector('.main-section');
    const popupOverlay = document.querySelector('.popup-overlay');
    const closeButton = document.querySelector('.close-button');
    
    // Открытие попапа при клике на main-section
    mainSection.addEventListener('click', function() {
      console.log('Main section clicked');
      popupOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    // Закрытие попапа при клике на кнопку закрытия
    closeButton.addEventListener('click', function() {
      console.log('Close button clicked');
      popupOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Закрытие попапа при клике вне контейнера
    popupOverlay.addEventListener('click', function(e) {
      if (e.target === popupOverlay) {
        console.log('Overlay clicked');
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    // Закрытие попапа при нажатии Escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
        console.log('Escape pressed');
        popupOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
    
    console.log('Popup script initialized');
  });