export const Messages = () => {
  return (
    <div>
      <div className="flex flex-col justify-center  items-center text-white">
        <h2 className="text-center font-extrabold text-4xl mb-2 w-full lg:w-1/2 pb-2 p-2">
          Leadership Insight
        </h2>
        <p className="text-center text-lg">
          We are here to provide a nuturing and inclusive environment where
          young minds can thrive,
          <br />
          fostering a love for learning and personal growth.
        </p>
      </div>
      <div className="flex justify-center items-center   min-h-screen p-4 lg:p-16">
        <div
          className="flex justify-center items-center flex-col lg:flex-col gap-8 w-full"
          id="cards-container"
        >
          <h2 className="text-center text-purple-600 dark:text-purple-300 font-bold text-3xl mb-2 w-full lg:w-1/2">
            President&apos;s Message
          </h2>
          <div className="bg-white  dark:bg-gray-700 rounded-lg shadow-lg p-6 w-full lg:w-3/4 relative transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="lg:absolute lg:-left-36 lg:top-1/2 lg:transform lg:-translate-y-1/2 pb-3 lg:pb-0 lg:w-auto w-full flex flex-col justify-center items-center mb-4 lg:mb-0">
              <img src="/profile.jpg" alt="Avatar" className="rounded-full shadow-lg border-4 border-white dark:border-gray-700"
                style={{ width: "120px", height: "120px" }} />
              <p className="text-center text-orange-600 font-bold mt-2">
                President&apos;s Name
                <br />
                President
              </p>
            </div>
            <p className="text-black dark:text-white text-md leading-relaxed pt-10">
              Our focus at school shall be; “Emphasis on building strong
              foundational Basics” Establishing strong foundational basics is
              the key when it comes to early childhood development. Promote
              liberal thinking; Critical thinking is inculcated at the primary
              level that broadens the knowledge horizons of the students.
              Students are encouraged to be more individualistic with a global
              perspective of education and community. Additionally, students are
              expected to take an active role in designing their own learning
              activities. We believe in developing cooperative skills over
              competitive.
            </p>
          </div>

          <h2 className="text-center text-purple-600 dark:text-purple-300 font-bold text-3xl mb-2 w-full lg:w-1/2 pl-4">
            Principal&apos;s Message
          </h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 w-full lg:w-3/4 relative transition transform hover:scale-105 duration-300 ease-in-out">
            <div className="lg:absolute lg:-left-36 lg:top-1/2 lg:transform lg:-translate-y-1/2 pb-3 lg:pb-0 lg:w-auto w-full flex flex-col justify-center items-center mb-4 lg:mb-0">
              <img
                src="/profile.jpg"
                alt="Avatar"
                className="rounded-full shadow-lg border-4 border-white dark:border-gray-700"
                style={{ width: "120px", height: "120px" }}
              />
              <p className="text-center text-orange-600 font-bold mt-2">
                Principal&apos;s Name
                <br />
                Principal
              </p>
            </div>
            <p className="text-black dark:text-white text-md leading-relaxed pt-10">
              Our focus at school shall be; “Emphasis on building strong
              foundational Basics” Establishing strong foundational basics is
              the key when it comes to early childhood development. Promote
              liberal thinking; Critical thinking is inculcated at the primary
              level that broadens the knowledge horizons of the students.
              Students are encouraged to be more individualistic with a global
              perspective of education and community. Additionally, students are
              expected to take an active role in designing their own learning
              activities. We believe in developing cooperative skills over
              competitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
