import { useParams } from "react-router-dom";

const Fee = () => {
  const { className } = useParams();

  // You can fetch the data based on the className or display relevant data
  return (
    <section className="pt-[1rem] ">
      <h1 className="text-2xl mb-4 text-purple-600 dark:text-purple-200 font-bold">Fee Details Of Class {className}</h1>
      <div className="overflow-y-auto h-[80vh] pb-[3rem]">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 bg-white border border-white">
            <tr>
              <th className="border px-4 py-2 text-sm md:text-sm">Student Name</th>
              <th className="border px-4 py-2 text-sm md:text-sm">Class Name and Section</th>
              <th className="border px-4 py-2 text-sm md:text-sm">Roll No.</th>
              <th className="border px-4 py-2 text-sm md:text-sm">Total Fee Amount</th>
              <th className="border px-4 py-2 text-sm md:text-sm">Paid / Unpaid</th>
              <th className="border px-4 py-2 text-sm md:text-sm">Due Amount</th>
            </tr>
          </thead>
          <tbody>
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />
            <TableBody />

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Fee;


const TableBody = () => {
  return (
    <tr className="dark:text-white">
      <td className="border px-2 py-1 text-xs md:text-sm text-center">John Doe</td>
      <td className="border px-2 py-1 text-xs md:text-sm text-center">Class 10, Section A</td>
      <td className="border px-2 py-1 text-xs md:text-sm text-center">101</td>
      <td className="border px-2 py-1 text-xs md:text-sm text-center">$2000</td>
      <td className="border px-2 py-1 text-xs md:text-sm text-center">Paid</td>
      <td className="border px-2 py-1 text-xs md:text-sm text-center">$0</td>
    </tr>
  );
};
