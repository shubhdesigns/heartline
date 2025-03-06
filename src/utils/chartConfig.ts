import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Real-time ECG Analysis',
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: true,
      min: -2.5,
      max: 2.5,
    },
  },
  animation: {
    duration: 0,
  },
}; 