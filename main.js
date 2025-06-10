document.addEventListener('DOMContentLoaded', function() {
  // MENU MOBILE
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    // Ferme menu mobile après clic sur un lien
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // SCROLL DOUX ANCRE
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header').offsetHeight || 0;
          window.scrollTo({
            top: targetEl.getBoundingClientRect().top + window.pageYOffset - headerHeight,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // FAQ INTERACTIVE
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = btn.parentElement;
      item.classList.toggle('open');
      // Fermer les autres
      document.querySelectorAll('.faq-item').forEach(other => {
        if (other !== item) other.classList.remove('open');
      });
    });
  });

  // FORMULAIRE : Message confirmation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert("Merci ! Votre message a bien été envoyé. Nous vous répondrons rapidement.");
      contactForm.reset();
    });
  }

  // Apparition animée des sections au scroll (mobile + desktop)
  const animatedSections = document.querySelectorAll('.section-animate');
  function onScrollAnimate() {
    animatedSections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 70) {
        sec.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', onScrollAnimate);
  window.addEventListener('resize', onScrollAnimate);
  onScrollAnimate();
});