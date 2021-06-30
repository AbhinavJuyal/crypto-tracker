import { Line } from "react-chartjs-2";

function LineGraph() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: "#5bea59",
      },
    ],
  };

  const options = {
    layout: {
      padding: 10,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    hover: {
      intersect: false,
    },
    elements: {
      line: {
        tension: 0,
      },
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {},
    },
    scales: {
      xAxes: {
        ticks: false,
        grid: {
          display: false,
        },
      },
      yAxes: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

export default LineGraph;
