import { initECommerceLineChart } from '../../charts/ecommerce/line-chart';
import { initECommerceDonutChart } from '../../charts/ecommerce/donut-chart';

export function initCommerceDashboard() {
  return {
    initDashboardTiles() {
      const bars = document.querySelectorAll(".animated-bar");
      setTimeout(() => {
        for (let i = 0; i < bars.length; i++) {
          const height = parseInt(bars[i].getAttribute("data-percent"));
          bars[i].style.height = height + "%";
          if (height < 50) {
            bars[i].classList.add("is-lower");
          }
        }
      }, 1200);
    },
    initCustomBars() {
      const bars = document.querySelectorAll(".animated-bar");
      setTimeout(() => {
        for (let i = 0; i < bars.length; i++) {
          const height = parseInt(bars[i].getAttribute("data-percent"));
          bars[i].style.height = height + "%";
          if (height < 50) {
            bars[i].classList.add("is-lower");
          }
        }
      }, 1200);
    },
    lineChart: initECommerceLineChart(),
    donutChart: initECommerceDonutChart(),
  }
}