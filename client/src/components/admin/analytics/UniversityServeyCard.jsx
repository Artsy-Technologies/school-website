import { Chart } from "react-google-charts";

// eslint-disable-next-line react-refresh/only-export-components
export const data = [
  ["Survey Category", "Percentage"],
  ["Satisfied with Courses", 40],
  ["Satisfied with Facilities", 25],
  ["Satisfied with Faculty", 20],
  ["Satisfied with Extracurricular Activities", 10],
  ["Other", 5],
];

// eslint-disable-next-line react-refresh/only-export-components
export const options = {
  title: "University Survey Results",
  is3D: true,
};

export default function UniversitySurveyChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

