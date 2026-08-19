// RTL / LTR Direction Manager
(function () {
  const currentDir = localStorage.getItem('sh_dir') || 'ltr';
  document.documentElement.setAttribute('dir', currentDir);

  window.toggleRTL = function () {
    const newDir = document.documentElement.getAttribute('dir') === 'rtl' ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    localStorage.setItem('sh_dir', newDir);
    if (window.showToast) {
      window.showToast(`Layout orientation set to ${newDir.toUpperCase()}`, 'info');
    }
  };
})();
