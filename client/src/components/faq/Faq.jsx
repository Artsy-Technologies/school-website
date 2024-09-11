/* eslint-disable react/prop-types */
import { useState } from 'react';
import { BiMinus } from 'react-icons/bi';  // Minus icon for open state
import { BsPlusLg } from 'react-icons/bs';  // Plus icon for closed state
import { motion } from "framer-motion";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className={`w-full flex justify-between items-center text-left text-xl font-semibold text-white bg-purple-600 dark:bg-purple-800 p-4 ${
          isOpen ? "rounded-t-md" : "rounded-md"
        }`}
        onClick={toggleFaq}
      >
        <span className='text-sm line-clamp-1 ' >{question}</span>
        <span className="text-2xl">
          {isOpen ? <BiMinus /> : <BsPlusLg />}
        </span>
      </button>
      <motion.div
        className="overflow-hidden"
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <p className="p-4 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white rounded-b-md text-sm ">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};

export default Faq;
