import Chart from "react-google-charts";

// eslint-disable-next-line react-refresh/only-export-components
export const data = [
  ["Year", "Enrollment", "Expenses", "Revenue"],
  ["2019", 500000, 300000, 350000],
  ["2020", 550000, 320000, 370000],
  ["2021", 600000, 340000, 400000],
  ["2022", 620000, 360000, 420000],
];

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
  chart: {
    title: "School Performance",
    subtitle: "Enrollment, Expenses, and Revenue: 2019-2022",
  },
};

export default function LineChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
