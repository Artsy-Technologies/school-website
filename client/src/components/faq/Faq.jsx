import React, { useState } from 'react'
import { BiMinus } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'

const Faq = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div
      className={`border h-fit  border-white rounded-lg overflow-hidden transition duration-500 ease-out ${
        showAnswer
          ? 'bg-white text-black border  rounded border-black'
          : 'bg-darkpurple text-white'
      }`}
    >
      <article
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={() => setShowAnswer(prev => !prev)}
      >
        <h2 className="font-semibold">{question}</h2>
        <button
          className={`${
            showAnswer
              ? 'border  rounded border-black'
              : 'border border-white rounded '
          }`}
        >
          {showAnswer ? <BiMinus /> : <BsPlusLg />}
        </button>
      </article>
      {showAnswer && (
        <article className="border-t border-gray-400 p-4">
          <p>{answer}</p>
        </article>
      )}
    </div>
  )
}

export default Faq
