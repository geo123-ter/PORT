// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Fade in elements with class .fade-in
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach(el => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100); // small delay for smooth fade
  });

  // Scroll to top button
  const scrollBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form submission
  const form = document.getElementById('contactFormElement');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation (already required in HTML, but double-check here)
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in all fields.';
      status.style.color = 'red';
      return;
    }

    // Fake submission delay
    status.textContent = 'Sending...';
    status.style.color = '#112d4e';

    setTimeout(() => {
      status.textContent = 'Thank you! Your message has been sent.';
      status.style.color = 'green';

      // Reset form
      form.reset();
    }, 1500);

    // TODO: Replace above with actual API call using fetch()
  });
});
