// Aguarda o DOM ser totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Inicializa todas as funcionalidades
  initMobileNavigation()
  initSmoothScrolling()
  initActiveNavigation()
  initCardEffects()
  initImageErrorHandling()
  initPageLoadAnimations()
  initScrollAnimations()
  initTypingAnimation()
  initParallaxEffects()
  initAdvancedInteractions()
  initScrollProgress()
  initTranslation()
})

const translations = {
  pt: {
    indexPageTitle: "LABORATÓRIO DE DESENVOLVIMENTO - Portifolio",
    pageTitle: "Sobre - LABORATÓRIO DE DESENVOLVIMENTO",
    portfolio: "Portfolio",
    about: "Sobre",
    contact: "Contato",
    heroTitle: "Olá, eu sou o Gabriel Reis",
    heroSubtitle: "Estudante de Engenharia de Software",
    heroDescription:
      "Sou estudante de Engenharia de Software na PUC Minas, atualmente no 4º período do curso. Tenho paixão por tecnologia, desenvolvimento de sistemas e pela constante evolução do mundo digital.",
    projectsTitle: "Meus Projetos",
    project1Title: "Optima",
    project1Description:
      "Durante o terceiro periodo, desenvolvi juntamente com meu grupo um projeto em React e Node.js para otimização de processos internos de uma empresa.",
    project2Title: "G-agro",
    project2Description:
      "A G-agro é uma plataforma desenvolvida para otimizar a gestão de propriedades rurais, integrando tecnologias IoT para monitoramento de culturas e automação de processos agrícolas.",
    project3Title: "O Basico Bem Feito",
    project3Description:
      "Um projeto que visa informar e ajudar o usuario o conceder o fisico que deseja e a melhorar sua qualidade de vida, alem de ensinar sobre hábitos saudáveis.",
    project4Title: "Projeto 4",
    project4Description: "Descrição",
    aboutTitle: "Olá, eu sou o Gabriel Reis",
    aboutSubtitle: "Sou estudante de Engenharia de Software",
    aboutText:
      "Fascinado pela forma como a tecnologia resolve desafios do dia a dia, mergulhei nos estudos de programação e engenharia de software. Com uma base sólida em algoritmos e estruturas de dados, venho aplicando meu conhecimento em projetos com Java, React e JavaScript para criar soluções funcionais e intuitivas. Mais do que apenas código, busco entender o 'porquê' de cada projeto, utilizando engenharia de requisitos e metodologias ágeis para garantir que a solução final seja realmente impactante. Estou em constante aprendizado, movido pela curiosidade de transformar ideias em realidade.",
    skillsTitle: "Habilidades & Tecnologias",
    frontend: "Frontend",
    backend: "Backend",
    designTools: "Design & Tools",
    experienceTitle: "Experiência",
    experienceDate: "04/2025",
    jobTitle: "Tecnico de informatica (Junior)",
    company: "Compurem informatica",
    jobDescription:
      "Realizo manutenção de computadores, suporte técnico e atendimento ao cliente, Alem de configurar servidores e banco de dados de forma eficiente.",
    contactTitle: "Vamos Conversar?",
    contactDescription: "Estou sempre aberto a novos desafios e oportunidades de colaboração.",
    footerText: "© 2025 Laboratório de Desenvolvimento de Software. Todos os direitos reservados.",
  },
  en: {
    indexPageTitle: "SOFTWARE DEVELOPMENT LABORATORY - Portfolio",
    pageTitle: "About - SOFTWARE DEVELOPMENT LABORATORY",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    heroTitle: "Hi, I'm Gabriel Reis",
    heroSubtitle: "Software Engineering Student",
    heroDescription:
      "I'm a Software Engineering student at PUC Minas, currently in the 4th semester of the course. I have a passion for technology, systems development, and the constant evolution of the digital world.",
    projectsTitle: "My Projects",
    project1Title: "Optima",
    project1Description:
      "During the third semester, I developed together with my group a React and Node.js project for optimizing internal company processes.",
    project2Title: "G-agro",
    project2Description:
      "G-agro is a platform developed to optimize rural property management, integrating IoT technologies for crop monitoring and agricultural process automation.",
    project3Title: "The Basics Done Right",
    project3Description:
      "A project that aims to inform and help users achieve the physique they desire and improve their quality of life, in addition to teaching about healthy habits.",
    project4Title: "Project 4",
    project4Description: "Description",
    aboutTitle: "Hi, I'm Gabriel Reis",
    aboutSubtitle: "I'm a Software Engineering Student",
    aboutText:
      "Fascinated by how technology solves everyday challenges, I dove into the study of programming and software engineering. With a solid foundation in algorithms and data structures, I have been applying my knowledge to projects with Java, React, and JavaScript to create functional and intuitive solutions. More than just code, I seek to understand the 'why' behind each project, using requirements engineering and agile methodologies to ensure the final solution is truly impactful. I am constantly learning, driven by a curiosity to turn ideas into reality.",
    skillsTitle: "Skills & Technologies",
    frontend: "Frontend",
    backend: "Backend",
    designTools: "Design & Tools",
    experienceTitle: "Experience",
    experienceDate: "04/2025",
    jobTitle: "IT Technician (Junior)",
    company: "Compurem Informatica",
    jobDescription:
      "I perform computer maintenance, technical support and customer service, in addition to configuring servers and databases efficiently.",
    contactTitle: "Let's Talk?",
    contactDescription: "I'm always open to new challenges and collaboration opportunities.",
    footerText: "© 2025 Software Development Laboratory. All rights reserved.",
  },
}

let currentLang = "pt"

// --- tradução ---
function applyTranslation() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")
    if (translations[currentLang] && translations[currentLang][key]) {
      el.textContent = translations[currentLang][key]
    } else if (key === "pageTitle") {
      document.title = translations[currentLang][key]
    }
  })
}

function initTranslation() {
  const langToggle = document.getElementById("lang-toggle")
  if (langToggle) {
    langToggle.textContent = currentLang === "pt" ? "EN" : "PT"
    applyTranslation()
  }
}

// --- Evento do botão de tradução ---
const langToggle = document.getElementById("lang-toggle")
if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "pt" ? "en" : "pt"
    initTranslation() // Alterna o idioma e aplica a tradução
  })
}

// --- Funções JavaScript originais (não mexa) ---
function initMobileNavigation() {
  try {
    const navToggle = document.getElementById("nav-toggle")
    const navMenu = document.getElementById("nav-menu")

    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active")
        navToggle.classList.toggle("active")
      })

      const navLinks = document.querySelectorAll(".nav-link")
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("active")
          navToggle.classList.remove("active")
        })
      })

      document.addEventListener("click", (event) => {
        const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target)

        if (!isClickInsideNav && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active")
          navToggle.classList.remove("active")
        }
      })
    }
  } catch (error) {
    console.error("Error initializing mobile navigation:", error)
  }
}

function initSmoothScrolling() {
  try {
    const anchorLinks = document.querySelectorAll('a[href^="#"]')

    anchorLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href")

        if (href === "#") return

        const targetElement = document.querySelector(href)

        if (targetElement) {
          e.preventDefault()

          const headerHeight = document.querySelector(".header").offsetHeight
          const targetPosition = targetElement.offsetTop - headerHeight - 20

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  } catch (error) {
    console.error("Error initializing smooth scrolling:", error)
  }
}

function initActiveNavigation() {
  try {
    const currentPage = window.location.pathname.split("/").pop() || "index.html"
    const navLinks = document.querySelectorAll(".nav-link")

    navLinks.forEach((link) => {
      const linkHref = link.getAttribute("href")

      link.classList.remove("active")

      if (
        linkHref === currentPage ||
        (currentPage === "" && linkHref === "index.html") ||
        (currentPage === "index.html" && linkHref === "index.html") ||
        (currentPage === "about.html" && linkHref === "about.html")
      ) {
        link.classList.add("active")
      }
    })
  } catch (error) {
    console.error("Error initializing active navigation:", error)
  }
}

function initCardEffects() {
  try {
    const cards = document.querySelectorAll(".card")

    cards.forEach((card) => {
      card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-8px) scale(1.02)"
      })

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)"
      })

      card.addEventListener("click", function () {
        this.style.transform = "translateY(-8px) scale(0.98)"

        setTimeout(() => {
          this.style.transform = "translateY(-8px) scale(1.02)"
        }, 100)
      })
    })
  } catch (error) {
    console.error("Error initializing card effects:", error)
  }
}

function initImageErrorHandling() {
  try {
    const images = document.querySelectorAll("img")

    images.forEach((img) => {
      if (img.hasAttribute("onerror")) return

      img.addEventListener("error", function () {
        const placeholder = document.createElement("div")
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
                `
        placeholder.textContent = this.alt || "Imagem não disponível"

        if (this.parentNode) {
          this.parentNode.replaceChild(placeholder, this)
        }
      })
    })
  } catch (error) {
    console.error("Error initializing image error handling:", error)
  }
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function initScrollAnimations() {
  try {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".card, .timeline-item, .skill-category")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
  } catch (error) {
    console.error("Error initializing scroll animations:", error)
  }
}

function initThemeToggle() {
  try {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")

    prefersDark.addEventListener("change", (e) => {
      console.log("System theme changed to:", e.matches ? "dark" : "light")
    })
  } catch (error) {
    console.error("Error initializing theme toggle:", error)
  }
}

function initPerformanceOptimizations() {
  try {
    if ("loading" in HTMLImageElement.prototype) {
      const images = document.querySelectorAll("img")
      images.forEach((img) => {
        img.loading = "lazy"
      })
    }

    const criticalResources = ["https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"]

    criticalResources.forEach((resource) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = resource
      link.as = "style"
      document.head.appendChild(link)
    })
  } catch (error) {
    console.error("Error initializing performance optimizations:", error)
  }
}

window.addEventListener("load", () => {
  initScrollAnimations()
  initThemeToggle()
  initPerformanceOptimizations()
  initScrollProgress()
})

window.addEventListener(
  "resize",
  debounce(() => {
    const navMenu = document.getElementById("nav-menu")
    const navToggle = document.getElementById("nav-toggle")

    if (window.innerWidth > 768 && navMenu && navToggle) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  }, 250),
)

function initPageLoadAnimations() {
  try {
    const heroTitle = document.querySelector(".hero-title")
    const heroSubtitle = document.querySelector(".hero-subtitle")
    const heroDescription = document.querySelector(".hero-description")
    const sectionTitles = document.querySelectorAll(".section-title")

    if (heroTitle) heroTitle.classList.add("fade-in")
    if (heroSubtitle) heroSubtitle.classList.add("fade-in", "fade-in-delay-1")
    if (heroDescription) heroDescription.classList.add("fade-in", "fade-in-delay-2")

    sectionTitles.forEach((title, index) => {
      title.classList.add("fade-in", `fade-in-delay-${Math.min(index + 1, 4)}`)
    })

    const cards = document.querySelectorAll(".card")
    cards.forEach((card, index) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      card.style.animationDelay = `${index * 0.1}s`

      setTimeout(
        () => {
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        },
        500 + index * 100,
      )
    })
  } catch (error) {
    console.error("Error initializing page load animations:", error)
  }
}

function initTypingAnimation() {
  try {
    const heroTitle = document.querySelector(".hero-title")
    if (!heroTitle) return

    const originalText = heroTitle.textContent
    const words = originalText.split(" ")

    if (words.length > 2) {
      heroTitle.textContent = ""
      heroTitle.style.borderRight = "2px solid var(--purple-gradient-start)"

      let wordIndex = 0
      let charIndex = 0
      let isDeleting = false
      let currentWord = ""

      function typeWriter() {
        const fullWord = words[wordIndex]

        if (isDeleting) {
          currentWord = fullWord.substring(0, charIndex - 1)
          charIndex--
        } else {
          currentWord = fullWord.substring(0, charIndex + 1)
          charIndex++
        }

        heroTitle.textContent = words.slice(0, wordIndex).join(" ") + (wordIndex > 0 ? " " : "") + currentWord

        let typeSpeed = isDeleting ? 50 : 100

        if (!isDeleting && charIndex === fullWord.length) {
          if (wordIndex === words.length - 1) {
            heroTitle.style.borderRight = "none"
            return
          }
          wordIndex++
          charIndex = 0
          typeSpeed = 200
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false
          wordIndex++
          typeSpeed = 500
        }

        setTimeout(typeWriter, typeSpeed)
      }

      setTimeout(typeWriter, 1000)
    }
  } catch (error) {
    console.error("Error initializing typing animation:", error)
  }
}

function initParallaxEffects() {
  try {
    const parallaxElements = document.querySelectorAll(".hero, .about-hero")

    function updateParallax() {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5

      parallaxElements.forEach((element) => {
        element.style.transform = `translateY(${rate}px)`
      })
    }

    let ticking = false
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
        setTimeout(() => {
          ticking = false
        }, 16)
      }
    }

    window.addEventListener("scroll", requestTick)
  } catch (error) {
    console.error("Error initializing parallax effects:", error)
  }
}

function initAdvancedInteractions() {
  try {
    const interactiveElements = document.querySelectorAll(".contact-link, .nav-link, .tag")

    interactiveElements.forEach((element) => {
      element.addEventListener("click", function (e) {
        const ripple = document.createElement("span")
        const rect = this.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

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
                `

        this.style.position = "relative"
        this.style.overflow = "hidden"
        this.appendChild(ripple)

        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })

    if (!document.querySelector("#ripple-styles")) {
      const style = document.createElement("style")
      style.id = "ripple-styles"
      style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `
      document.head.appendChild(style)
    }

    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
      card.addEventListener("mousemove", function (e) {
        const rect = this.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        const moveX = x * 0.1
        const moveY = y * 0.1

        this.style.transform = `translateY(-12px) rotateX(5deg) translateX(${moveX}px) translateY(${moveY}px)`
      })

      card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) rotateX(0) translateX(0)"
      })
    })

    const profileImage = document.querySelector(".about-image img")
    if (profileImage) {
      profileImage.style.animation = "float 6s ease-in-out infinite"

      if (!document.querySelector("#float-styles")) {
        const style = document.createElement("style")
        style.id = "float-styles"
        style.textContent = `
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                `
        document.head.appendChild(style)
      }
    }
  } catch (error) {
    console.error("Error initializing advanced interactions:", error)
  }
}

function initScrollProgress() {
  try {
    const progressBar = document.createElement("div")
    progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(135deg, var(--purple-gradient-start), var(--purple-gradient-end));
            z-index: 9999;
            transition: width 0.1s ease;
        `
    document.body.appendChild(progressBar)

    function updateProgress() {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      progressBar.style.width = scrollPercent + "%"
    }

    window.addEventListener("scroll", debounce(updateProgress, 10))
  } catch (error) {
    console.error("Error initializing scroll progress:", error)
  }
}

window.PortfolioApp = {
  initMobileNavigation,
  initSmoothScrolling,
  initActiveNavigation,
  initCardEffects,
  initImageErrorHandling,
  initPageLoadAnimations,
  initTypingAnimation,
  initParallaxEffects,
  initAdvancedInteractions,
}
