document.addEventListener('DOMContentLoaded', () => {
  // Fade in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    setTimeout(() => el.classList.add('visible'), 100);
  });

  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    // Get width from inline style and animate width from 0 to that value
    const targetWidth = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 200);
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
