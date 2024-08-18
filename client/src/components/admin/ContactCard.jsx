/* eslint-disable no-unused-vars */

function ContactCard(contactData) {

  return (
    <div style={{ boxShadow: "0 1px 1px #7135F1" }} className="p-5 bg-white rounded-md w-[95%] lg:w-[45%] m-2  ">
      <div className="flex justify-center gap-2 " >
        <div className="border-2 border-[#FB6C1B] bg-[#FB6C1B]  flex justify-center items-center p-1 rounded-sm " ><img src="/facebook.svg" alt="facbok" width={15} /></div>
        <div className="border-2 border-[#FB6C1B] bg-[#FB6C1B]  flex justify-center items-center p-1 rounded-sm " ><img src="/linkedin.svg" alt="linked" width={15} /></div>
        <div className="border-2 border-[#FB6C1B] bg-[#FB6C1B]  flex justify-center items-center p-1 rounded-sm " ><img src="/twit.svg" alt="twiter" width={15} /></div>
      </div>

      <div>

        <div className="mt-3  flex " >
          <h4 className="text-sm font-bold text-[#0000009c] " >Contact By :</h4>
          <p className="text-sm font-medium text-[#fb6c1b] ml-1 " > {contactData?.contactData?.studentName} </p>
        </div>

        <div className="flex items-center leading-3 " >
          <h4 className="text-[.9rem] font-medium text-[#0000009c] " >Age : </h4>
          <p className="text-xs font-normal text-[gray]  leading-3 " > {contactData?.contactData?.studentAge} </p>
        </div>

        <div className="flex justify-between mt-2 " >
          <div>
            <h4 className="text-[.9rem] font-medium gap-um text-[#0000009c] " >Parent Name</h4>
            <p className="text-[.8rem] font-normal text-[gray] leading-3 " > {contactData?.contactData?.parentName} </p>
          </div>


        </div>

        <div className="lg:flex justify-between mt-2">
          <div>
            <h4 className="text-[.9rem] font-medium text-[#0000009c]">Email</h4>
            <p className="text-[.8rem] font-normal text-[gray] leading-3"> {contactData?.contactData?.email} </p>
          </div>

          <div className="mt-2 lg:mt-0 " >
            <h4 className="text-[.9rem]  font-medium text-[#0000009c]">Number</h4>
            <p className="text-xs font-normal text-[gray] leading-3"> {contactData?.contactData?.phoneNumber} </p>
          </div>
        </div>

        <div className="mt-2" >
          <h4 className="text-[.9rem]  font-medium text-[#0000009c]  ">Program Interest</h4>
          <p className="text-xs font-normal text-[gray] leading-3 capitalize "> {contactData?.contactData?.programIntresr} </p>
        </div>

        <div className="mt-2 max-h-24 overflow-y-scroll text-xs font-[500] py-2 text-[#13001ff5] " >
          {contactData?.contactData?.message}
        </div>


      </div>
    </div>
  )
}

export default ContactCard