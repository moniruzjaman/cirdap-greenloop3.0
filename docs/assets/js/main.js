// GreenLoop 3.0 - CIRDAP Competition Portal
// Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initVideoPlayer();
    initScrollAnimations();
    initParticles();
    initSmoothScroll();
    initProgressTracker();
    initKnowledgeMap();
});

// =============================================
// Navigation
// =============================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
    
    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// =============================================
// Video Player
// =============================================
function initVideoPlayer() {
    const video = document.getElementById('projectVideo');
    const playBtn = document.getElementById('playBtn');
    const overlay = document.getElementById('videoOverlay');
    
    if (playBtn && video && overlay) {
        playBtn.addEventListener('click', function() {
            video.play();
            overlay.classList.add('hidden');
        });
        
        video.addEventListener('pause', function() {
            overlay.classList.remove('hidden');
        });
        
        video.addEventListener('ended', function() {
            overlay.classList.remove('hidden');
        });
        
        // Click on video to toggle play/pause
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                overlay.classList.add('hidden');
            } else {
                video.pause();
            }
        });
    }
}

// =============================================
// Scroll Animations
// =============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.stat-card, .tech-card, .align-card, .resource-card, .demo-card, .team-card, .block-item'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Add animation class
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// =============================================
// Particles Effect
// =============================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;
    
    // Create additional floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// =============================================
// Smooth Scroll
// =============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// Progress Tracker (Gamified)
// =============================================
function initProgressTracker() {
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const checkpoints = document.querySelectorAll('.checkpoint');
    
    if (!progressFill || !progressPercent) return;
    
    const sections = ['home', 'knowledge-map', 'media-gallery', 'proposal', 'presentation', 'resources'];
    const visitedSections = new Set(['home']); // Home is visited by default
    
    // Update progress bar on scroll
    window.addEventListener('scroll', function() {
        // Calculate scroll progress
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = Math.min((scrolled / documentHeight) * 100, 100);
        
        progressFill.style.width = `${progress}%`;
        progressPercent.textContent = `${Math.round(progress)}%`;
        
        // Check which sections are visible
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5) {
                    visitedSections.add(sectionId);
                    
                    // Update checkpoint states
                    checkpoints.forEach(checkpoint => {
                        const checkpointSection = checkpoint.dataset.section;
                        if (visitedSections.has(checkpointSection)) {
                            checkpoint.classList.add('completed');
                        }
                        if (checkpointSection === sectionId) {
                            checkpoint.classList.add('active');
                        } else {
                            checkpoint.classList.remove('active');
                        }
                    });
                }
            }
        });
    });
    
    // Click on checkpoint to scroll to section
    checkpoints.forEach(checkpoint => {
        checkpoint.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            const section = document.getElementById(sectionId);
            if (section) {
                const offset = 150; // Account for navbar and progress tracker
                const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// Knowledge Map - Interactive Nodes
// =============================================
function initKnowledgeMap() {
    // Node data
    const nodeData = {
        'central': {
            icon: 'fa-seedling',
            title: 'GreenLoop 3.0 - গ্রীনলুপ',
            body: `<p>GreenLoop 3.0 is a revolutionary <strong>Efficiency-by-Design</strong> system combining physical circular farming with blockchain governance.</p>
                   <p>It addresses Bangladesh's critical agricultural challenges: <strong>arsenic contamination</strong>, <strong>post-harvest losses</strong>, and <strong>soil degradation</strong>.</p>`,
            stats: [
                { value: '$220B', label: 'Annual Savings' },
                { value: '100%', label: 'Circular' }
            ]
        },
        'sensor': {
            icon: 'fa-microchip',
            title: '12-Parameter Soil Sensor',
            body: `<p>A handheld device measuring <strong>NPK, SOM/SOC, pH, EC, moisture</strong> and micronutrients using ML estimation.</p>
                   <p>Farmers can make data-driven decisions without expensive lab tests.</p>`,
            stats: [
                { value: '+32%', label: 'Yield Increase' },
                { value: '-30%', label: 'Fertilizer Use' }
            ]
        },
        'arsenic': {
            icon: 'fa-water',
            title: 'Arsenic Shield (3F4D+MD)',
            body: `<p>Advanced protocol immobilizing arsenic through <strong>Iron Oxide re-precipitation</strong> in 61 affected districts.</p>
                   <p>Protects groundwater and ensures safe crop production.</p>`,
            stats: [
                { value: '-21%', label: 'Arsenic Level' },
                { value: '-57%', label: 'Water Usage' }
            ]
        },
        'solar': {
            icon: 'fa-solar-panel',
            title: 'Solar Cold Chain',
            body: `<p>10-ton hybrid mini cold storage with <strong>70% reduced operating costs</strong>.</p>
                   <p>Prevents post-harvest losses for fruits, vegetables, and dairy products.</p>`,
            stats: [
                { value: 'BCR 3.0', label: 'Benefit-Cost' },
                { value: '14.47%', label: 'IRR' }
            ]
        },
        'blockchain': {
            icon: 'fa-link',
            title: 'Hyperledger Blockchain',
            body: `<p>Immutable ledger ensuring <strong>data sovereignty</strong> and transparent supply chain tracking.</p>
                   <p>SHA-256 integrity linking between off-chain (PostgreSQL) and on-chain systems.</p>`,
            stats: [
                { value: '100%', label: 'Transparent' },
                { value: 'SHA-256', label: 'Security' }
            ]
        },
        'farmer': {
            icon: 'fa-users',
            title: 'কৃষক কার্ড (Farmer Card)',
            body: `<p>Digital identity card empowering <strong>10 million farmers</strong> with access to credit, inputs, and market information.</p>
                   <p>Special provisions for women farmers ensuring financial inclusion.</p>`,
            stats: [
                { value: '10M', label: 'Farmers' },
                { value: '50%', label: 'Women' }
            ]
        },
        'youth': {
            icon: 'fa-user-graduate',
            title: 'Youth Employment',
            body: `<p>Creating <strong>50,000 jobs</strong> for NEET youth as Digital Facilitators in Agro-Service Centres.</p>
                   <p>Skill development in IoT, blockchain, and sustainable agriculture.</p>`,
            stats: [
                { value: '50K', label: 'Jobs' },
                { value: '61', label: 'Districts' }
            ]
        }
    };
    
    // Store for global access
    window.knowledgeMapData = nodeData;
}

// Show node detail popup
function showNodeDetail(nodeId) {
    const popup = document.getElementById('nodeDetailPopup');
    const popupIcon = document.getElementById('popupIcon');
    const popupTitle = document.getElementById('popupTitle');
    const popupBody = document.getElementById('popupBody');
    const popupStats = document.getElementById('popupStats');
    
    const data = window.knowledgeMapData[nodeId];
    
    if (data) {
        popupIcon.innerHTML = `<i class="fas ${data.icon}"></i>`;
        popupTitle.textContent = data.title;
        popupBody.innerHTML = data.body;
        
        // Build stats
        popupStats.innerHTML = data.stats.map(stat => `
            <div class="popup-stat">
                <div class="stat-value">${stat.value}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
        
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close node detail popup
function closeNodeDetail() {
    const popup = document.getElementById('nodeDetailPopup');
    popup.classList.remove('active');
    document.body.style.overflow = '';
}

// Close popup on backdrop click
document.addEventListener('click', function(e) {
    const popup = document.getElementById('nodeDetailPopup');
    if (e.target === popup) {
        closeNodeDetail();
    }
});

// Close popup on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeNodeDetail();
    }
});

// =============================================
// Share Functions
// =============================================
async function shareVideo() {
    const shareData = {
        title: 'GreenLoop 3.0 - CIRDAP Innovation Challenge',
        text: 'Check out the GreenLoop 3.0 project video for CIRDAP Innovation Challenge 2026',
        url: window.location.href
    };
    
    try {
        if (navigator.share) {
            await navigator.share(shareData);
        } else {
            // Fallback: copy to clipboard
            await navigator.clipboard.writeText(window.location.href);
            showNotification('Link copied to clipboard!', 'success');
        }
    } catch (err) {
        console.log('Share cancelled');
    }
}

// =============================================
// Notification
// =============================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        background: ${type === 'success' ? '#006a4e' : '#005a9e'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);

// =============================================
// Counter Animation
// =============================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-value[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = `$${Math.floor(current)}B`;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = `$${target}B`;
            }
        };
        
        // Start animation when in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// Initialize counters
animateCounters();

// =============================================
// Console Welcome Message
// =============================================
console.log('%c🌿 GreenLoop 3.0', 'font-size: 24px; font-weight: bold; color: #006a4e;');
console.log('%cCIRDAP Innovation Challenge 2026', 'font-size: 14px; color: #005a9e;');
console.log('%cHealing the Earth, Securing the Smile', 'font-size: 12px; color: #666;');

// =============================================
// Media Gallery Functions
// =============================================

// Filter Media by Type
function filterMedia(type) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.filter-btn').classList.add('active');
    
    // Get all categories
    const categories = document.querySelectorAll('.media-category');
    
    if (type === 'all') {
        // Show all categories
        categories.forEach(category => {
            category.classList.remove('hidden');
        });
    } else {
        // Show/hide categories based on type
        categories.forEach(category => {
            const categoryType = category.dataset.category;
            if (categoryType === type) {
                category.classList.remove('hidden');
            } else {
                category.classList.add('hidden');
            }
        });
    }
}

// Open Image Modal
function openImageModal(imageSrc, title) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    
    if (modal && modalImage && modalTitle) {
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close Image Modal
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageModal();
        closeNodeDetail();
    }
});

// Initialize lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // Add animation to media cards
    const animateMediaCards = () => {
        const cards = document.querySelectorAll('.video-card, .presentation-card, .document-card, .image-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.5s ease';
            observer.observe(card);
        });
    };
    
    animateMediaCards();
});
