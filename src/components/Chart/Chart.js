import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import { PieChart } from "react-minimal-pie-chart";

const Chart = () => {
  // const [hovered, setHovered] = useState(undefined);

  const totalInc = +useSelector(
    (state) => state.monthlyIncCalc.initialMonthlyInput,
    shallowEqual
  );

  const data = useSelector((state) => state.monthlyExpCalc, shallowEqual).map(
    (item) => {
      item.title = item.name;
      item.value = (item.cost / totalInc) * 100;
      item.color = item.bgColor;
      return item;
    }
  );

  return (
    <PieChart
      style={{
        fontFamily:
          '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
        fontSize: "2px",
        height: "450",
        marginTop: "-70px",
        marginBottom: "-80px",
        zIndex: -10,
      }}
      data={data}
      // totalValue={totalValue}
      radius={PieChart.defaultProps.radius - 22}
      lineWidth={25}
      segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
      animate
      paddingAngle={1}
      // label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
      labelPosition={100 - 60 / 5}
      labelStyle={{
        fill: "#fff",
        opacity: 0.75,
        pointerEvents: "none",
      }}
      // onClick={(_, index) => {
      //   setSelected(index === selected ? undefined : index);
      // }}
      // onMouseOver={(_, index) => {
      //   setHovered(index);
      // }}
      // onMouseOut={() => {
      //   setHovered(undefined);
      // }}
    />
  );
};

export default Chart;
