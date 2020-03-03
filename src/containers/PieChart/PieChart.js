import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

const PieChart = (props) => {
  return (
    <ReactMinimalPieChart
      animate={false}
      animationDuration={500}
      animationEasing="ease-out"
      data={props.data}
      cx={50}
      cy={50}
      label
      labelPosition={50}
      labelStyle={{
        fill: "#121212",
        fontFamily: "sans-serif",
        fontSize: "5px"
      }}
      lengthAngle={360}
      lineWidth={100}
      onClick={undefined}
      onMouseOut={undefined}
      onMouseOver={undefined}
      paddingAngle={0}
      radius={50}
      rounded={false}
      startAngle={0}
      viewBoxSize={[100, 100]}
      style={{
        height: "365px"
      }}
    />
  );
};

export default PieChart;
