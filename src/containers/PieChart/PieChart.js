import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

const PieChart = () => {
  return (
    <ReactMinimalPieChart
      animate={true}
      animationDuration={500}
      animationEasing="ease-out"
      cx={50}
      cy={50}
      data={[
        {
          color: "#29d9c2",
          title: "One",
          value: 50
        },
        {
          color: "#00a2a7",
          title: "Two",
          value: 15
        }
      ]}
      label={true}
      labelStyle={{
        fill: "white",
        fontSize: "12px"
      }}
      labelPosition={50}
      lengthAngle={360}
      lineWidth={15}
      onClick={undefined}
      onMouseOut={undefined}
      onMouseOver={undefined}
      paddingAngle={0}
      radius={50}
      rounded={false}
      startAngle={0}
      viewBoxSize={[100, 100]}
      style={{
        height: "165px"
      }}
    />
  );
};

export default PieChart;
