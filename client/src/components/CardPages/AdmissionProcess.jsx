import Container from "./CommonTemplate";
import Icon1 from "../../assets/admission-process/Icon1.png";
import Icon2 from "../../assets/admission-process/Icon2.png";
import Icon3 from "../../assets/admission-process/Icon3.png";
import Icon4 from "../../assets/admission-process/Icon4.png";
import Icon5 from "../../assets/admission-process/Icon5.png";
import Icon6 from "../../assets/admission-process/Icon6.png";

const cardsData = [
  {
    icon: Icon1,
    heading: "Inquiry",
    paragraph:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon2,
    heading: "School Tour",
    paragraph:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon3,
    heading: "Application Form",
    paragraph:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon4,
    heading: "Parent Interview",
    paragraph:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon5,
    heading: "Student Assessment",
    paragraph:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
    cardHeight: "h-[260px]"
  },
  {
    icon: Icon6,
    heading: "Acceptance",
    paragraph:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
    cardHeight: "h-[260px]"
  },
];

export default function AdmissionProcess() {
  return (
    <Container
      sectionTitle="Admission Process"
      sectionDescription="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school."
      buttonText="Process"
      buttonLink="#"
      cardsData={cardsData}
    />
  );
}
