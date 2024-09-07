import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        // Fetch testimonials on component mount
        const fetchTestimonials = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/testimonials');
                setTestimonials(response.data);
            } catch (error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    const handleAcceptReject = async (id, action) => {
        try {
            const response = await axios.patch(`http://localhost:8000/api/testimonials/${id}/accept-reject`, { action });
            if (action === 'reject') {
                setTestimonials(prev => prev.filter(testimonial => testimonial._id !== id));
            } else if (action === 'accept') {
                setTestimonials(prev => prev.map(testimonial =>
                    testimonial._id === id ? { ...testimonial, accepted: true } : testimonial
                ));
            }
            console.log('Testimonial updated:', response.data);
        } catch (error) {
            console.error('Error updating testimonial:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="p-6 dark:bg-darkmode bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 dark:text-white">Manage Testimonials</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {testimonials.map(testimonial => (
                    <div key={testimonial._id} className="bg-white dark:bg-darkModeCard p-4 border border-gray-300 rounded-lg shadow-md flex flex-col items-center">
                        {testimonial.imageSrc && (
                            <img src={`http://localhost:8000/${testimonial.imageSrc}`} alt={testimonial.name} className="w-32 h-32 object-cover rounded-full mb-4" />
                        )}
                        <h2 className="text-xl dark:text-white font-semibold text-gray-700">{testimonial.name}</h2>
                        <p className="mt-2 dark:text-white text-gray-600 text-center">{testimonial.text}</p>
                        <p className="mt-2 dark:text-purple-700 font-bold text-gray-500">Rating: {testimonial.rating}</p>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {!testimonial.accepted && (
                                <>
                                    <button onClick={() => handleAcceptReject(testimonial._id, 'accept')} className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">Accept</button>
                                    <button onClick={() => handleAcceptReject(testimonial._id, 'reject')} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">Reject</button>
                                </>
                            )}
                            {testimonial.accepted && (
                                <button onClick={() => handleAcceptReject(testimonial._id, 'reject')} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">Delete</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminTestimonials;
