import { initBillboardLineChart } from "./line/billboardLineChart";
import { initBillboardLineRegionsChart } from "./line/billboardLineRegionsChart";
import { initBillboardAreaChart } from "./area/billboardAreaChart";
import { initBillboardAreaRangeChart } from "./area/billboardAreaRangeChart";
import { initBillboardBarChart } from "./bar/billboardBarChart";
import { initBillboardBarStackedChart } from "./bar/billboardBarStackedChart";
import { initBillboardStepChart } from "./step/billboardStepChart";
import { initBillboardSplineChart } from "./spline/billboardSplineChart";
import { initBillboardBubbleChart } from "./bubble/billboardBubbleChart";
import { initBillboardScatterChart } from "./scatter/billboardScatterChart";
import { initBillboardPieChart } from "./pie/billboardPieChart";
import { initBillboardDonutChart } from "./donut/billboardDonutChart";
import { initBillboardGaugeChart } from "./gauge/billboardGaugeChart";
import { initBillboardRadarChart } from "./radar/billboardRadarChart";

export function initBillboardCharts() {
  return {
    lineChart: initBillboardLineChart(),
    lineRegionsChart: initBillboardLineRegionsChart(),
    areaChart: initBillboardAreaChart(),
    areaRangeChart: initBillboardAreaRangeChart(),
    barChart: initBillboardBarChart(),
    barStackedChart: initBillboardBarStackedChart(),
    stepChart: initBillboardStepChart(),
    splineChart: initBillboardSplineChart(),
    bubbleChart: initBillboardBubbleChart(),
    scatterChart: initBillboardScatterChart(),
    pieChart: initBillboardPieChart(),
    donutChart: initBillboardDonutChart(),
    gaugeChart: initBillboardGaugeChart(),
    radarChart: initBillboardRadarChart(),
  };
}
