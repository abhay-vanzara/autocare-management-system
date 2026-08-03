import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StatsChart({
  customers,
  vehicles,
  pending,
  completed,
}) {

  const data = {
    labels: [
      "Customers",
      "Vehicles",
      "Pending",
      "Completed",
    ],

    datasets: [
      {
        label: "Workshop Statistics",

        data: [
          customers,
          vehicles,
          pending,
          completed,
        ],

        backgroundColor: [
          "#0d6efd",
          "#198754",
          "#fd7e14",
          "#6f42c1",
        ],

        borderRadius:8,
      },
    ],
  };

  const options = {

    responsive:true,

    plugins:{
      legend:{
        display:false,
      },
    },

  };

  return <Bar data={data} options={options} />;
}

export default StatsChart;