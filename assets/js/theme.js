// Tailwind CDN Dark Mode Configuration
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sports: {
          primary: '#0f172a',
          accent: '#dc2626',
          secondary: '#f97316'
        }
      }
    }
  }
};

// SportsHub Unified Theme Manager (Dark / Light Mode)
(function () {
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Update theme toggle icon state
    document.querySelectorAll('.sh-theme-icon-sun').forEach(el => {
      el.classList.toggle('hidden', theme !== 'dark');
    });
    document.querySelectorAll('.sh-theme-icon-moon').forEach(el => {
      el.classList.toggle('hidden', theme === 'dark');
    });
    document.querySelectorAll('.sh-theme-text').forEach(el => {
      el.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });
  }

  const savedTheme = localStorage.getItem('sh_theme') || 'light';
  applyTheme(savedTheme);

  window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('sh_theme', next);
    applyTheme(next);
    if (window.showToast) {
      window.showToast(`Switched to ${next.toUpperCase()} Mode`, 'info');
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(localStorage.getItem('sh_theme') || 'light');
  });
})();
