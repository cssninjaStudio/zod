import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexDonutChart() {
  const apexDonutChart = document.getElementById("apexDonutChart");

  if (typeof apexDonutChart != "undefined" && apexDonutChart != null) {
    const apexDonutChartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        width: 355,
        type: "donut",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      colors: [
        themeColors.primary,
        themeColors.secondary,
        themeColors.success,
        themeColors.orange,
        themeColors.purple,
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 280,
              toolbar: {
                show: false,
              },
            },
            legend: {
              position: "top",
            },
          },
        },
      ],
      legend: {
        show: false,
        position: "right",
        horizontalAlign: "center",
      },
    };

    const apexDonutChartInstance = new ApexCharts(
      apexDonutChart,
      apexDonutChartOptions
    );

    apexDonutChartInstance.render();
  }
}
