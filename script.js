// ===== CURSOR GLOW =====
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.classList.add('active');
});

document.addEventListener('mouseleave', () => {
    cursorGlow.classList.remove('active');
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
}
animateGlow();

// ===== NAV SCROLL =====
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== MOBILE NAV =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// ===== REVEAL ON SCROLL =====
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, parseInt(delay));
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== PARALLAX TILT ON MOCKUPS =====
const browserMockup = document.querySelector('.browser-mockup');
const phoneMockup = document.querySelector('.phone-mockup');

if (browserMockup && phoneMockup) {
    const solutionSection = document.querySelector('.solution-visual');

    solutionSection.addEventListener('mousemove', (e) => {
        const rect = solutionSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        browserMockup.style.transform = `
            perspective(1000px)
            rotateY(${x * 5}deg)
            rotateX(${-y * 5}deg)
            translateY(-8px)
        `;

        phoneMockup.style.transform = `
            perspective(1000px)
            rotateY(${x * 8}deg)
            rotateX(${-y * 8}deg)
            translateY(-8px)
        `;
    });

    solutionSection.addEventListener('mouseleave', () => {
        browserMockup.style.transform = '';
        phoneMockup.style.transform = '';
    });
}

// ===== COUNTER ANIMATION FOR PRICING =====
const priceAmounts = document.querySelectorAll('.price-amount');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.textContent);
            animateCounter(entry.target, 0, target, 1200);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

function animateCounter(el, start, end, duration) {
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease out quart
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (end - start) * eased);

        el.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

priceAmounts.forEach(el => counterObserver.observe(el));

// ===== MAGNETIC BUTTON EFFECT =====
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-2px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
    });
});

// ===== TEXT SPLIT ANIMATION FOR HERO =====
window.addEventListener('load', () => {
    // Trigger hero reveals with staggered timing
    const heroReveals = document.querySelectorAll('.hero .reveal');
    heroReveals.forEach((el, i) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 200 + i * 150);
    });
});

// ===== COOKIE CONSENT (GDPR) =====
const CookieConsent = {
    banner: document.getElementById('cookieBanner'),
    prefsPanel: document.getElementById('cookiePreferences'),
    analyticsToggle: document.getElementById('cookieAnalytics'),
    marketingToggle: document.getElementById('cookieMarketing'),

    init() {
        if (!this.banner) return;

        const consent = this.getConsent();
        if (!consent) {
            // No consent yet — show banner after a short delay
            setTimeout(() => {
                this.banner.classList.add('visible');
            }, 1500);
        } else {
            // Consent exists — apply saved preferences
            this.applyConsent(consent);
        }

        this.bindEvents();
    },

    bindEvents() {
        const acceptBtn = document.getElementById('cookieAccept');
        const rejectBtn = document.getElementById('cookieReject');
        const customizeBtn = document.getElementById('cookieCustomize');
        const savePrefsBtn = document.getElementById('cookieSavePrefs');
        const openSettings = document.getElementById('openCookieSettings');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => {
                this.saveConsent({ technical: true, analytics: true, marketing: true });
                this.hideBanner();
            });
        }

        if (rejectBtn) {
            rejectBtn.addEventListener('click', () => {
                this.saveConsent({ technical: true, analytics: false, marketing: false });
                this.hideBanner();
            });
        }

        if (customizeBtn) {
            customizeBtn.addEventListener('click', () => {
                this.prefsPanel.classList.toggle('open');
            });
        }

        if (savePrefsBtn) {
            savePrefsBtn.addEventListener('click', () => {
                const prefs = {
                    technical: true,
                    analytics: this.analyticsToggle ? this.analyticsToggle.checked : false,
                    marketing: this.marketingToggle ? this.marketingToggle.checked : false
                };
                this.saveConsent(prefs);
                this.hideBanner();
            });
        }

        if (openSettings) {
            openSettings.addEventListener('click', (e) => {
                e.preventDefault();
                const consent = this.getConsent();
                if (consent && this.analyticsToggle) {
                    this.analyticsToggle.checked = consent.analytics;
                }
                if (consent && this.marketingToggle) {
                    this.marketingToggle.checked = consent.marketing;
                }
                if (this.prefsPanel) {
                    this.prefsPanel.classList.add('open');
                }
                this.banner.classList.add('visible');
            });
        }
    },

    saveConsent(prefs) {
        const consent = {
            ...prefs,
            timestamp: new Date().toISOString(),
            version: '1.0'
        };
        localStorage.setItem('cookie_consent', JSON.stringify(consent));
        // Also set a simple cookie for server-side detection
        const maxAge = 365 * 24 * 60 * 60; // 1 year
        document.cookie = `cookie_consent=${encodeURIComponent(JSON.stringify(consent))}; max-age=${maxAge}; path=/; SameSite=Lax`;
        this.applyConsent(consent);
    },

    getConsent() {
        const stored = localStorage.getItem('cookie_consent');
        if (stored) {
            try {
                return JSON.parse(stored);
            } catch {
                return null;
            }
        }
        return null;
    },

    applyConsent(consent) {
        if (consent.analytics) {
            this.loadAnalytics();
        } else {
            this.removeAnalytics();
        }

        if (consent.marketing) {
            this.loadMarketing();
        } else {
            this.removeMarketing();
        }
    },

    loadAnalytics() {
        // Placeholder: Replace with your actual Google Analytics ID
        // Uncomment and add your GA4 Measurement ID when ready
        /*
        if (document.getElementById('ga-script')) return;
        const script = document.createElement('script');
        script.id = 'ga-script';
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
        */
    },

    removeAnalytics() {
        // Remove GA cookies
        document.cookie = '_ga=; Max-Age=0; path=/; domain=.' + window.location.hostname;
        document.cookie = '_ga_*=; Max-Age=0; path=/; domain=.' + window.location.hostname;
    },

    loadMarketing() {
        // Placeholder: Replace with your actual Facebook Pixel ID
        // Uncomment when ready
        /*
        if (window.fbq) return;
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
        document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'XXXXXXXXXXXXXXXXX');
        fbq('track', 'PageView');
        */
    },

    removeMarketing() {
        document.cookie = '_fbp=; Max-Age=0; path=/; domain=.' + window.location.hostname;
    },

    hideBanner() {
        this.banner.classList.remove('visible');
        if (this.prefsPanel) {
            this.prefsPanel.classList.remove('open');
        }
    }
};

CookieConsent.init();

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach((openItem) => {
            if (openItem !== item) openItem.classList.remove('open');
        });
        item.classList.toggle('open', !isOpen);
    });
});
