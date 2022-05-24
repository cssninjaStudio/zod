import ApexCharts from "apexcharts";
import { themeColors } from "../../utils/constants";

export function initApexSupportBarChart() {
  const apexSupportBarChart = document.getElementById("supportBar");

  if (
    typeof apexSupportBarChart != "undefined" &&
    apexSupportBarChart != null
  ) {
    const apexSupportBarChartOptions = {
      series: [
        {
          name: "Open Tickets",
          data: [38, 112, 59, 73],
        },
      ],
      chart: {
        height: 215,
        type: "bar",
        toolbar: {
          show: false,
        },
      },

      plotOptions: {
        bar: {
          startingShape: "rounded",
          endingShape: "rounded",
          borderRadius: 5,
          columnWidth: "15%",
          colors: {
            backgroundBarRadius: 100,
          },
          dataLabels: {
            position: "bottom", // top, center, bottom
          },
        },
      },
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val + "%";
        },
        //offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      xaxis: {
        categories: ["Email", "Phone", "Twitter", "Facebook"],
        position: "top",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "Tickets";
          },
        },
      },
      colors: [themeColors.primary],
    };

    const apexSupportBarChartInstance = new ApexCharts(
      apexSupportBarChart,
      apexSupportBarChartOptions
    );

    apexSupportBarChartInstance.render();
  }
}
