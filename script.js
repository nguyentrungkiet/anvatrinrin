// ===================================
// ANIMATE ON SCROLL FUNCTIONALITY
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Create luxury particles background
    createParticles();
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(element => observer.observe(element));
    
    
    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 20;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ===================================
    // ADD TO CART BUTTON ANIMATION
    // ===================================
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get product name from parent
            const menuItem = this.closest('.menu-item');
            const productName = menuItem.querySelector('.menu-item-name').textContent;
            const productPrice = menuItem.querySelector('.menu-item-price').textContent;
            
            // Visual feedback
            const originalText = this.textContent;
            this.textContent = '✓ Đã thêm!';
            this.style.background = '#4CAF50';
            
            // Show alert
            showNotification(`Đã thêm "${productName}" - ${productPrice} vào đơn hàng!`);
            
            // Reset button after 1.5 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 1500);
        });
    });
    
    
    // ===================================
    // NOTIFICATION SYSTEM
    // ===================================
    function showNotification(message) {
        // Create notification element if it doesn't exist
        let notification = document.querySelector('.notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'notification';
            document.body.appendChild(notification);
            
            // Add notification styles
            const style = document.createElement('style');
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #4CAF50, #45a049);
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
                    z-index: 9999;
                    opacity: 0;
                    transform: translateX(400px);
                    transition: all 0.3s ease;
                    max-width: 350px;
                    font-weight: 600;
                }
                
                .notification.show {
                    opacity: 1;
                    transform: translateX(0);
                }
                
                @media (max-width: 480px) {
                    .notification {
                        top: 10px;
                        right: 10px;
                        left: 10px;
                        max-width: none;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        notification.textContent = message;
        notification.classList.add('show');
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    
    // ===================================
    // SCROLL TO TOP ON PAGE LOAD
    // ===================================
    window.scrollTo(0, 0);
    
    
    // ===================================
    // FLOATING ACTION BUTTON SHOW/HIDE
    // ===================================
    const fab = document.querySelector('.floating-action');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show FAB after scrolling down 300px
        if (scrollTop > 300) {
            fab.style.opacity = '1';
            fab.style.visibility = 'visible';
        } else {
            fab.style.opacity = '0';
            fab.style.visibility = 'hidden';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Set initial FAB visibility
    fab.style.opacity = '0';
    fab.style.visibility = 'hidden';
    fab.style.transition = 'all 0.3s ease';
    
    
    // ===================================
    // SPICE LEVEL SELECTION
    // ===================================
    const spiceItems = document.querySelectorAll('.spice-item');
    
    spiceItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            spiceItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get spice level
            const spiceName = this.querySelector('.spice-name').textContent;
            
            // Show notification
            showNotification(`Đã chọn độ cay: ${spiceName}`);
        });
    });
    
    // Add active state styles
    const spiceStyle = document.createElement('style');
    spiceStyle.textContent = `
        .spice-item {
            cursor: pointer;
        }
        
        .spice-item.active {
            transform: scale(1.05);
            box-shadow: 0 4px 16px rgba(214, 178, 106, 0.4);
        }
        
        .spice-item.level-0.active {
            border-color: #4CAF50;
            box-shadow: 0 4px 16px rgba(76, 175, 80, 0.5);
        }
        
        .spice-item.level-1.active {
            border-color: #FFC107;
            box-shadow: 0 4px 16px rgba(255, 193, 7, 0.5);
        }
        
        .spice-item.level-2.active {
            border-color: #FF9800;
            box-shadow: 0 4px 16px rgba(255, 152, 0, 0.5);
        }
        
        .spice-item.level-3.active {
            border-color: #ff4d2d;
            box-shadow: 0 4px 16px rgba(255, 77, 45, 0.5);
        }
    `;
    document.head.appendChild(spiceStyle);
    
    
    // ===================================
    // ORDER BUTTON HANDLERS
    // ===================================
    const orderButtons = document.querySelectorAll('.btn-primary, .btn-grab, .btn-shopee');
    
    orderButtons.forEach(button => {
        if (button.href && !button.href.includes('tel:')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const buttonText = this.textContent.trim();
                
                if (buttonText.includes('GRAB')) {
                    showNotification('Đang chuyển đến GrabFood... 🛵');
                    // In production, redirect to GrabFood link
                    // window.location.href = 'YOUR_GRABFOOD_LINK';
                } else if (buttonText.includes('SHOPEE')) {
                    showNotification('Đang chuyển đến ShopeeFood... 🛒');
                    // In production, redirect to ShopeeFood link
                    // window.location.href = 'YOUR_SHOPEEFOOD_LINK';
                } else {
                    showNotification('Đang chuẩn bị đơn hàng của bạn... 🍗');
                }
            });
        }
    });
    
    
    // ===================================
    // PRELOAD ANIMATIONS
    // ===================================
    // Ensure hero animations play on load
    const heroElements = document.querySelectorAll('.hero-section .animate-fade-in, .hero-section .animate-slide-up');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    
    // ===================================
    // TOPPING SELECTION
    // ===================================
    const toppingOptions = document.querySelectorAll('.topping-option');
    
    toppingOptions.forEach(option => {
        option.style.cursor = 'pointer';
        option.style.transition = 'all 0.2s ease';
        
        option.addEventListener('click', function() {
            // Toggle active state
            this.classList.toggle('topping-selected');
            
            const toppingItem = this.closest('.topping-item');
            const toppingName = toppingItem.querySelector('.topping-name').textContent;
            const price = this.textContent;
            
            if (this.classList.contains('topping-selected')) {
                showNotification(`Đã chọn ${toppingName} - ${price}`);
            } else {
                showNotification(`Đã bỏ chọn ${toppingName}`);
            }
        });
    });
    
    // Add topping selection styles
    const toppingStyle = document.createElement('style');
    toppingStyle.textContent = `
        .topping-option:hover {
            transform: scale(1.1);
            background: #d6b26a;
            color: #0b0b0b;
        }
        
        .topping-option.topping-selected {
            background: #d6b26a;
            color: #0b0b0b;
            transform: scale(1.05);
            box-shadow: 0 2px 8px rgba(214, 178, 106, 0.4);
        }
    `;
    document.head.appendChild(toppingStyle);
    
    
    // ===================================
    // CONSOLE WELCOME MESSAGE
    // ===================================
    console.log('%c🍗 ĂN VẶT RIN RIN 🍗', 'font-size: 24px; font-weight: bold; color: #d4af37;');
    console.log('%cCay là ghiền - Ăn là mê!', 'font-size: 14px; color: #c41e3a;');
    console.log('%cWebsite được tối ưu cho mobile và desktop', 'font-size: 12px; color: #ffffff;');
    
});


// ===================================
// LUXURY PARTICLES EFFECT
// ===================================
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    canvas.style.opacity = '0.3';
    document.body.prepend(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = Math.random() > 0.5 ? 'rgba(212, 175, 55, 0.5)' : 'rgba(196, 30, 58, 0.3)';
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            
            // Add glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
        }
    }
    
    function init() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Connect particles
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(212, 175, 55, ${0.2 - distance / 500})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}


// ===================================
// LUXURY CURSOR TRAIL
// ===================================
function createCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    document.body.appendChild(cursor);
    
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .cursor-glow {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(212, 175, 55, 0.8), transparent);
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.15s ease;
            mix-blend-mode: screen;
        }
        
        .cursor-trail {
            position: fixed;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: rgba(196, 30, 58, 0.6);
            pointer-events: none;
            z-index: 9998;
            animation: fadeTrail 0.5s ease-out forwards;
        }
        
        @keyframes fadeTrail {
            to {
                opacity: 0;
                transform: scale(2);
            }
        }
    `;
    document.head.appendChild(cursorStyle);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create trail
        if (Math.random() > 0.8) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
            document.body.appendChild(trail);
            
            setTimeout(() => trail.remove(), 500);
        }
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        
        cursor.style.left = cursorX - 10 + 'px';
        cursor.style.top = cursorY - 10 + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

// Initialize cursor trail only on desktop
if (window.innerWidth > 768) {
    createCursorTrail();
}


// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Lazy load images if any are added later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}


// ===================================
// PREVENT ZOOM ON DOUBLE TAP (MOBILE)
// ===================================
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);


// ===================================
// ADD TO HOME SCREEN PROMPT (PWA)
// ===================================
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    // Show install button or notification
    console.log('App can be installed');
});
