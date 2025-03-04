import './styles/main.css';
import './styles/preloader.css';
import Preloader from './scripts/preloader';

// Инициализируем прелоадер
new Preloader();

document.addEventListener('DOMContentLoaded', () => {
  console.log('Portfolio website loaded!')
  
  // Добавляем интерактивность для навигации
  const navItems = document.querySelectorAll('.navigation li')
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Удаляем активный класс у всех элементов
      navItems.forEach(i => i.classList.remove('active'))
      // Добавляем активный класс к нажатому элементу
      item.classList.add('active')
      
      // Здесь можно добавить логику для переключения контента
    })
  })
  
  // Анимация для кнопки "Hire Me"
  const hireButton = document.querySelector('.hire-button')
  
  hireButton.addEventListener('mouseenter', () => {
    hireButton.style.transform = 'scale(1.05)'
    hireButton.style.transition = 'transform 0.3s ease'
  })
  
  hireButton.addEventListener('mouseleave', () => {
    hireButton.style.transform = 'scale(1)'
  })
})