import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/testimonials');
                const updatedTestimonials = response.data.map(testimonial => ({
                    ...testimonial,
                    imageSrc: testimonial.imageSrc.replace(/\\/g, '/')
                }));
                setTestimonials(updatedTestimonials);
            } catch (error) {
                setError('Failed to fetch testimonials');
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) return <p>Loading testimonials...</p>;
    if (error) return <p>{error}</p>;

    const acceptedTestimonials = testimonials.filter(testimonial => testimonial.accepted);

    return (
        <div className="bg-purple-300 py-16 dark:bg-darkmode">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-white mb-4">Our <span className="text-purple-600 dark:text-purple-200">Testimonials</span></h2>
                <p className="text-center text-white max-w-xl mx-auto mb-12">
                    Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    {acceptedTestimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial._id}
                            name={testimonial.name}
                            text={testimonial.text}
                            imageSrc={`http://localhost:8000/${testimonial.imageSrc}`}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
