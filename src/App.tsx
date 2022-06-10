import { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import "./App.scss";

import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { ChartData } from "./types";
import { Inputs } from "./components/Inputs/Inputs";
import { Radiobuttons } from "./components/Radiobuttons/Radiobuttons";

Chart.register(...registerables);

function App() {
  const [chartData, setCharData] = useState<ChartData>({
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "My income",
        data: [1, 2, 3, 4, 5],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgb(53, 162, 235, 0.4)",
      },
    ],
  });
  const [typeChart, setTypeChart] = useState("bar");
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "My income for the year",
          font: {
            size: 20,
          },
        },
      },
    });
  }, []);

  return (
    <div className="App">
      <h1 className="App__title">Enter your data:</h1>
      <Inputs setCharData={setCharData} />
      {typeChart === "bar" ? (
        <Bar data={chartData} options={chartOptions} />
      ) : (
        <Line
          data={{
            labels: chartData.labels,
            datasets: [
              {
                label: chartData.datasets[0].label,
                data: chartData.datasets[0].data,
                fill: false,
                borderColor: "rgb(75,192,192,1)",
                backgroundColor: "rgb(75,192,192,0.2)",
              },
            ],
          }}
          options={chartOptions}
        />
      )}
      <Radiobuttons typeChart={typeChart} setTypeChart={setTypeChart} />
    </div>
  );
}

export default App;
