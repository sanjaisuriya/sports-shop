// Customer Dashboard Navigation & Functions
document.addEventListener('DOMContentLoaded', () => {
  const sidebarLinks = document.querySelectorAll('.dash-nav-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebarLinks.forEach(l => l.classList.remove('active', 'bg-red-600', 'text-white'));
      link.classList.add('active', 'bg-red-600', 'text-white');
    });
  });
});
