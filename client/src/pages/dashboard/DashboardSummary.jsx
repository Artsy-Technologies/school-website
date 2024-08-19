import DashboardWidgets from "../../components/admin/analytics/DashboardWidgets";
import LineChart from "../../components/admin/analytics/Chart1";
import UniversitySurveyCard from "../../components/admin/analytics/UniversityServeyCard";
import StudentTable from "../../components/admin/analytics/StudentList"
import { studentsData } from "../../components/admin/data/Studentlist";

function DashboardSummary() {
  return (
    <div className="container">
      <DashboardWidgets />
      <div className="p-4 flex flex-col gap-4">
      <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <LineChart/>
      </div>
      <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <UniversitySurveyCard/>
      </div>
      <StudentTable students={studentsData} />
      </div>
    </div>
  );
}

export default DashboardSummary;
