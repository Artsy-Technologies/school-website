import Container from "./CommonTemplate";
import Icon1 from "../../assets/EventsAndCelebration/Icon1.png";
import Icon2 from "../../assets/EventsAndCelebration/Icon2.png";
import Icon3 from "../../assets/EventsAndCelebration/Icon3.png";
import Icon4 from "../../assets/EventsAndCelebration/Icon4.png";
import Icon5 from "../../assets/EventsAndCelebration/Icon5.png";
import Icon6 from "../../assets/EventsAndCelebration/Icon6.png";
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
      <img src={Icon1} width={250} height={250} className="ml-14 rounded-2xl" />
    ),
    paragraph: (
      <div className="w-[398.67px] h-[116px] gap-[10px] ">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Annual Sports Day
        </h1>
        <p className="mr-10 font-outfit text-[15px] dark:text-gray-400 font-medium leading-[20px] text-center">
          A day filled with friendly competition, team spirit, and
          sportsmanship.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon22,
    heading: (
      <img src={Icon2} width={250} height={250} className="ml-14 rounded-2xl" />
    ),
    paragraph: (
      <div className="w-[398.67px] h-[116px] gap-[10px] ">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Cultural Festivals
        </h1>
        <p className="mr-10 font-outfit text-[15px] dark:text-gray-400 font-medium leading-[20px] text-center">
          Celebrations of diverse cultural festivals, promoting cultural
          exchange and appreciation.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon33,
    heading: (
      <img src={Icon3} width={250} height={250} className="ml-14 rounded-2xl" />
    ),
    paragraph: (
      <div className="w-[398.67px] h-[116px] gap-[10px] ">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Art Exhibitions
        </h1>
        <p className="mr-10 font-outfit text-[15px] dark:text-gray-400 font-medium leading-[20px] text-center">
          Showcasing our students artistic talents through exhibitions and
          displays.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon44,
    heading: (
      <img src={Icon4} width={250} height={250} className="ml-14 rounded-2xl" />
    ),
    paragraph: (
      <div className="w-[398.67px] h-[116px] gap-[10px] ">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Science Fair
        </h1>
        <p className="mr-10 font-outfit text-[15px] dark:text-gray-400 font-medium leading-[20px] text-center">
          A platform for budding scientists to present their innovative projects
          and experiments.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon55,
    heading: (
      <img src={Icon5} width={250} height={250} className="ml-14 rounded-2xl" />
    ),
    paragraph: (
      <div className="w-[398.67px] h-[116px] gap-[10px] ">
        <h1 className="mb-5 mt-5 text-purple-600 dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          International Day
        </h1>
        <p className="mr-10 font-outfit text-[15px] dark:text-gray-400 font-medium leading-[20px] text-center">
          A vibrant celebration of our diverse community, embracing cultures
          from around the world.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
  {
    icon: Icon66,
    heading: (
      <img src={Icon6} width={250} height={250} className="ml-14 rounded-2xl" />
    ),
    paragraph: (
      <div className="w-[398.67px] h-[116px] gap-[10px] ">
        <h1 className="mb-5 mt-5 text-purple-600  dark:text-purple-200 font-raleway text-[20px] font-bold leading-[36.4px] text-center">
          Graduation Ceremony
        </h1>
        <p className="mr-10 font-outfit text-[15px] font-medium leading-[20px] text-center dark:text-gray-400">
          A significant milestone as our Kindergarten students prepare to embark
          on their academic journey.
        </p>
      </div>
    ),
    cardHeight: "h-[420px]",
  },
];

export default function Features() {
  return (
    <Container
      sectionTitle="Events & Celebrations"
      sectionDescription="At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
      buttonText="Our Celebrations"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
