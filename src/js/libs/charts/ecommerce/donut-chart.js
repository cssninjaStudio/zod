import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initECommerceDonutChart() {
  const apexDonutChart = document.getElementById("eCommerceDonutChart");

  if (typeof apexDonutChart != "undefined" && apexDonutChart != null) {
    const apexDonutChartOptions = {
      series: [44, 55, 41],
      chart: {
        width: 310,
        type: "donut",
      },
      labels: ["Facebook", "Advertising", "Website"],
      colors: [themeColors.blue, themeColors.secondary, themeColors.primary],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 280,
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
