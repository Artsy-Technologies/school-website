import Faq from "./Faq";

const faqData = [
  {
    question: "How do I apply for admission?",
    answer:
      "To apply for admission, visit our website and navigate to the admissions section. Follow the instructions provided to complete the application process.",
  },
  {
    question: "What are the admission requirements?",
    answer:
      "Admission requirements vary by program. Generally, you will need to submit academic transcripts, standardized test scores (if applicable), letters of recommendation, and a personal statement.",
  },
  {
    question: "Can I transfer credits from another institution?",
    answer:
      "Yes, we accept transfer credits from accredited institutions. You will need to submit official transcripts and follow our transfer credit evaluation process.",
  },
  {
    question: "What majors or programs do you offer?",
    answer:
      "We offer a wide range of undergraduate and graduate programs. Visit our website or contact our admissions office for a complete list of majors and programs available.",
  },
  {
    question: "How can I schedule a campus tour?",
    answer:
      "You can schedule a campus tour through our website or by contacting our admissions office directly. Campus tours are available on weekdays and select weekends.",
  },
  {
    question: "What housing options are available on campus?",
    answer:
      "We offer various housing options including residence halls and apartment-style living. Visit our housing website for more information on accommodations and amenities.",
  },
  {
    question: "Who are the faculty members in my department?",
    answer:
      "Our faculty members are experts in their fields with diverse backgrounds and experiences. Visit our departmental websites to learn more about our faculty and their research interests.",
  },
  {
    question: "How can I contact a faculty member?",
    answer:
      "You can find contact information for faculty members on our departmental websites. Feel free to email or call them directly to schedule a meeting or ask questions about their courses and research.",
  },
  {
    question: "What support services are available for students?",
    answer:
      "We offer a variety of support services including academic advising, career counseling, tutoring, and wellness programs. Visit our student services website for more information on available resources.",
  },
  {
    question: "How can I get involved in campus activities?",
    answer:
      "There are numerous opportunities to get involved on campus including student clubs, organizations, and events. Follow our student affairs office on social media or visit our website for updates on campus activities.",
  },
];

const FaqSection = () => {
  // Calculate the midpoint to split FAQ items into two rows
  const midpoint = Math.ceil(faqData.length / 2);

  return (
    <div className="mb-10">
      <h2 className="text-center text-3xl font-bold text-white mb-4">
        Frequently Asked Questions
        <span className="text-purple-600 dark:text-purple-200">[FAQs]</span>
      </h2>
      <p className="text-center text-white max-w-xl mx-auto mb-12">
        Find all the essential information you need in our FAQ section, designed
        to address the most frequently asked questions and help you make
        informed decisions for your child&apos;s education.
      </p>
      <section className="flex gap-4 flex-col md:flex-row p-2">
        <div className="flex flex-col w-full md:w-1/2">
          {faqData.slice(0, midpoint).map((item, index) => (
            <Faq key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="flex flex-col w-full md:w-1/2 ">
          {faqData.slice(midpoint).map((item, index) => (
            <Faq key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
