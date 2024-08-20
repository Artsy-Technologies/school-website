import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Jennifer B",
            text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
            imageSrc: "https://via.placeholder.com/150"
        },
        {
            name: "David K",
            text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
            imageSrc: "https://via.placeholder.com/150"
        },
        {
            name: "Emily L",
            text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
            imageSrc: "https://via.placeholder.com/150"
        }
    ];

    return (
        <div className="bg-purple-300 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-white mb-4">Our <span className="text-indigo-600">Testimonials</span></h2>
                <p className="text-center text-white max-w-xl mx-auto mb-12">
                    Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            text={testimonial.text}
                            imageSrc={testimonial.imageSrc}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
