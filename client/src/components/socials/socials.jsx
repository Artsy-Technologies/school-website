import img1 from "../../assets/socials/img1.jpg";
import img2 from "../../assets/socials/img2.jpg";
import img3 from "../../assets/socials/img3.jpg";
import img4 from "../../assets/socials/img4.webp";

export const Socials = () =>{
    return (
        <div>
  <div className="flex flex-col justify-center  items-center text-white" >
    <h2 className="text-center  font-extrabold text-4xl mb-2 w-full lg:w-1/2 pb-4 pl-4">
      News & Social Media
    </h2>
    <p className="text-center text-lg">At Little Learners Academy, we celebrate every milestone and create cherished memories for our <br/>
    students. Throughout the year, we host a variety of events and celebrations that bring the entire <br/> 
    school community together. Some of our memorable events include</p>
  </div>

  <div className="min-h-screen flex flex-col justify-center items-center space-y-4 p-4">
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg max-w-3xl w-full flex flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-start lg:w-1/3">
        <img
          src={img1}
          alt="Blog Post Image"
          className="w-full max-w-md rounded"
        />
      </div>
      <div className="lg:w-2/3 lg:pl-8">
        <h2 className="text-center lg:text-left text-purple-900 dark:text-purple-300 text-xl font-semibold mt-4 lg:mt-0">
          Have you read our latest blog post?
        </h2>
        <p className="text-center lg:text-left mt-2 dark:text-white text-black">
          To finish celebrating Sport and Outdoor this week in our Highlights
          2023-24 series, read our latest blog post by SFC2 Evie. Evie shares the
          three key things about exercise that are important to her - 'Balance',
          'Social Element' and 'Understanding Myself'. Click the link in our bio
          or head over to the Blogs and Interviews page on our website.
        </p>
        <div className="flex justify-center lg:justify-start mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/facebook-new.png"
              alt="Facebook"
            />
            Know More..
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg max-w-3xl w-full flex flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-start lg:w-1/3">
        <img
          src={img2}
          alt="Blog Post Image"
          className="w-full max-w-md rounded"
        />
      </div>
      <div className="lg:w-2/3 lg:pl-8">
        <h2 className="text-center lg:text-left text-purple-900 dark:text-purple-300 text-xl font-semibold mt-4 lg:mt-0">
          Have you read our latest blog post?
        </h2>
        <p className="text-center lg:text-left mt-2 dark:text-white text-black">
          To finish celebrating Sport and Outdoor this week in our Highlights
          2023-24 series, read our latest blog post by SFC2 Evie. Evie shares the
          three key things about exercise that are important to her - 'Balance',
          'Social Element' and 'Understanding Myself'. Click the link in our bio
          or head over to the Blogs and Interviews page on our website.
        </p>
        <div className="flex justify-center lg:justify-start mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/twitter.png"
              alt="Twitter"
            />
            Know More..
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg max-w-3xl w-full flex flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-start lg:w-1/3">
        <img
          src={img3}
          alt="Blog Post Image"
          className="w-full max-w-md rounded"
        />
      </div>
      <div className="lg:w-2/3 lg:pl-8">
        <h2 className="text-center lg:text-left text-purple-900 dark:text-purple-300 text-xl font-semibold mt-4 lg:mt-0">
          Have you read our latest blog post?
        </h2>
        <p className="text-center lg:text-left mt-2 dark:text-white text-black">
          To finish celebrating Sport and Outdoor this week in our Highlights
          2023-24 series, read our latest blog post by SFC2 Evie. Evie shares the
          three key things about exercise that are important to her - 'Balance',
          'Social Element' and 'Understanding Myself'. Click the link in our bio
          or head over to the Blogs and Interviews page on our website.
        </p>
        <div className="flex justify-center lg:justify-start mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/linkedin.png"
              alt="LinkedIn"
            />
            Know More..
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white dark:bg-gray-700 p-8 rounded-lg max-w-3xl w-full flex flex-col lg:flex-row">
      <div className="flex justify-center lg:justify-start lg:w-1/3">
        <img
          src={img4}
          alt="Blog Post Image"
          className="w-full max-w-md rounded"
        />
      </div>
      <div className="lg:w-2/3 lg:pl-8">
        <h2 className="text-center lg:text-left text-purple-900 dark:text-purple-300 text-xl font-semibold mt-4 lg:mt-0">
          Have you read our latest blog post?
        </h2>
        <p className="text-center lg:text-left mt-2 dark:text-white text-black">
          To finish celebrating Sport and Outdoor this week in our Highlights
          2023-24 series, read our latest blog post by SFC2 Evie. Evie shares the
          three key things about exercise that are important to her - 'Balance',
          'Social Element' and 'Understanding Myself'. Click the link in our bio
          or head over to the Blogs and Interviews page on our website.
        </p>
        <div className="flex justify-center lg:justify-start mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded flex items-center">
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new.png"
              alt="Instagram"
            />
            Know More..
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Socials;