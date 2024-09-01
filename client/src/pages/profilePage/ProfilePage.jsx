/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const aboutData = [
    { title: "Roll No.", content: "1231485550" },
    { title: "Name", content: "Anisha Sharma" },
    { title: "Email", content: "anisha@BiLogoGmail.com" },
    { title: "Phone", content: "1231485550" },
]


export default function ProfilePage() {
    return (
        <section className="bg-white w-screen h-full p-4 flex justify-around " >
            <ProfileImg />
            <ProfileDetails />
        </section>
    )
}


const ProfileImg = () => {
    return (
        <div className=" w-[12rem] h-[10rem]  " >
            <img src="/profile.jpg" alt="" className="object-cover w-full h-full" />
        </div>
    )
}


const ProfileDetails = () => {
    const [activeTab, setActiveTab] = useState('About'); // Manage active tab state

    // Animation variants for sliding effect
    const slideVariants = {
        hidden: {
            x: '100%', // Start from the right side
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    // Function to switch tabs
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="w-[60%] lg:w-[75%]">
            <div className="flex justify-between items-start">
                <div className="text-sm font-medium">
                    <p>Anisha Sharma</p>
                    <span className="flex text-red-500">
                        8, <p>Sec A</p>
                    </span>
                </div>
                <button className="text-sm font-medium text-gray-500">EDIT PROFILE</button>
            </div>
            <div className="flex gap-x-5 border-b-[1px] border-gray-300 mt-8  cursor-pointer">
                <p
                    onClick={() => handleTabChange('About')}
                    className={`cursor-pointer ${activeTab === 'About' ? 'border-b-2 border-[purple] ' : ''}  p-1 `}
                >
                    About
                </p>
                <p
                    onClick={() => handleTabChange('Details')}
                    className={`cursor-pointer ${activeTab === 'Details' ? 'border-b-2 border-[purple]' : ''} p-1 `}
                >
                    Details
                </p>
            </div>

            <div className="mt-4">
                {activeTab === 'About' && (
                    <motion.div
                        key="about"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {aboutData.map((data, i) => (
                            <AboutTitles key={i} data={data} />
                        ))}
                    </motion.div>
                )}

                {activeTab === 'Details' && (
                    <motion.div
                        key="details"
                        variants={slideVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <StudentForm />
                    </motion.div>
                )}
            </div>
        </div>
    );
};



const AboutTitles = ({ data }) => {
    return (
        <div className='lg:w-[60%] ' >
            <span className="font-medium text-sm flex justify-between mb-3 text-left  " >
                <p>{data?.title}</p>
                <p className=" w-[60%] " > {data?.content} </p>
            </span>
        </div>
    )
}



const StudentForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };

    return (
        <div className="min-w-full mx-auto bg-white rounded-lg ">
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Student Name */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="studentName">
                        Student Name
                    </label>
                    <input
                        type="text"
                        id="studentName"
                        {...register('studentName', { required: 'Student Name is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.studentName && <p className="text-red-500 text-sm">{errors.studentName.message}</p>}
                </div>

                {/* Father Name */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="fatherName">
                        Father Name
                    </label>
                    <input
                        type="text"
                        id="fatherName"
                        {...register('fatherName', { required: 'Father Name is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName.message}</p>}
                </div>

                {/* Mother Name */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="motherName">
                        Mother Name
                    </label>
                    <input
                        type="text"
                        id="motherName"
                        {...register('motherName', { required: 'Mother Name is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.motherName && <p className="text-red-500 text-sm">{errors.motherName.message}</p>}
                </div>

                {/* Class */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="studentClass">
                        Class
                    </label>
                    <input
                        type="text"
                        id="studentClass"
                        {...register('studentClass', { required: 'Class is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.studentClass && <p className="text-red-500 text-sm">{errors.studentClass.message}</p>}
                </div>

                {/* DOB */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="dob">
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        id="dob"
                        {...register('dob', { required: 'Date of Birth is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="image">
                        Image
                    </label>
                    <input
                        type="file"
                        id="image"
                        {...register('image')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        accept="image/*"
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="age">
                        Age
                    </label>
                    <input
                        type="number"
                        id="age"
                        {...register('age', { required: 'Age is required', min: { value: 1, message: 'Age must be at least 1' } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
                </div>

                {/* Adhar Card Upload */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="adharCard">
                        Adhar Card Upload
                    </label>
                    <input
                        type="file"
                        id="adharCard"
                        {...register('adharCard', { required: 'Adhar Card upload is required' })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {errors.adharCard && <p className="text-red-500 text-sm">{errors.adharCard.message}</p>}
                </div>

                {/* Parents Contact Number */}
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="parentsContact">
                        Parents Contact Number
                    </label>
                    <input
                        type="tel"
                        id="parentsContact"
                        {...register('parentsContact', { required: 'Parents Contact Number is required', pattern: { value: /^[0-9]{10}$/, message: 'Enter a valid 10-digit contact number' } })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    {errors.parentsContact && <p className="text-red-500 text-sm">{errors.parentsContact.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-[#C2A6FF] text-white py-2 px-4 rounded-md hover:bg-[#a379ff] transition duration-200"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

