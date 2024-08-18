import PropTypes from "prop-types";

function ContactCard({ contactData }) {
  const {
    studentName = "N/A",
    studentAge = "N/A",
    parentName = "N/A",
    email = "N/A",
    phoneNumber = "N/A",
    programInterest = "N/A",
    message = "No message provided.",
  } = contactData || {};

  return (
    <div
      style={{ boxShadow: "0 1px 1px #7135F1" }}
      className="p-5 bg-white rounded-md w-[95%] lg:w-[45%] m-2"
    >
      <div>
        <div className="mt-3 flex">
          <h4 className="text-sm font-bold text-[#0000009c]">Contact By:</h4>
          <p className="text-sm font-medium text-[#fb6c1b] ml-1">
            {studentName}
          </p>
        </div>

        <div className="flex items-center leading-3">
          <h4 className="text-[.9rem] font-medium text-[#0000009c]">Age:</h4>
          <p className="text-xs font-normal text-[gray] leading-3 ml-1">
            {studentAge}
          </p>
        </div>

        <div className="flex justify-between mt-2">
          <div>
            <h4 className="text-[.9rem] font-medium text-[#0000009c]">
              Parent Name
            </h4>
            <p className="text-[.8rem] font-normal text-[gray] leading-3">
              {parentName}
            </p>
          </div>
        </div>

        <div className="lg:flex justify-between mt-2">
          <div>
            <h4 className="text-[.9rem] font-medium text-[#0000009c]">Email</h4>
            <p className="text-[.8rem] font-normal text-[gray] leading-3">
              {email}
            </p>
          </div>

          <div className="mt-2 lg:mt-0">
            <h4 className="text-[.9rem] font-medium text-[#0000009c]">
              Number
            </h4>
            <p className="text-xs font-normal text-[gray] leading-3">
              {phoneNumber}
            </p>
          </div>
        </div>

        <div className="mt-2">
          <h4 className="text-[.9rem] font-medium text-[#0000009c]">
            Program Interest
          </h4>
          <p className="text-xs font-normal text-[gray] leading-3 capitalize">
            {programInterest}
          </p>
        </div>

        <div className="mt-2 max-h-24 overflow-y-scroll text-xs font-[500] py-2 text-[#13001ff5]">
          {message}
        </div>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contactData: PropTypes.shape({
    studentName: PropTypes.string,
    studentAge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    parentName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.number,
    programInterest: PropTypes.string,
    message: PropTypes.string,
  }),
};

export default ContactCard;
