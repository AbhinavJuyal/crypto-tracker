import React from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import "./CandleGraph.css";
import useGlobal from "../context/GlobalContext";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const CanvasJS = CanvasJSReact.CanvasJS;

function CandleGraph() {
  let { graphValues, graphTitle } = useGlobal();
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
  const chartTitle = graphTitle;
  const chartWidth = 1046;
  const options = {
    width: chartWidth,
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
      valueFormatString: "MMM DD",
      interval: 1,
      intervalType: "day",
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
        xValueFormatString: "MMM DD",
        dataPoints: graphValues,
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
