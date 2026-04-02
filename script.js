/* ============================================
   CLIENT STARTER TEMPLATE — ELFENNIR
   All content is populated from site.config.js
   ============================================ */

(function () {
  'use strict';

  // Wait for DOM
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    applyColors();
    populateContent();
    setupNavbar();
    setupMobileMenu();
    setupScrollAnimations();
    setupContactForm();
    setupCookieConsent();
  }

  /* ==================== APPLY COLORS ==================== */
  function applyColors() {
    const c = SITE.colors;
    const root = document.documentElement.style;
    if (c.primary)   root.setProperty('--primary', c.primary);
    if (c.secondary) root.setProperty('--secondary', c.secondary);
    if (c.accent)    root.setProperty('--accent', c.accent);
    if (c.bg)        root.setProperty('--bg', c.bg);
    if (c.bgAlt)     root.setProperty('--bg-alt', c.bgAlt);
    if (c.text)      root.setProperty('--text', c.text);
    if (c.textLight) root.setProperty('--text-light', c.textLight);
  }

  /* ==================== POPULATE CONTENT ==================== */
  function populateContent() {
    // Nav
    setText('nav-logo', SITE.name);

    // Hero
    const hero = document.getElementById('hero');
    if (hero && SITE.hero.heroImage) {
      hero.style.backgroundImage = `url('${SITE.hero.heroImage}')`;
    }
    setText('hero-title', SITE.hero.headline);
    setText('hero-subtitle', SITE.hero.subheadline);
    setText('hero-cta', SITE.hero.ctaText);
    const ctaEl = document.getElementById('hero-cta');
    if (ctaEl) ctaEl.href = SITE.hero.ctaLink;

    // Services
    setText('services-title', SITE.servicesTitle);
    setText('services-subtitle', SITE.servicesSubtitle);
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
      servicesGrid.innerHTML = SITE.services.map((s, i) => `
        <div class="service-card" style="transition-delay: ${i * 0.1}s">
          <div class="service-icon">
            <i class="fa-solid fa-${s.icon}"></i>
          </div>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.description)}</p>
        </div>
      `).join('');
    }

    // About
    setText('about-title', SITE.about.title);
    setText('about-text', SITE.about.text);
    const aboutImg = document.getElementById('about-image');
    if (aboutImg && SITE.about.image) aboutImg.src = SITE.about.image;

    const aboutStats = document.getElementById('about-stats');
    if (aboutStats && SITE.about.stats) {
      aboutStats.innerHTML = SITE.about.stats.map(s => `
        <div class="stat-item">
          <span class="stat-number">${esc(s.number)}</span>
          <span class="stat-label">${esc(s.label)}</span>
        </div>
      `).join('');
    }

    // Reviews
    setText('reviews-title', SITE.reviewsTitle);
    setText('reviews-subtitle', SITE.reviewsSubtitle);
    const reviewsGrid = document.getElementById('reviews-grid');
    if (reviewsGrid) {
      reviewsGrid.innerHTML = SITE.reviews.map((r, i) => `
        <div class="review-card" style="transition-delay: ${i * 0.1}s">
          <div class="review-stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(r.rating)}
            ${'<i class="fa-regular fa-star"></i>'.repeat(5 - r.rating)}
          </div>
          <p class="review-text">"${esc(r.text)}"</p>
          <div class="review-author">
            <div class="review-avatar">${esc(r.name.charAt(0))}</div>
            <div>
              <div class="review-name">${esc(r.name)}</div>
              <div class="review-role">${esc(r.role)}</div>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Contact info
    setText('contact-title', SITE.contactForm.title);
    setText('contact-subtitle', SITE.contactForm.subtitle);
    setText('contact-address', SITE.address);
    setTextAndHref('contact-phone', SITE.phone, 'tel:' + SITE.phone.replace(/\s/g, ''));
    setTextAndHref('contact-email', SITE.email, 'mailto:' + SITE.email);
    setText('contact-hours', SITE.hours);

    // Form placeholders
    setAttr('form-name', 'placeholder', SITE.contactForm.namePlaceholder);
    setAttr('form-email', 'placeholder', SITE.contactForm.emailPlaceholder);
    setAttr('form-phone', 'placeholder', SITE.contactForm.phonePlaceholder);
    setAttr('form-message', 'placeholder', SITE.contactForm.messagePlaceholder);
    setText('form-submit', SITE.contactForm.sendButton);
    // Re-add icon to submit button
    const submitBtn = document.getElementById('form-submit');
    if (submitBtn) {
      submitBtn.innerHTML = `<span>${esc(SITE.contactForm.sendButton)}</span><i class="fa-solid fa-paper-plane"></i>`;
    }

    // Map
    const mapIframe = document.getElementById('map-iframe');
    if (mapIframe && SITE.mapEmbed) mapIframe.src = SITE.mapEmbed;

    // WhatsApp
    const waBtn = document.getElementById('whatsapp-btn');
    if (waBtn && SITE.whatsapp) {
      waBtn.href = 'https://wa.me/' + SITE.whatsapp;
    }

    // Footer
    setText('footer-name', SITE.name);
    setText('footer-desc', SITE.tagline);
    const footerAddress = document.getElementById('footer-address');
    if (footerAddress) footerAddress.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${esc(SITE.address)}`;
    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone) footerPhone.innerHTML = `<i class="fa-solid fa-phone"></i> ${esc(SITE.phone)}`;
    const footerEmail = document.getElementById('footer-email');
    if (footerEmail) footerEmail.innerHTML = `<i class="fa-solid fa-envelope"></i> ${esc(SITE.email)}`;
    const footerHours = document.getElementById('footer-hours');
    if (footerHours) footerHours.innerHTML = `<i class="fa-solid fa-clock"></i> ${esc(SITE.hours)}`;

    setText('footer-year', new Date().getFullYear().toString());
    setText('footer-copyright-name', SITE.name);

    // Social links
    const socialContainer = document.getElementById('footer-social');
    if (socialContainer) {
      const iconMap = {
        instagram: 'fa-instagram',
        facebook:  'fa-facebook-f',
        linkedin:  'fa-linkedin-in',
        tiktok:    'fa-tiktok',
        youtube:   'fa-youtube'
      };
      let socialHTML = '';
      for (const [platform, url] of Object.entries(SITE.social)) {
        if (url) {
          socialHTML += `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${platform}"><i class="fa-brands ${iconMap[platform] || ''}"></i></a>`;
        }
      }
      socialContainer.innerHTML = socialHTML;
    }

    // Cookie text
    setText('cookie-text', SITE.cookieText);
    setText('cookie-accept', SITE.cookieButton);

    // Page title
    document.title = `${SITE.name} — ${SITE.hero.headline}`;
  }

  /* ==================== NAVBAR ==================== */
  function setupNavbar() {
    const navbar = document.getElementById('navbar');
    let ticking = false;

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
          // Close mobile menu if open
          closeMobileMenu();
        }
      });
    });
  }

  /* ==================== MOBILE MENU ==================== */
  function setupMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
      overlay.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    overlay.addEventListener('click', closeMobileMenu);
  }

  function closeMobileMenu() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.nav-overlay');
    if (toggle) toggle.classList.remove('active');
    if (menu) menu.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==================== SCROLL ANIMATIONS ==================== */
  function setupScrollAnimations() {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    // Observe section-level elements
    document.querySelectorAll('.animate-on-scroll').forEach(function (el) {
      observer.observe(el);
    });

    // Observe cards with stagger
    document.querySelectorAll('.service-card, .review-card').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ==================== CONTACT FORM ==================== */
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    // Initialize EmailJS if keys are configured
    if (SITE.emailjs.publicKey && SITE.emailjs.publicKey !== 'YOUR_PUBLIC_KEY') {
      if (typeof emailjs !== 'undefined') {
        emailjs.init(SITE.emailjs.publicKey);
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = document.getElementById('form-submit');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Lähetetään...</span><i class="fa-solid fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;

      // Gather form data
      const formData = {
        name:    document.getElementById('form-name').value,
        email:   document.getElementById('form-email').value,
        phone:   document.getElementById('form-phone').value,
        message: document.getElementById('form-message').value
      };

      // If EmailJS is configured, send via EmailJS
      if (SITE.emailjs.serviceId && SITE.emailjs.serviceId !== 'YOUR_SERVICE_ID' && typeof emailjs !== 'undefined') {
        emailjs.send(SITE.emailjs.serviceId, SITE.emailjs.templateId, formData)
          .then(function () {
            showFeedback('success', SITE.contactForm.successMessage);
            form.reset();
          })
          .catch(function () {
            showFeedback('error', SITE.contactForm.errorMessage);
          })
          .finally(function () {
            submitBtn.innerHTML = originalHTML;
            submitBtn.disabled = false;
          });
      } else {
        // Demo mode: simulate success after short delay
        setTimeout(function () {
          showFeedback('success', SITE.contactForm.successMessage);
          form.reset();
          submitBtn.innerHTML = originalHTML;
          submitBtn.disabled = false;
        }, 1000);
      }
    });

    function showFeedback(type, message) {
      feedback.className = 'form-feedback ' + type;
      feedback.textContent = message;
      setTimeout(function () {
        feedback.className = 'form-feedback';
        feedback.style.display = 'none';
      }, 6000);
    }
  }

  /* ==================== COOKIE CONSENT ==================== */
  function setupCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');

    // Check if already accepted
    if (localStorage.getItem('cookies_accepted')) {
      banner.style.display = 'none';
      loadAnalytics();
      return;
    }

    // Show banner after short delay
    setTimeout(function () {
      banner.classList.add('show');
    }, 1500);

    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('cookies_accepted', 'true');
      banner.classList.remove('show');
      setTimeout(function () {
        banner.style.display = 'none';
      }, 400);
      loadAnalytics();
    });
  }

  /* ==================== GOOGLE ANALYTICS ==================== */
  function loadAnalytics() {
    if (!SITE.analytics || SITE.analytics === 'G-XXXXXXXXXX') return;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + SITE.analytics;
    document.head.appendChild(script);

    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', SITE.analytics);
    };
  }

  /* ==================== HELPERS ==================== */
  function setText(id, text) {
    var el = document.getElementById(id);
    if (el && text) el.textContent = text;
  }

  function setTextAndHref(id, text, href) {
    var el = document.getElementById(id);
    if (el) {
      el.textContent = text;
      if (href) el.href = href;
    }
  }

  function setAttr(id, attr, value) {
    var el = document.getElementById(id);
    if (el && value) el.setAttribute(attr, value);
  }

  function esc(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

})();
