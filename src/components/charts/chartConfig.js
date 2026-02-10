export const getChartOptions = () => ({
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        padding: 15,
        font: {
          size: 12,
          weight: "bold",
        },
        generateLabels: (chart) => {
          const { data } = chart;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label, i) => ({
              text: label,
              fillStyle: data.datasets[0].backgroundColor[i],
              hidden: false,
              index: i,
            }));
          }
          return [];
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || "";
          const value = context.parsed;
          const total = context.dataset.data.reduce((a, b) => a + b, 0);
          const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
          return `${label}: ${value} posts (${percentage}%)`;
        },
      },
    },
  },
});
