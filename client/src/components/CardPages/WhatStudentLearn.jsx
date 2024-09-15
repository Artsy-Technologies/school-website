import Container from "./CommonTemplate";
import Icon1 from "../../assets/WhatStudentsLearn/Icon1.png";
import Icon2 from "../../assets/WhatStudentsLearn/Icon2.png";
import Icon3 from "../../assets/WhatStudentsLearn/Icon3.png";
import Icon4 from "../../assets/WhatStudentsLearn/Icon4.png";
import Icon5 from "../../assets/WhatStudentsLearn/Icon5.png";
import Icon6 from "../../assets/WhatStudentsLearn/Icon6.png";
import Icon11 from "../../assets/admission-process/Icon1.png";
import Icon22 from "../../assets/admission-process/Icon2.png";
import Icon33 from "../../assets/admission-process/Icon3.png";
import Icon44 from "../../assets/admission-process/Icon4.png";
import Icon55 from "../../assets/admission-process/Icon5.png";
import Icon66 from "../../assets/admission-process/Icon6.png";

const cardsData = [
  {
    icon: Icon11,
    heading: (
      <div className="flex justify-center">
        <img src={Icon1} width={250} height={250} className="rounded-2xl" />
      </div>
    ),
    paragraph: (
      <div className="h-[116px] gap-[10px]">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Language Arts
        </h1>
        <p className="mr-5 font-outfit text-[15px] font-medium leading-[20px] text-center dark:text-gray-400">
          Reading, writing, storytelling, and communication skills.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon22,
    heading: (
      <div className="flex justify-center">
        <img src={Icon2} width={250} height={250} className="rounded-2xl" />
      </div>
    ),
    paragraph: (
      <div className="h-[116px] gap-[10px]">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Mathematics
        </h1>
        <p className="mr-5 font-outfit text-[15px] font-medium leading-[20px] text-center dark:text-gray-400">
          Number sense, basic operations, problem-solving, and logic.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon33,
    heading: (
      <div className="flex justify-center">
        <img src={Icon3} width={250} height={250} className="rounded-2xl" />
      </div>
    ),
    paragraph: (
      <div className="h-[116px] gap-[10px]">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Science
        </h1>
        <p className="mr-5 font-outfit text-[15px] font-medium leading-[20px] text-center dark:text-gray-400">
          Exploring the natural world through hands-on experiments and investigations.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon44,
    heading: (
      <div className="flex justify-center">
        <img src={Icon4} width={250} height={250} className="rounded-2xl" />
      </div>
    ),
    paragraph: (
      <div className="h-[116px] gap-[10px]">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Social Studies
        </h1>
        <p className="mr-5 font-outfit text-[15px] font-medium leading-[20px] text-center dark:text-gray-400">
          Cultivating an understanding of diverse cultures and communities.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon55,
    heading: (
      <div className="flex justify-center">
        <img src={Icon5} width={250} height={250} className="rounded-2xl" />
      </div>
    ),
    paragraph: (
      <div className="h-[116px] gap-[10px]">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Arts and Crafts
        </h1>
        <p className="mr-5 font-outfit text-[15px] font-medium leading-[20px] text-center dark:text-gray-400">
          Encouraging creativity through various art forms and crafts.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon66,
    heading: (
      <div className="flex justify-center">
        <img src={Icon6} width={250} height={250} className="rounded-2xl" />
      </div>
    ),
    paragraph: (
      <div className="h-[116px] gap-[10px]">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Physical Education
        </h1>
        <p className="mr-5 font-outfit text-[15px] font-medium leading-[20px] text-center dark:text-gray-400">
          Promoting physical health through exercise and play.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
];


export default function WhatStudentsLearn() {
  return (
    <Container
      sectionTitle="What Students Learn"
      sectionDescription="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
      buttonText="Our Features"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
