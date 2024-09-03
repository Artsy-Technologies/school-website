import Container from "./CommonTemplate";
import Icon1 from "../../assets/benefits/Icon1.png";
import Icon2 from "../../assets/benefits/Icon2.png";
import Icon3 from "../../assets/benefits/Icon3.png";
import Icon4 from "../../assets/benefits/Icon4.png";
import Icon5 from "../../assets/benefits/Icon5.png";
import Icon6 from "../../assets/benefits/Icon6.png";

const cardsData = [
  {
    icon:Icon1,
    heading: "Holistic Learning Approach",
    paragraph:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    cardHeight: "h-[220px]"
  },
  {
    icon:Icon2,
    heading: "Experienced Educators",
    paragraph:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    cardHeight: "h-[220px]"
  },
  {
    icon:Icon3,
    heading: "Nurturing Environment",
    paragraph:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
    cardHeight: "h-[220px]"
  },
  {
    icon:Icon4,
    heading: "Play-Based Learning",
    paragraph:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    cardHeight: "h-[220px]"
  },
  {
    icon:Icon5,
    heading: "Individualized Attention",
    paragraph:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    cardHeight: "h-[220px]"
  },
  {
    icon:Icon6,
    heading: "Parent Involvement",
    paragraph:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    cardHeight: "h-[220px]"
  },
];

export default function Benefits() {
  return (
    <Container
      sectionTitle="Our Benefits"
      sectionDescription="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      buttonText="Benefits"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
