import Container from "./CommonTemplate";
import Icon1 from "../../assets/AwardsAndRecognition/Icon1.png";
import Icon2 from "../../assets/AwardsAndRecognition/Icon2.png";
import Icon3 from "../../assets/AwardsAndRecognition/Icon3.png";

const cardsData = [
  {
    icon: Icon1,
    heading: "Outstanding Early Childhood Education Award",
    paragraph:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    cardHeight: "h-[320px]",
  },
  {
    icon: Icon2,
    heading: "Innovative STEAM Education Award",
    paragraph:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    cardHeight: "h-[320px]",
  },
  {
    icon: Icon3,
    heading: "Environmental Stewardship Award",
    paragraph:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    cardHeight: "h-[320px]",
  },
];

export default function AwardsAndRecognition() {
  return (
    <Container
      sectionTitle="Our Awards and Recognitions"
      sectionDescription="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
      buttonText="Achievements"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
