// SportsHub Wishlist Manager
(function () {
  window.SportsWishlist = {
    getWishlist: function () {
      return JSON.parse(localStorage.getItem('sh_wishlist') || '[]');
    },
    saveWishlist: function (list) {
      localStorage.setItem('sh_wishlist', JSON.stringify(list));
      this.updateBadges();
    },
    toggleItem: function (product) {
      let list = this.getWishlist();
      const index = list.findIndex(item => item.id === product.id);
      if (index > -1) {
        list.splice(index, 1);
        if (window.showToast) window.showToast(`Removed ${product.name} from Wishlist`, 'info');
      } else {
        list.push(product);
        if (window.showToast) window.showToast(`Added ${product.name} to Wishlist!`, 'success');
      }
      this.saveWishlist(list);
      if (window.renderWishlistPage) window.renderWishlistPage();
    },
    updateBadges: function () {
      const list = this.getWishlist();
      document.querySelectorAll('.sh-wishlist-count').forEach(el => {
        el.textContent = list.length;
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    window.SportsWishlist.updateBadges();
  });
})();
