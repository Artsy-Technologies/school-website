import Container from "./CommonTemplate";
import Icon1 from "../../assets/VissionMission/icon1.svg";
import Icon2 from "../../assets/VissionMission/icon2.svg";


const cardsData = [
  {
    icon: Icon1,
    heading: "Mission",
    paragraph:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
      cardHeight: "h-[350px]",
  },
  {
    icon: Icon2,
    heading: "Vission",
    paragraph:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    cardHeight: "h-[350px]",
  },
 
];

export default function VisionMissionCard() {
  return (
    <Container
      sectionTitle="Our Mission & Vissions"
      sectionDescription="We are here to provide a nuturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
      buttonText="Mission & Vissions"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
