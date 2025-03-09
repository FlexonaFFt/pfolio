document.addEventListener('DOMContentLoaded', () => {
    // Add animation classes to elements
    const revealElements = [
        '.what-if-header',
        '.what-if-item',
        '.what-if-footer',
        '.awards-content',
        '.award-item',
        '.contact-column',
        '.stack-column'
    ];
    
    const revealScaleElements = [
        '.what-if-title',
        '.awards-header',
        '.contact-section h2',
        '.skills-expand-btn'
    ];
    
    // Add reveal classes
    revealElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal');
        });
    });
    
    revealScaleElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add('reveal-scale');
        });
    });
    
    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once the animation is triggered, we don't need to observe this element anymore
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
    });
    
    // Observe all elements with reveal classes
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
});