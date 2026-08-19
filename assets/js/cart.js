// SportsHub Cart Manager
(function () {
  window.SportsCart = {
    getCart: function () {
      return JSON.parse(localStorage.getItem('sh_cart') || '[]');
    },
    saveCart: function (cart) {
      localStorage.setItem('sh_cart', JSON.stringify(cart));
      this.updateBadges();
    },
    addItem: function (product, qty = 1) {
      let cart = this.getCart();
      const existing = cart.find(item => item.id === product.id);
      if (existing) {
        existing.qty += qty;
      } else {
        cart.push({ ...product, qty: qty });
      }
      this.saveCart(cart);
      if (window.showToast) {
        window.showToast(`Added ${product.name} to Cart!`, 'success');
      }
    },
    removeItem: function (id) {
      let cart = this.getCart().filter(item => item.id !== id);
      this.saveCart(cart);
      if (window.showToast) {
        window.showToast('Item removed from Cart.', 'info');
      }
      if (window.renderCartPage) window.renderCartPage();
    },
    updateQty: function (id, delta) {
      let cart = this.getCart();
      const item = cart.find(i => i.id === id);
      if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
          return this.removeItem(id);
        }
        this.saveCart(cart);
        if (window.renderCartPage) window.renderCartPage();
      }
    },
    updateBadges: function () {
      const cart = this.getCart();
      const totalCount = cart.reduce((sum, i) => sum + i.qty, 0);
      document.querySelectorAll('.sh-cart-count').forEach(el => {
        el.textContent = totalCount;
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.SportsCart.updateBadges();
  });
})();
