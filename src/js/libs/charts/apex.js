import { initApexAreaChart } from "./area/apexAreaChart";
import { initApexLineChart } from "./line/apexLineChart";
import { initApexSingleLineChart } from "./line/apexSingleLineChart";
import { initApexStepLineChart } from "./step/apexStepLineChart";
import { initApexBarChart } from "./bar/apexBarChart";
import { initApexBarMultipleChart } from "./bar/apexBarMultipleChart";
import { initApexBarStackedChart } from "./bar/apexBarStackedChart";
import { initApexBarColumnChart } from "./bar/apexBarColumnChart";
import { initApexBarHorizontalChart } from "./bar/apexBarHorizontalChart";
import { initApexBarHorizontalMultipleChart } from "./bar/apexBarHorizontalMultipleChart";
import { initApexTimelineChart } from "./timeline/apexTimelineChart";
import { initApexBubbleChart } from "./bubble/apexBubbleChart";
import { initApexScatterChart } from "./scatter/apexScatterChart";
import { initApexPieChart } from "./pie/apexPieChart";
import { initApexDonutChart } from "./donut/apexDonutChart";
import { initApexRadialChart } from "./radial/apexRadialChart";
import { initApexRadialMultipleChart } from "./radial/apexRadialMultipleChart";
import { initApexRadialGaugeChart } from "./radial/apexRadialGaugeChart";
import { initApexRadarChart } from "./radar/apexRadarChart";
import { initApexGaugeChart } from "./gauge/apexGaugeChart";

export function initApexCharts() {
  return {
    areaChart: initApexAreaChart(),
    lineChart: initApexLineChart(),
    singleLineChart: initApexSingleLineChart(),
    stepLineChart: initApexStepLineChart(),
    barChart: initApexBarChart(),
    barMultipleChart: initApexBarMultipleChart(),
    barStackedChart: initApexBarStackedChart(),
    barColumnChart: initApexBarColumnChart(),
    barHorizontalChart: initApexBarHorizontalChart(),
    barHorizontalMultipleChart: initApexBarHorizontalMultipleChart(),
    timelineChart: initApexTimelineChart(),
    bubbleChart: initApexBubbleChart(),
    scatterChart: initApexScatterChart(),
    pieChart: initApexPieChart(),
    donutChart: initApexDonutChart(),
    radialChart: initApexRadialChart(),
    radialMultipleChart: initApexRadialMultipleChart(),
    radialGaugeChart: initApexRadialGaugeChart(),
    radarChart: initApexRadarChart(),
    gaugeChart: initApexGaugeChart(),
  };
}
