document.addEventListener('DOMContentLoaded', () => {
    // Clear any existing animation classes that might be causing conflicts
    document.querySelectorAll('.animate').forEach(el => {
        el.classList.remove('animate');
    });
    
    // Добавляем классы для анимации к элементам
    const whatIfTitle = document.querySelector('.what-if-title');
    const whatIfHeader = document.querySelector('.what-if-header');
    const whatIfItems = document.querySelectorAll('.what-if-item');
    const whatIfFooter = document.querySelector('.what-if-footer');
    
    // Добавляем класс scroll-animation к элементам секции "Что если"
    if (whatIfTitle) {
        whatIfTitle.classList.add('scroll-animation');
        whatIfTitle.style.animationDelay = '0s'; // Reset any existing delays
    }
    
    if (whatIfHeader) {
        whatIfHeader.classList.add('scroll-animation');
        whatIfHeader.style.animationDelay = '0.1s';
    }
    
    // Simplify animation delays for what-if items
    whatIfItems.forEach((item, index) => {
        item.classList.add('scroll-animation');
        // Use a consistent pattern for delays
        item.style.animationDelay = `${0.2 + (index * 0.1)}s`;
    });
    
    if (whatIfFooter) {
        whatIfFooter.classList.add('scroll-animation');
        whatIfFooter.style.animationDelay = `${0.2 + whatIfItems.length * 0.1}s`;
    }
    
    // Simplify animations for other sections
    document.querySelectorAll('.awards-header, .awards-content').forEach((el, index) => {
        el.classList.add('scroll-animation');
        el.style.animationDelay = `${0.1 * index}s`;
    });
    
    // Use a more consistent delay pattern for award items
    document.querySelectorAll('.award-item').forEach((el, index) => {
        el.classList.add('scroll-animation');
        el.style.animationDelay = `${0.2 + (index * 0.07)}s`;
    });
    
    // Simplify contact section animations
    document.querySelectorAll('.contact-section h2').forEach((el, index) => {
        el.classList.add('scroll-animation');
        el.style.animationDelay = `${0.1 * index}s`;
    });
    
    document.querySelectorAll('.contact-column, .stack-column').forEach((el, index) => {
        el.classList.add('scroll-animation');
        el.style.animationDelay = `${0.3 + (index * 0.1)}s`;
    });
    
    document.querySelectorAll('.skills-expand-btn').forEach(el => {
        el.classList.add('scroll-animation');
        el.style.animationDelay = '0.2s';
    });
    
    // Improved viewport detection with threshold
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Use a more conservative threshold to prevent animations triggering too early
        const threshold = 0.2; // 20% of the element must be visible
        
        return (
            rect.top <= windowHeight * (1 - threshold) &&
            rect.bottom >= windowHeight * threshold
        );
    }
    
    // Throttle function to limit how often animateOnScroll runs
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // Simplified animation function without random delays
    function animateOnScroll() {
        document.querySelectorAll('.scroll-animation:not(.animate)').forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    }
    
    // Use throttled version of the scroll handler to improve performance
    const throttledAnimateOnScroll = throttle(animateOnScroll, 100);
    
    // Запускаем анимацию при загрузке страницы и при скроллинге
    window.addEventListener('scroll', throttledAnimateOnScroll, { passive: true });
    window.addEventListener('resize', throttledAnimateOnScroll, { passive: true });
    
    // Запускаем первую проверку после загрузки страницы
    setTimeout(animateOnScroll, 300); // Slightly longer delay to ensure page is fully loaded
});