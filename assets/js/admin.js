// Admin Portal Helper Functions
window.deleteAdminItem = function (type, id) {
  if (confirm(`Are you sure you want to delete this ${type} (#${id})?`)) {
    if (window.showToast) window.showToast(`${type} #${id} deleted successfully.`, 'info');
    const row = document.getElementById(`${type}-${id}`);
    if (row) row.remove();
  }
};

window.updateOrderStatus = function (orderId, newStatus) {
  if (window.showToast) window.showToast(`Order #${orderId} status updated to ${newStatus}.`, 'success');
};
