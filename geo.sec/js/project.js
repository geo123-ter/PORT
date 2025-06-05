document.addEventListener('DOMContentLoaded', () => {
  // Fade in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 100);
  });

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) scrollBtn.classList.add('show');
    else scrollBtn.classList.remove('show');
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
