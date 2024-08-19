import Chart from "react-google-charts";
// eslint-disable-next-line react-refresh/only-export-components
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"40%"}
      height={"200px"}
    />
  );
}
