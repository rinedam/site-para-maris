/*
   Site Romântico Melhorado - JavaScript Avançado
   Arquivo JavaScript Principal com Interações Sofisticadas
*/

// Variáveis globais
let isLoaded = false;
let currentImageIndex = 0;
let galleryImages = [];
let audio = null;
let isPlaying = false;

// Esperar que o DOM seja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    initSite();
});

// Função principal de inicialização
function initSite() {
    // Preloader melhorado
    handlePreloader();
    
    // Cursor personalizado
    initCustomCursor();
    
    // Barra de progresso de leitura
    initReadingProgress();
    
    // Partículas de fundo
    initParticles();
    
    // Contador regressivo melhorado
    initCountdown();
    
    // Navegação melhorada
    initNavigation();
    
    // Efeitos de scroll avançados
    initScrollEffects();
    
    // Timeline interativa
    initTimeline();
    
    // Galeria melhorada
    initGallery();
    
    // Mensagens com efeitos
    initMessages();
    
    // Controles de música
    initMusicControl();
    
    // Corações flutuantes
    initFloatingHearts();
    
    // Efeitos de clique
    initClickEffects();
    
    // Typewriter effect
    initTypewriter();
    
    // Lightbox
    initLightbox();
    
    // Botão voltar ao topo
    initBackToTop();
    
    // Efeitos especiais
    initSpecialEffects();
    
    console.log('Site romântico inicializado com sucesso! 💕');
}

// Preloader melhorado
function handlePreloader() {
    const preloader = document.querySelector('.preloader');
    const progressBar = document.querySelector('.progress-bar');
    
    // Simular carregamento
    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            
            // Esconder preloader após carregamento
            setTimeout(() => {
                if (preloader) {
                    gsap.to(preloader, {
                        opacity: 0,
                        duration: 1,
                        ease: "power2.out",
                        onComplete: () => {
                            preloader.style.display = 'none';
                            isLoaded = true;
                            
                            // Iniciar animações de entrada
                            startEntryAnimations();
                        }
                    });
                }
            }, 500);
        }
    }, 100);
}

// Cursor personalizado
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    if (!cursor || !cursorDot || !cursorOutline) return;

    // Função principal para mover o cursor
    function moveCursor(e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // Adicionar pequeno delay para o outline
        requestAnimationFrame(() => {
            cursorOutline.style.left = `${posX}px`;
            cursorOutline.style.top = `${posY}px`;
        });
    }

    // Eventos do cursor
    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    document.addEventListener('mouseup', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Detectar quando o cursor sai da janela
    document.addEventListener('mouseleave', () => {
        cursorDot.classList.add('cursor-hidden');
        cursorOutline.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
        cursorDot.classList.remove('cursor-hidden');
        cursorOutline.classList.remove('cursor-hidden');
    });

    // Efeito hover em elementos clicáveis
    const clickableElements = document.querySelectorAll('a, button, .gallery-item, .timeline-marker, .nav-link, .filter-btn, .btn-reveal, .control-btn');
    
    clickableElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            cursorDot.classList.add('cursor-hover');
            cursorOutline.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursorDot.classList.remove('cursor-hover');
            cursorOutline.classList.remove('cursor-hover');
        });
    });
}

// Barra de progresso de leitura
function initReadingProgress() {
    const progressFill = document.querySelector('.progress-fill');
    
    if (!progressFill) return;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressFill.style.width = scrollPercent + '%';
    });
}

// Partículas de fundo
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 50,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#e91e63", "#ff4081", "#c2185b", "#ffd700"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#e91e63",
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Contador regressivo melhorado
function initCountdown() {
    const targetDate = new Date('June 12, 2025 00:00:00').getTime();
    
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) return;
    
    let prevDays, prevHours, prevMinutes, prevSeconds;
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            // Evento especial quando chegar a zero
            celebrateSpecialDay();
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Animar apenas valores que mudaram
        if (days !== prevDays) {
            animateNumberChange(daysElement, days);
            prevDays = days;
        }
        
        if (hours !== prevHours) {
            animateNumberChange(hoursElement, hours);
            prevHours = hours;
        }
        
        if (minutes !== prevMinutes) {
            animateNumberChange(minutesElement, minutes);
            prevMinutes = minutes;
        }
        
        if (seconds !== prevSeconds) {
            animateNumberChange(secondsElement, seconds);
            prevSeconds = seconds;
        }
    }
    
    function animateNumberChange(element, newValue) {
        element.classList.add('animate-change');
        
        gsap.to(element, {
            scale: 1.2,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => {
                element.textContent = newValue.toString().padStart(2, '0');
                gsap.to(element, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out",
                    onComplete: () => {
                        element.classList.remove('animate-change');
                    }
                });
            }
        });
    }
    
    // Inicializar valores
    updateCountdown();
    
    // Atualizar a cada segundo
    setInterval(updateCountdown, 1000);
}

// Celebração especial
function celebrateSpecialDay() {
    // Criar explosão de corações
    createHeartExplosion();
    
    // Mostrar mensagem especial
    const countdownContainer = document.querySelector('.countdown-container');
    if (countdownContainer) {
        gsap.to(countdownContainer, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                countdownContainer.innerHTML = `
                    <div class="celebration-message">
                        <h2>🎉 Feliz Dia dos Namorados! 🎉</h2>
                        <p>Hoje é nosso dia especial!</p>
                    </div>
                `;
                
                gsap.fromTo(countdownContainer, 
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.3)" }
                );
            }
        });
    }
}

// Navegação melhorada
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    // Toggle menu mobile
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Animar hambúrguer
            const spans = navToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                gsap.to(spans[0], { rotation: 45, y: 6, duration: 0.3 });
                gsap.to(spans[1], { opacity: 0, duration: 0.3 });
                gsap.to(spans[2], { rotation: -45, y: -6, duration: 0.3 });
            } else {
                gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
                gsap.to(spans[1], { opacity: 1, duration: 0.3 });
                gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
            }
        });
    }
    
    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Navbar com efeito de scroll
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (navbar) {
            if (currentScrollY > 100) {
                navbar.style.background = 'rgba(10, 10, 10, 0.95)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = 'rgba(10, 10, 10, 0.9)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
            
            // Esconder/mostrar navbar baseado na direção do scroll
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                gsap.to(navbar, { y: -100, duration: 0.3 });
            } else {
                gsap.to(navbar, { y: 0, duration: 0.3 });
            }
        }
        
        lastScrollY = currentScrollY;
    });
}

// Efeitos de scroll avançados
function initScrollEffects() {
    // Registrar ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Animações de entrada para seções
    gsap.utils.toArray('.section').forEach(section => {
        gsap.fromTo(section, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
    
    // Animação do título das seções
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            { opacity: 0, y: 30, scale: 0.8 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: title,
                    start: "top 85%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
}

// Timeline interativa
function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineProgress = document.querySelector('.timeline-progress');
    
    if (!timelineProgress) return;
    
    // Animar progresso da timeline
    gsap.to(timelineProgress, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
            trigger: ".timeline",
            start: "top center",
            end: "bottom center",
            scrub: true
        }
    });
    
    // Animar itens da timeline
    timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
        
        // Efeito hover melhorado
        const content = item.querySelector('.timeline-content');
        const marker = item.querySelector('.timeline-marker');
        
        if (content && marker) {
            item.addEventListener('mouseenter', () => {
                gsap.to(content, { scale: 1.05, duration: 0.3 });
                gsap.to(marker, { scale: 1.2, rotation: 360, duration: 0.5 });
            });
            
            item.addEventListener('mouseleave', () => {
                gsap.to(content, { scale: 1, duration: 0.3 });
                gsap.to(marker, { scale: 1, rotation: 0, duration: 0.5 });
            });
        }
    });
}

// Galeria melhorada
function initGallery() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Inicializar galeria
    galleryImages = Array.from(galleryItems);
    
    // Mostrar todos os itens inicialmente
    galleryItems.forEach((item, index) => {
        gsap.fromTo(item,
            { opacity: 0, scale: 0.8, y: 30 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: '.gallery-grid',
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            }
        );
        
        item.classList.add('show');
    });
    
    // Filtros da galeria
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Atualizar botão ativo
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrar itens
            galleryItems.forEach(item => {
                const category = item.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    item.classList.add('show');
                } else {
                    gsap.to(item, {
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.3,
                        ease: "power2.in"
                    });
                    item.classList.remove('show');
                }
            });
        });
    });
    
    // Efeitos de hover na galeria
    galleryItems.forEach(item => {
        const image = item.querySelector('.gallery-image');
        const overlay = item.querySelector('.gallery-overlay');
        
        if (image && overlay) {
            item.addEventListener('mouseenter', () => {
                gsap.to(overlay, { opacity: 1, duration: 0.3 });
                gsap.to(image.querySelector('.photo-placeholder'), { 
                    scale: 1.1, 
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
            
            item.addEventListener('mouseleave', () => {
                gsap.to(overlay, { opacity: 0, duration: 0.3 });
                gsap.to(image.querySelector('.photo-placeholder'), { 
                    scale: 1, 
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
        }
    });
    
    // Botões da galeria
    document.querySelectorAll('.gallery-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const action = btn.dataset.action;
            const galleryItem = btn.closest('.gallery-item');
            
            if (action === 'view') {
                openLightbox(galleryItem);
            } else if (action === 'heart') {
                createHeartBurst(btn);
            }
        });
    });
}

// Mensagens com efeitos
function initMessages() {
    const revealBtns = document.querySelectorAll('.btn-reveal');
    
    revealBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const hiddenMessage = btn.nextElementSibling;
            const icon = btn.querySelector('i');
            
            if (hiddenMessage.classList.contains('show')) {
                // Esconder mensagem
                gsap.to(hiddenMessage, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                        hiddenMessage.classList.remove('show');
                        hiddenMessage.style.display = 'none';
                    }
                });
                
                btn.querySelector('span').textContent = 'Revelar Mais';
                if (icon) {
                    gsap.to(icon, { rotation: 0, duration: 0.3 });
                }
                btn.classList.remove('active');
            } else {
                // Mostrar mensagem
                hiddenMessage.style.display = 'block';
                hiddenMessage.classList.add('show');
                
                const height = hiddenMessage.scrollHeight;
                hiddenMessage.style.height = '0px';
                
                gsap.to(hiddenMessage, {
                    height: height + 'px',
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
                
                btn.querySelector('span').textContent = 'Esconder';
                if (icon) {
                    gsap.to(icon, { rotation: 180, duration: 0.3 });
                }
                btn.classList.add('active');
            }
        });
    });
    
    // Animação dos cartões de mensagem
    gsap.utils.toArray('.message-card').forEach((card, index) => {
        gsap.fromTo(card,
            { opacity: 0, y: 50, rotationY: 15 },
            {
                opacity: 1,
                y: 0,
                rotationY: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: '.messages-section',
                    start: "top 70%",
                    toggleActions: "play none none none"
                }
            }
        );
    });
}

// Controle de música melhorado
function initMusicControl() {
    const musicToggle = document.getElementById('music-toggle');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeControl = document.querySelector('.volume-control');
    const musicControl = document.querySelector('.music-control');
    
    if (!musicToggle) return;
    
    // Mostrar controle de volume
    musicControl.addEventListener('mouseenter', () => {
        volumeControl.classList.add('active');
        gsap.fromTo(volumeControl, 
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3 }
        );
    });
    
    musicControl.addEventListener('mouseleave', () => {
        if (!isPlaying) {
            gsap.to(volumeControl, {
                opacity: 0,
                y: 10,
                duration: 0.3,
                onComplete: () => {
                    volumeControl.classList.remove('active');
                }
            });
        }
    });
    
    // Controle de play/pause
    musicToggle.addEventListener('click', () => {
        if (!audio) {
            // Criar elemento de áudio
            audio = new Audio();
            audio.src = './music/musicapamaris.mp3'; // Substitua pelo caminho da música
            audio.loop = true;
            audio.volume = volumeSlider.value / 100;
        }
        
        if (isPlaying) {
            audio.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
            isPlaying = false;
            
            gsap.to(musicToggle, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        } else {
            audio.play().catch(e => {
                console.log('Erro ao reproduzir música:', e);
            });
            musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
            
            gsap.to(musicToggle, { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 });
        }
    });
    
    // Controle de volume
    if (volumeSlider) {
        volumeSlider.addEventListener('input', () => {
            if (audio) {
                audio.volume = volumeSlider.value / 100;
            }
            
            // Atualizar ícone do volume
            const volumeIcon = volumeControl.querySelector('i');
            if (volumeIcon) {
                if (volumeSlider.value == 0) {
                    volumeIcon.className = 'fas fa-volume-mute';
                } else if (volumeSlider.value < 50) {
                    volumeIcon.className = 'fas fa-volume-down';
                } else {
                    volumeIcon.className = 'fas fa-volume-up';
                }
            }
        });
    }
}

// Corações flutuantes
function initFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;
    
    const colors = ['#e91e63', '#ff4081', '#c2185b', '#ffd700', '#d8b5ff'];
    
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💕';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '-1';
        
        container.appendChild(heart);
        
        // Animar coração
        gsap.to(heart, {
            y: -window.innerHeight - 100,
            x: (Math.random() - 0.5) * 200,
            rotation: Math.random() * 360,
            opacity: 0,
            duration: Math.random() * 3 + 5,
            ease: "none",
            onComplete: () => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }
        });
    }
    
    // Criar corações periodicamente
    setInterval(createFloatingHeart, 3000);
    
    // Criar corações iniciais
    for (let i = 0; i < 5; i++) {
        setTimeout(createFloatingHeart, i * 1000);
    }
}

// Efeitos de clique
function initClickEffects() {
    document.addEventListener('click', (e) => {
        // Ignorar cliques em elementos interativos
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('.nav-link')) {
            return;
        }
        
        createClickEffect(e.clientX, e.clientY);
    });
}

function createClickEffect(x, y) {
    const effect = document.createElement('div');
    effect.style.position = 'fixed';
    effect.style.left = x + 'px';
    effect.style.top = y + 'px';
    effect.style.pointerEvents = 'none';
    effect.style.zIndex = '9999';
    effect.innerHTML = '💖';
    effect.style.fontSize = '20px';
    effect.style.transform = 'translate(-50%, -50%)';
    
    document.body.appendChild(effect);
    
    // Animar efeito
    gsap.fromTo(effect,
        { scale: 0, rotation: 0 },
        {
            scale: 2,
            rotation: 360,
            y: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                if (effect.parentNode) {
                    effect.parentNode.removeChild(effect);
                }
            }
        }
    );
}

// Explosão de corações
function createHeartExplosion() {
    const container = document.getElementById('floating-hearts');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💕';
            heart.style.position = 'absolute';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = window.innerWidth / 2 + 'px';
            heart.style.top = window.innerHeight / 2 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            
            container.appendChild(heart);
            
            const angle = (i / 20) * Math.PI * 2;
            const distance = Math.random() * 300 + 100;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            gsap.to(heart, {
                x: x,
                y: y,
                rotation: Math.random() * 720,
                scale: 0,
                opacity: 0,
                duration: 2,
                ease: "power2.out",
                onComplete: () => {
                    if (heart.parentNode) {
                        heart.parentNode.removeChild(heart);
                    }
                }
            });
        }, i * 50);
    }
}

// Burst de corações
function createHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '16px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(heart);
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        
        gsap.to(heart, {
            x: x,
            y: y,
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            onComplete: () => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }
        });
    }
}

// Efeito typewriter
function initTypewriter() {
    const typewriterElement = document.querySelector('.typewriter-text');
    if (!typewriterElement) return;
    
    const text = typewriterElement.textContent;
    typewriterElement.textContent = '';
    
    gsap.to(typewriterElement, {
        duration: text.length * 0.05,
        ease: "none",
        onUpdate: function() {
            const progress = this.progress();
            const currentLength = Math.floor(progress * text.length);
            typewriterElement.textContent = text.substring(0, currentLength);
        },
        scrollTrigger: {
            trigger: typewriterElement,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
}

// Lightbox
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox?.querySelector('.lightbox-image img');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');
    const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
    const lightboxNext = lightbox?.querySelector('.lightbox-next');
    
    if (!lightbox) return;
    
    // Fechar lightbox
    lightboxClose?.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Navegação do lightbox
    lightboxPrev?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    });
    
    lightboxNext?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    });
    
    // Teclas do teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                lightboxPrev?.click();
                break;
            case 'ArrowRight':
                lightboxNext?.click();
                break;
        }
    });
    
    // Lightbox functionality
    document.addEventListener('DOMContentLoaded', function() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = lightbox.querySelector('.lightbox-image img');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        const viewBtns = document.querySelectorAll('.gallery-btn[data-action="view"]');

        // Abrir lightbox
        viewBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const galleryItem = this.closest('.gallery-item');
                const img = galleryItem.querySelector('.photo-placeholder img');
                lightboxImg.src = img.src;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden'; // Previne scroll
            });
        });

        // Fechar lightbox
        closeBtn.addEventListener('click', function() {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Restaura scroll
        });

        // Fechar com Esc
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Fechar clicando fora da imagem
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

function openLightbox(galleryItem) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    currentImageIndex = galleryImages.indexOf(galleryItem);
    updateLightboxImage();
    
    lightbox.classList.add('active');
    gsap.fromTo(lightbox,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
    );
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    gsap.to(lightbox, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
            lightbox.classList.remove('active');
        }
    });
}

function updateLightboxImage() {
    const lightboxImage = document.querySelector('.lightbox-image img');
    if (!lightboxImage || !galleryImages[currentImageIndex]) return;
    
    const currentItem = galleryImages[currentImageIndex];
    const placeholder = currentItem.querySelector('.photo-placeholder');
    
    // Por enquanto, usar placeholder. Em um site real, você usaria a imagem real
    lightboxImage.src = 'data:image/svg+xml;base64,' + btoa(`
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
            <rect width="600" height="400" fill="#2d2d2d"/>
            <text x="300" y="200" text-anchor="middle" fill="#e91e63" font-size="24" font-family="Arial">
                ${placeholder?.textContent || 'Imagem'}
            </text>
        </svg>
    `);
}

// Botão voltar ao topo
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
}

// Animações de entrada
function startEntryAnimations() {
    // Animar título principal
    gsap.fromTo('.hero-title .title-line',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power2.out"
        }
    );
    
    // Animar imagem de perfil
    gsap.fromTo('.profile-image',
        { scale: 0, rotation: -180 },
        {
            scale: 1,
            rotation: 0,
            duration: 1.5,
            delay: 1,
            ease: "elastic.out(1, 0.3)"
        }
    );
    
    // Animar contador
    gsap.fromTo('.countdown-container',
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 1.5,
            ease: "power2.out"
        }
    );
}

// Efeitos especiais
function initSpecialEffects() {
    // Efeito parallax nos elementos flutuantes
    gsap.utils.toArray('.floating-heart, .floating-star').forEach(element => {
        gsap.to(element, {
            y: -50,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
    
    // Efeito de brilho nos cartões especiais
    gsap.utils.toArray('.timeline-content.special').forEach(element => {
        gsap.to(element, {
            boxShadow: "0 0 30px rgba(255, 215, 0, 0.5)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });
    
    // Animação contínua dos corações flutuantes ao redor da foto
    gsap.utils.toArray('.floating-hearts-around i').forEach((heart, index) => {
        gsap.to(heart, {
            rotation: 360,
            duration: 4 + index,
            repeat: -1,
            ease: "none"
        });
    });
}

// Função utilitária para detectar dispositivos móveis
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar efeitos para mobile
function adjustForMobile() {
    if (isMobile()) {
        // Reduzir partículas em dispositivos móveis
        if (typeof particlesJS !== 'undefined') {
            pJSDom[0].pJS.particles.number.value = 20;
            pJSDom[0].pJS.fn.particlesRefresh();
        }
        
        // Desabilitar cursor personalizado em mobile
        const cursor = document.querySelector('.custom-cursor');
        if (cursor) {
            cursor.style.display = 'none';
        }
        
        // Habilitar cursor padrão
        document.body.style.cursor = 'auto';
    }
}

// Chamar ajustes para mobile
window.addEventListener('resize', adjustForMobile);
adjustForMobile();

// Log de inicialização
console.log('🎉 Site romântico carregado com sucesso!');
console.log('💕 Todas as animações e efeitos estão funcionando!');
console.log('✨ Que sua namorada fique impressionada!');

