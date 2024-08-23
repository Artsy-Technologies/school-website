import PropTypes from "prop-types";

function ContactCard({ contacts }) {
  return (
    <div className="bg-white dark:bg-darkModeCard dark:border-white dark:text-white rounded-lg shadow-lg p-8 mb-6 w-full max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
        Contact Details Forms
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-darkModeCard border border-gray-300 dark:border-gray-700 shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700 text-left">
                Student Name
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700 text-left">
                Age
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700 text-left">
                Parent Name
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700 text-left">
                Email
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700 text-left">
                Number
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700 text-left">
                Program Interest
              </th>
              <th className="py-2 px-4 bg-gray-100 dark:bg-darkModeCard font-semibold text-gray-700 dark:text-white border-b border-gray-300 dark:border-gray-700 text-left">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">{contact.studentName || "N/A"}</td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">{contact.studentAge || "N/A"}</td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">{contact.parentName || "N/A"}</td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">{contact.email || "N/A"}</td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">{contact.phoneNumber || "N/A"}</td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 capitalize">
                  {contact.programInterest || "N/A"}
                </td>
                <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700 max-h-24 overflow-y-scroll">
                  {contact.message || "No message provided."}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      studentName: PropTypes.string,
      studentAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      parentName: PropTypes.string,
      email: PropTypes.string,
      phoneNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      programInterest: PropTypes.string,
      message: PropTypes.string,
    })
  ).isRequired,
};

export default ContactCard;
