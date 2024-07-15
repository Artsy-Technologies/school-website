import { useState } from 'react'
import { BiMinus } from 'react-icons/bi'
import { BsPlusLg } from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
const Faq = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="flex  bg-white flex-col border border-white rounded-lg overflow-hidden mb-4 w-full">
      <article
        className={`flex  items-center justify-between p-4 cursor-pointer ${
          showAnswer ? 'bg-white text-gray-500' : 'bg-darkpurple text-white '
        }`}
        onClick={() => setShowAnswer(prev => !prev)}
      >
        <h2
          className={`${
            showAnswer ? 'text-gray-700 pl-3 font-semibold' : 'font-semibold'
          }`}
        >
          {question}
        </h2>
        {showAnswer ? (
          <button className="border-2 border-black rounded">
            {showAnswer ? <BiMinus /> : <BsPlusLg />}
          </button>
        ) : (
          <button className="border-2 border-white  rounded">
            {showAnswer ? <BiMinus /> : <BsPlusLg />}
          </button>
        )}
      </article>
      {showAnswer && (
        <article className="border-t  ml-6 mr-6 text-left  text-gray-400  border-gray-400 p-4 ">
          <p className=' '>{answer}</p>
        </article>
      )}
    </div>
  )
}

export default Faq
