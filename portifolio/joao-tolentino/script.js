// Aguarda o DOM ser totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa todas as funcionalidades
    initMobileNavigation();
    initSmoothScrolling();
    initActiveNavigation();
    initCardEffects();
    initImageErrorHandling();
    initPageLoadAnimations();
    initScrollAnimations();
    initTypingAnimation();
    initParallaxEffects();
    initAdvancedInteractions();
});


function initMobileNavigation() {
    try {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                // Alterna a classe ativa no menu de navegação
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });

            // Fecha o menu mobile ao clicar nos links de navegação
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                });
            });

            // Fecha o menu mobile ao clicar fora dele
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


function initSmoothScrolling() {
    try {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Pula se o href for apenas "#"
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


function initActiveNavigation() {
    try {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            
            // Remove a classe ativa existente
            link.classList.remove('active');
            
            // Adiciona a classe ativa ao link da página atual
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


function initCardEffects() {
    try {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            // Adiciona efeito ao passar o mouse
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            // Adiciona efeito ao retirar o mouse
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
            
            // Adiciona efeito de clique para melhor interação mobile
            card.addEventListener('click', function() {
                // Adiciona um efeito sutil de pulso
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


function initImageErrorHandling() {
    try {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            // Se a imagem já tem um manipulador de erro, pula
            if (img.hasAttribute('onerror')) return;
            
            img.addEventListener('error', function() {
                // Cria um div placeholder com fundo gradiente
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
                
                // Substitui a imagem pelo placeholder
                if (this.parentNode) {
                    this.parentNode.replaceChild(placeholder, this);
                }
            });
        });
    } catch (error) {
        console.error('Error initializing image error handling:', error);
    }
}


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


function initScrollAnimations() {
    try {
        // Intersection Observer para animações de fade-in
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
        
        // Observa elementos para animação
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


function initThemeToggle() {
    try {
        // Esta função pode ser expandida para adicionar alternância de tema claro/escuro
        // Por enquanto, é um placeholder para futuras melhorias
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Escuta mudanças na preferência de tema do sistema
        prefersDark.addEventListener('change', (e) => {
            // Futuro: implementar lógica de alternância de tema
            console.log('System theme changed to:', e.matches ? 'dark' : 'light');
        });
    } catch (error) {
        console.error('Error initializing theme toggle:', error);
    }
}


function initPerformanceOptimizations() {
    try {
        // Carregamento lazy para imagens (se não suportado nativamente)
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img');
            images.forEach(img => {
                img.loading = 'lazy';
            });
        }
        
        // Pré-carrega recursos críticos
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

// Inicializa funcionalidades adicionais quando a página estiver totalmente carregada
window.addEventListener('load', function() {
    initScrollAnimations();
    initThemeToggle();
    initPerformanceOptimizations();
});

// Manipula eventos de redimensionamento
window.addEventListener('resize', debounce(function() {
    // Fecha o menu mobile ao redimensionar para tela maior
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    
    if (window.innerWidth > 768 && navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
}, 250));


function initPageLoadAnimations() {
    try {
        // Adiciona classes de animação aos elementos
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        const sectionTitles = document.querySelectorAll('.section-title');
        
        if (heroTitle) heroTitle.classList.add('fade-in');
        if (heroSubtitle) heroSubtitle.classList.add('fade-in', 'fade-in-delay-1');
        if (heroDescription) heroDescription.classList.add('fade-in', 'fade-in-delay-2');
        
        sectionTitles.forEach((title, index) => {
            title.classList.add('fade-in', `fade-in-delay-${Math.min(index + 1, 4)}`);
        });
        
        // Adiciona animação escalonada aos cards
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.animationDelay = `${index * 0.1}s`;
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 500 + (index * 100));
        });
        
    } catch (error) {
        console.error('Error initializing page load animations:', error);
    }
}


function initTypingAnimation() {
    try {
        const heroTitle = document.querySelector('.hero-title');
        if (!heroTitle) return;
        
        const originalText = heroTitle.textContent;
        const words = originalText.split(' ');
        
        // Só anima se houver múltiplas palavras
        if (words.length > 2) {
            heroTitle.textContent = '';
            heroTitle.style.borderRight = '2px solid var(--purple-gradient-start)';
            
            let wordIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let currentWord = '';
            
            function typeWriter() {
                const fullWord = words[wordIndex];
                
                if (isDeleting) {
                    currentWord = fullWord.substring(0, charIndex - 1);
                    charIndex--;
                } else {
                    currentWord = fullWord.substring(0, charIndex + 1);
                    charIndex++;
                }
                
                heroTitle.textContent = words.slice(0, wordIndex).join(' ') + 
                                    (wordIndex > 0 ? ' ' : '') + currentWord;
                
                let typeSpeed = isDeleting ? 50 : 100;
                
                if (!isDeleting && charIndex === fullWord.length) {
                    if (wordIndex === words.length - 1) {
                        // Terminou de digitar todas as palavras
                        heroTitle.style.borderRight = 'none';
                        return;
                    }
                    wordIndex++;
                    charIndex = 0;
                    typeSpeed = 200;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    wordIndex++;
                    typeSpeed = 500;
                }
                
                setTimeout(typeWriter, typeSpeed);
            }
            
            // Inicia a animação de digitação após um atraso
            setTimeout(typeWriter, 1000);
        }
    } catch (error) {
        console.error('Error initializing typing animation:', error);
    }
}


function initParallaxEffects() {
    try {
        const parallaxElements = document.querySelectorAll('.hero, .about-hero');
        
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        }
        
        // Limita eventos de scroll para melhor performance
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
                setTimeout(() => { ticking = false; }, 16);
            }
        }
        
        window.addEventListener('scroll', requestTick);
    } catch (error) {
        console.error('Error initializing parallax effects:', error);
    }
}


function initAdvancedInteractions() {
    try {
        // Adiciona efeito ripple a botões e links
        const interactiveElements = document.querySelectorAll('.contact-link, .nav-link, .tag');
        
        interactiveElements.forEach(element => {
            element.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(139, 92, 246, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `;
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
        
        // Adiciona CSS para animação ripple
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Adiciona efeito magnético aos cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x * 0.1;
                const moveY = y * 0.1;
                
                this.style.transform = `translateY(-12px) rotateX(5deg) translateX(${moveX}px) translateY(${moveY}px)`;
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateX(0) translateX(0)';
            });
        });
        
        // Adiciona animação flutuante à imagem de perfil
        const profileImage = document.querySelector('.about-image img');
        if (profileImage) {
            profileImage.style.animation = 'float 6s ease-in-out infinite';
            
            // Adiciona CSS para animação flutuante
            if (!document.querySelector('#float-styles')) {
                const style = document.createElement('style');
                style.id = 'float-styles';
                style.textContent = `
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                `;
                document.head.appendChild(style);
            }
        }
        
    } catch (error) {
        console.error('Error initializing advanced interactions:', error);
    }
}

function initScrollProgress() {
    try {
        // Cria barra de progresso
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, var(--purple-gradient-start), var(--purple-gradient-end));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        // Atualiza o progresso no scroll
        function updateProgress() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        }
        
        window.addEventListener('scroll', debounce(updateProgress, 10));
    } catch (error) {
        console.error('Error initializing scroll progress:', error);
    }
}

// Inicializa funcionalidades adicionais quando a página estiver totalmente carregada
window.addEventListener('load', function() {
    initScrollAnimations();
    initThemeToggle();
    initPerformanceOptimizations();
    initScrollProgress();
});

// Exporta funções para possível uso externo
window.PortfolioApp = {
    initMobileNavigation,
    initSmoothScrolling,
    initActiveNavigation,
    initCardEffects,
    initImageErrorHandling,
    initPageLoadAnimations,
    initTypingAnimation,
    initParallaxEffects,
    initAdvancedInteractions
};
