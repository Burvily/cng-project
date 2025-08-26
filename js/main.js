// Delta State CNG Mass Transit Initiative - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navToggle = document.getElementById('navToggle');
    const slideNav = document.getElementById('slideNav');
    
    if (navToggle && slideNav) {
        navToggle.addEventListener('click', function() {
            slideNav.classList.toggle('active');
        });
        
        // Close navigation when clicking outside
        document.addEventListener('click', function(event) {
            if (!slideNav.contains(event.target) && !navToggle.contains(event.target)) {
                slideNav.classList.remove('active');
            }
        });
        
        // Close navigation when clicking on a link
        const navLinks = slideNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                slideNav.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const currentSlide = getCurrentSlide();
        
        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
                e.preventDefault();
                navigateToNextSlide(currentSlide);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                navigateToPreviousSlide(currentSlide);
                break;
            case 'Home':
                e.preventDefault();
                navigateToSlide(1);
                break;
            case 'End':
                e.preventDefault();
                navigateToSlide(12);
                break;
            case 'Escape':
                if (slideNav && slideNav.classList.contains('active')) {
                    slideNav.classList.remove('active');
                }
                break;
        }
    });
    
    // Touch/swipe navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const currentSlide = getCurrentSlide();
        
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next slide
            navigateToNextSlide(currentSlide);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous slide
            navigateToPreviousSlide(currentSlide);
        }
    }
    
    // Helper functions for navigation
    function getCurrentSlide() {
        const slides = document.querySelectorAll('.slide');
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY + windowHeight / 2;
        
        for (let i = 0; i < slides.length; i++) {
            const slide = slides[i];
            const slideTop = slide.offsetTop;
            const slideBottom = slideTop + slide.offsetHeight;
            
            if (scrollPosition >= slideTop && scrollPosition <= slideBottom) {
                return i + 1;
            }
        }
        return 1;
    }
    
    function navigateToSlide(slideNumber) {
        const targetSlide = document.getElementById(`slide${slideNumber}`);
        if (targetSlide) {
            targetSlide.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    function navigateToNextSlide(currentSlide) {
        const nextSlide = Math.min(currentSlide + 1, 12);
        navigateToSlide(nextSlide);
    }
    
    function navigateToPreviousSlide(currentSlide) {
        const prevSlide = Math.max(currentSlide - 1, 1);
        navigateToSlide(prevSlide);
    }
    
    // Progress indicator
    function updateProgressIndicator() {
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const currentSlide = getCurrentSlide();
        const progress = (currentSlide / totalSlides) * 100;
        
        // Create progress bar if it doesn't exist
        let progressBar = document.querySelector('.progress-bar');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background-color: #e0e0e0;
                z-index: 1001;
            `;
            
            const progressFill = document.createElement('div');
            progressFill.className = 'progress-fill';
            progressFill.style.cssText = `
                height: 100%;
                background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
                transition: width 0.3s ease;
            `;
            
            progressBar.appendChild(progressFill);
            document.body.appendChild(progressBar);
        }
        
        const progressFill = progressBar.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
    }
    
    // Update progress on scroll
    window.addEventListener('scroll', updateProgressIndicator);
    
    // Initialize progress indicator
    updateProgressIndicator();
    
    // Add slide numbers to navigation
    const navItems = slideNav.querySelectorAll('li');
    navItems.forEach((item, index) => {
        const link = item.querySelector('a');
        if (link) {
            const slideNumber = index + 1;
            link.innerHTML = `${slideNumber}. ${link.innerHTML}`;
        }
    });
    
    // Add current slide indicator
    function updateCurrentSlideIndicator() {
        const currentSlide = getCurrentSlide();
        const navLinks = slideNav.querySelectorAll('a');
        
        navLinks.forEach((link, index) => {
            link.classList.remove('current');
            if (index + 1 === currentSlide) {
                link.classList.add('current');
            }
        });
    }
    
    // Update indicator on scroll
    window.addEventListener('scroll', updateCurrentSlideIndicator);
    
    // Initialize current slide indicator
    updateCurrentSlideIndicator();
    
    // Add slide counter
    function addSlideCounter() {
        const counter = document.createElement('div');
        counter.className = 'slide-counter';
        counter.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: var(--primary-color);
            color: var(--light-text);
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            z-index: 1000;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        `;
        
        document.body.appendChild(counter);
        
        function updateCounter() {
            const currentSlide = getCurrentSlide();
            counter.textContent = `${currentSlide} / 12`;
        }
        
        window.addEventListener('scroll', updateCounter);
        updateCounter();
    }
    
    // Initialize slide counter
    addSlideCounter();
    
    // Add print functionality enhancement
    const printButton = document.querySelector('.print-button');
    if (printButton) {
        printButton.addEventListener('click', function() {
            // Add print-specific styles
            const printStyle = document.createElement('style');
            printStyle.textContent = `
                @media print {
                    body { margin: 0; }
                    .slide { page-break-after: always; }
                    .nav-toggle, .slide-nav, .print-button, .slide-counter { display: none !important; }
                }
            `;
            document.head.appendChild(printStyle);
            
            // Trigger print
            window.print();
            
            // Remove print styles after printing
            setTimeout(() => {
                document.head.removeChild(printStyle);
            }, 1000);
        });
    }
    
    // Add accessibility features
    function enhanceAccessibility() {
        // Add ARIA labels to slides
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, index) => {
            slide.setAttribute('role', 'region');
            slide.setAttribute('aria-label', `Slide ${index + 1}`);
        });
    }
    
    // Initialize accessibility features
    enhanceAccessibility();
    
    // Performance optimization: Throttle scroll events
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
        }
    }
    
    // Apply throttling to scroll events
    const throttledUpdateProgress = throttle(updateProgressIndicator, 100);
    const throttledUpdateCurrentSlide = throttle(updateCurrentSlideIndicator, 100);
    
    window.removeEventListener('scroll', updateProgressIndicator);
    window.removeEventListener('scroll', updateCurrentSlideIndicator);
    window.addEventListener('scroll', throttledUpdateProgress);
    window.addEventListener('scroll', throttledUpdateCurrentSlide);

    // Modal/Lightbox functionality for gallery images
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    
    // Close modal when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the image
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
    
    // Global function to open modal (called from HTML onclick)
    window.openModal = function(imgSrc, caption) {
        if (modal && modalImg && modalCaption) {
            modalImg.src = imgSrc;
            modalCaption.innerHTML = caption;
            modal.style.display = 'block';
        }
    };
    
    // Initialize other functionality
    initializeSlides();
    initializeCharts();
});
