import Container from "./CommonTemplate";
import Icon1 from "../../assets/extracurricularActivities/Icon1.png";
import Icon2 from "../../assets/extracurricularActivities/Icon2.png";
import Icon3 from "../../assets/extracurricularActivities/Icon3.png";
import Icon4 from "../../assets/extracurricularActivities/Icon4.png";
import Icon5 from "../../assets/extracurricularActivities/Icon5.png";
import Icon6 from "../../assets/extracurricularActivities/Icon6.png";

const cardsData = [
  {
    icon: Icon1,
    heading: "Sports and Athletics",
    paragraph:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon2,
    heading: "Art and Creativity",
    paragraph:
      "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon3,
    heading: "Music and Performing Arts",
    paragraph:
      "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon4,
    heading: "Language Clubs",
    paragraph:
      "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon5,
    heading: "Science Club",
    paragraph:
      "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon6,
    heading: "Cooking and Culinary Arts",
    paragraph:
      "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    cardHeight: "h-[260px]"
  },
];

export default function extracurricularActivities() {
  return (
    <Container
      sectionTitle="Extracurricular Activities"
      sectionDescription="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
      buttonText="Our Features"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
