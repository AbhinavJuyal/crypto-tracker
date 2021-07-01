import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import "./CandleGraph.css";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CanvasJS = CanvasJSReact.CanvasJS;

function CandleGraph() {
  // CanvasJS.addColorSet("black-red", ["#26A69A", "#EF5350"]);
  // CanvasJS.addColorSet("white", ["#f2f2f2"]);
  CanvasJS.addColorSet("colorSet", [
    "#EF5350",
    "#2F4F4F",
    "#008080",
    "#FF0000",
    "#3CB371",
    "#90EE90",
  ]);
  const chartTitle = "Intel";
  // const chartWidth = 450;
  const options = {
    // width: chartWidth,
    theme: "dark2",
    colorSet: "colorSet",
    backgroundColor: "#222222",
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: chartTitle,
      fontColor: "#FFFFFF",
      fontSize: 12,
      fontFamily: "Raleway",
    },
    tooltip: {
      backgroundColor: "#000000",
      fontFamily: "Raleway",
      fontColor: "#FFFFFF",
    },
    axisX: {
      valueFormatString: "MMM",
      gridThickness: 0,
      tickThickness: 1,
      tickLength: 15,
      lineColor: "#FFFFFF",
      labelFontColor: "#FFFFFF",
    },
    axisY: {
      gridThickness: 0,
      tickThickness: 1,
      tickLength: 15,
      lineThickness: 0,
      lineColor: "#FFFFFF",
      labelFontColor: "#FFFFFF",
    },
    dataPointWidth: 8,
    data: [
      {
        type: "candlestick",
        showInLegend: false,
        fallingColor: "#EF5350",
        risingColor: "#26A69A",
        yValueFormatString: "$###0.00",
        xValueFormatString: "MMMM YY",
        dataPoints: [
          { x: new Date("2017-01-01"), y: [36.61, 38.45, 36.19, 36.82] },
          { x: new Date("2017-02-01"), y: [36.82, 36.95, 34.84, 36.2] },
          { x: new Date("2017-03-01"), y: [35.85, 36.3, 34.66, 36.07] },
          { x: new Date("2017-04-01"), y: [36.19, 37.5, 35.21, 36.15] },
          { x: new Date("2017-05-01"), y: [36.11, 37.17, 35.02, 36.11] },
          { x: new Date("2017-06-01"), y: [36.12, 36.57, 33.34, 33.74] },
          { x: new Date("2017-07-01"), y: [33.51, 35.86, 33.23, 35.47] },
          { x: new Date("2017-08-01"), y: [35.66, 36.7, 34.38, 35.07] },
          { x: new Date("2017-09-01"), y: [35.24, 38.15, 34.93, 38.08] },
          { x: new Date("2017-10-01"), y: [38.12, 45.8, 38.08, 45.49] },
          { x: new Date("2017-11-01"), y: [45.97, 47.3, 43.77, 44.84] },
          { x: new Date("2017-12-01"), y: [44.73, 47.64, 42.67, 46.16] },
        ],
      },
    ],
  };

  function changeBorderColor(options) {
    let dataSeries;
    for (let i = 0; i < options.data.length; i++) {
      dataSeries = options.data[i];
      for (let j = 0; j < dataSeries.dataPoints.length; j++) {
        dataSeries.dataPoints[j].color =
          dataSeries.dataPoints[j].y[0] <= dataSeries.dataPoints[j].y[3]
            ? dataSeries.risingColor
              ? dataSeries.risingColor
              : dataSeries.color
            : dataSeries.fallingColor
            ? dataSeries.fallingColor
            : dataSeries.color;
      }
    }
  }

  changeBorderColor(options);

  return (
    <>
      <CanvasJSChart options={options} />
    </>
  );
}

export default CandleGraph;
