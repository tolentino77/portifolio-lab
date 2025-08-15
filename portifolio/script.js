// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    initMobileNavigation();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Active navigation link highlighting
    initActiveNavigation();
    
    // Card hover effects enhancement
    initCardEffects();
    
    // Image error handling
    initImageErrorHandling();
});

/**
 * Initialize mobile navigation functionality
 */
function initMobileNavigation() {
    try {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                // Toggle active class on navigation menu
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Close mobile menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
                
                if (!isClickInsideNav && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        }
    } catch (error) {
        console.error('Error initializing mobile navigation:', error);
    }
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    try {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (href === '#') return;
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    } catch (error) {
        console.error('Error initializing smooth scrolling:', error);
    }
}

/**
 * Initialize active navigation link highlighting based on current page
 */
function initActiveNavigation() {
    try {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Remove existing active class
            link.classList.remove('active');
            
            // Add active class to current page link
            if (linkHref === currentPage || 
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage === 'index.html' && linkHref === 'index.html') ||
                (currentPage === 'about.html' && linkHref === 'about.html')) {
                link.classList.add('active');
            }
        });
    } catch (error) {
        console.error('Error initializing active navigation:', error);
    }
}

/**
 * Initialize enhanced card effects
 */
function initCardEffects() {
    try {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            // Add mouse enter effect
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            // Add mouse leave effect
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            // Add click effect for better mobile interaction
            card.addEventListener('click', function() {
                // Add a subtle pulse effect
                this.style.transform = 'translateY(-8px) scale(0.98)';
                
                setTimeout(() => {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                }, 100);
            });
        });
    } catch (error) {
        console.error('Error initializing card effects:', error);
    }
}

/**
 * Initialize image error handling
 */
function initImageErrorHandling() {
    try {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // If image already has an error handler, skip
            if (img.hasAttribute('onerror')) return;
            
            img.addEventListener('error', function() {
                // Create a placeholder div with gradient background
                const placeholder = document.createElement('div');
                placeholder.style.cssText = `
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #8b5cf6, #a855f7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 500;
                    text-align: center;
                    padding: 1rem;
                    font-size: 0.9rem;
                `;
                placeholder.textContent = this.alt || 'Imagem não disponível';
                
                // Replace image with placeholder
                if (this.parentNode) {
                    this.parentNode.replaceChild(placeholder, this);
                }
            });
        });
    } catch (error) {
        console.error('Error initializing image error handling:', error);
    }
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Initialize scroll-based animations (optional enhancement)
 */
function initScrollAnimations() {
    try {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.card, .timeline-item, .skill-category');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    } catch (error) {
        console.error('Error initializing scroll animations:', error);
    }
}

/**
 * Initialize theme toggle (future enhancement)
 */
function initThemeToggle() {
    try {
        // This function can be expanded to add light/dark theme toggle
        // For now, it's a placeholder for future enhancement
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Listen for changes in system theme preference
        prefersDark.addEventListener('change', (e) => {
            // Future: implement theme switching logic
            console.log('System theme changed to:', e.matches ? 'dark' : 'light');
        });
    } catch (error) {
        console.error('Error initializing theme toggle:', error);
    }
}

/**
 * Initialize performance optimizations
 */
function initPerformanceOptimizations() {
    try {
        // Lazy loading for images (if not natively supported)
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.loading = 'lazy';
            });
        }
        
        // Preload critical resources
        const criticalResources = [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        ];
        
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource;
            link.as = 'style';
            document.head.appendChild(link);
        });
    } catch (error) {
        console.error('Error initializing performance optimizations:', error);
    }
}

// Initialize additional features when page is fully loaded
window.addEventListener('load', function() {
    initScrollAnimations();
    initThemeToggle();
    initPerformanceOptimizations();
});

// Handle resize events
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize to larger screen
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (window.innerWidth > 768 && navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}, 250));

// Export functions for potential external use
window.PortfolioApp = {
    initMobileNavigation,
    initSmoothScrolling,
    initActiveNavigation,
    initCardEffects,
    initImageErrorHandling
};
