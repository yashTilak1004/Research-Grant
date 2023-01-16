const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: '# of Projects funded',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx_2 = document.getElementById('myChartPie');
new Chart(ctx_2, {
    type: 'pie',
    data: {
      labels: ['2017', '2018', '2019', '2020', '2021', '2022'],
      datasets: [{
        label: '# of Projects funded',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });