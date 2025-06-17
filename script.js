

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('show');
  }

  // To close menu when link is clicked (on mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('show');
    });
  });