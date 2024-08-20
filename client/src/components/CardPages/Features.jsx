import Container from "./CommonTemplate";
import Icon1 from "../../assets/features/Icon1.png";
import Icon2 from "../../assets/features/Icon2.png";
import Icon3 from "../../assets/features/Icon3.png";
import Icon4 from "../../assets/features/Icon4.png";
import Icon5 from "../../assets/features/Icon5.png";
import Icon6 from "../../assets/features/Icon6.png";

const cardsData = [
  {
    icon: Icon1,
    heading: "Holistic Learning Approach",
    paragraph:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    cardHeight: "h-[280px]"
  },
  {
    icon: Icon2,
    heading: "Experienced Educators",
    paragraph:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    cardHeight: "h-[280px]"
  },
  {
    icon: Icon3,
    heading: "Language Immersion",
    paragraph:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    cardHeight: "h-[280px]"
  },
  {
    icon: Icon4,
    heading: "Art and Creativity",
    paragraph:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    cardHeight: "h-[280px]"
  },
  {
    icon: Icon5,
    heading: "Outdoor Education",
    paragraph:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    cardHeight: "h-[280px]"
  },
  {
    icon: Icon6,
    heading: "Play-Based Learning",
    paragraph:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    cardHeight: "h-[280px]"
  },
];

export default function Features() {
  return (
    <Container
      sectionTitle="Our Special Features"
      sectionDescription="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      buttonText="Features"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
