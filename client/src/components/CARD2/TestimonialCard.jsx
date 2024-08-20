import React from 'react';

const TestimonialCard = ({ name, text, imageSrc }) => {
    return (
        <div className="bg-white rounded-lg p-6 shadow-lg relative hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img
                className="w-16 h-16 rounded-full mx-auto"
                src={imageSrc}
                alt={`${name}'s picture`}
            />
            <h3 className="text-center text-xl font-semibold mt-4">{name}</h3>
            <div className="flex justify-center mt-2">
                <span className="text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 inline-block fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.968a1 1 0 00.95.69h4.174c.969 0 1.372 1.24.588 1.81l-3.382 2.46a1 1 0 00-.364 1.118l1.286 3.968c.3.921-.755 1.688-1.54 1.118l-3.382-2.46a1 1 0 00-1.176 0l-3.382 2.46c-.784.57-1.839-.197-1.54-1.118l1.286-3.968a1 1 0 00-.364-1.118l-3.382-2.46c-.784-.57-.38-1.81.588-1.81h4.174a1 1 0 00.95-.69l1.286-3.968z" />
                        </svg>
                    ))}
                </span>
            </div>
            <p className="text-gray-600 text-center mt-4">{text}</p>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-black h-4 w-full rounded-b-lg"></div>
        </div>
    );
};

export default TestimonialCard;
