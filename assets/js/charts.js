// Chart.js Graph Initialization for Admin Dashboard
document.addEventListener('DOMContentLoaded', () => {
  const salesCtx = document.getElementById('salesChart');
  if (salesCtx && typeof Chart !== 'undefined') {
    new Chart(salesCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Revenue ($)',
          data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 36000],
          borderColor: '#dc2626',
          backgroundColor: 'rgba(220, 38, 38, 0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }

  const catCtx = document.getElementById('categoryChart');
  if (catCtx && typeof Chart !== 'undefined') {
    new Chart(catCtx, {
      type: 'doughnut',
      data: {
        labels: ['Cricket', 'Football', 'Basketball', 'Tennis', 'Others'],
        datasets: [{
          data: [45, 20, 15, 12, 8],
          backgroundColor: ['#dc2626', '#f97316', '#2563eb', '#10b981', '#64748b']
        }]
      },
      options: {
        responsive: true
      }
    });
  }
});
