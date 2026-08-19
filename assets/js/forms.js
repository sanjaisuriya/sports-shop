// Forms & Kit Customizer Handlers
document.addEventListener('DOMContentLoaded', () => {
  // Team Kit Live Customizer Listener
  const kitNameInput = document.getElementById('kitPlayerName');
  const kitNumberInput = document.getElementById('kitPlayerNumber');
  const kitColorSelect = document.getElementById('kitColorSelect');
  const kitDisplayPath = document.getElementById('kitJerseyPath');
  const kitDisplayName = document.getElementById('kitDisplayName');
  const kitDisplayNumber = document.getElementById('kitDisplayNumber');

  if (kitNameInput && kitDisplayName) {
    kitNameInput.addEventListener('input', (e) => {
      kitDisplayName.textContent = e.target.value.toUpperCase() || 'PLAYER';
    });
  }

  if (kitNumberInput && kitDisplayNumber) {
    kitNumberInput.addEventListener('input', (e) => {
      kitDisplayNumber.textContent = e.target.value || '10';
    });
  }

  if (kitColorSelect && kitDisplayPath) {
    kitColorSelect.addEventListener('change', (e) => {
      kitDisplayPath.setAttribute('fill', e.target.value);
    });
  }

  // Generic Form Handlers
  const forms = [
    { id: 'contactForm', msg: 'Your message has been sent successfully! Our sports team will contact you shortly.' },
    { id: 'bulkOrderForm', msg: 'Bulk enquiry submitted! A sales representative will send you a quotation within 24 hours.' },
    { id: 'teamKitForm', msg: 'Team Kit Customization Request Received! Check your email for proof mockup.' },
    { id: 'loginForm', redirect: 'customer/dashboard.html', msg: 'Login successful! Welcome back.' },
    { id: 'registerForm', redirect: 'login.html', msg: 'Account created successfully! Please sign in.' }
  ];

  forms.forEach(item => {
    const el = document.getElementById(item.id);
    if (el) {
      el.addEventListener('submit', (e) => {
        e.preventDefault();
        if (window.showToast) window.showToast(item.msg, 'success');
        if (item.redirect) {
          setTimeout(() => {
            window.location.href = item.redirect;
          }, 1200);
        } else {
          el.reset();
        }
      });
    }
  });
});
