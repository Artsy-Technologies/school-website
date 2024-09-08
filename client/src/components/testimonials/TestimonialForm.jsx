import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from './leftImage.png'; 
const TestimonialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('text', data.text);
    formData.append('rating', data.rating);
    formData.append('imageSrc', data.image[0]);

    try {
      const response = await axios.post('/api/testimonials', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Testimonial submitted successfully!');
      reset();
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting the testimonial.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white rounded-lg shadow-xl p-8 mb-6 w-full max-w-4xl mx-auto border border-gray-200">
      <div className="md:w-1/2 flex flex-col items-center justify-center gap-6">
        <h2 className='text-3xl text-purple-700 dark:text-purple-300 font-bold'>Give us your feedback</h2>
        <p className='text-xl text-purple-700 dark:text-purple-300'>through this testimonials form</p>
        <img src={Image} alt="Testimonial" className="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
      <div className="flex flex-col w-full md:w-1/2 p-6">
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium dark:text-gray-300 text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
              
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: 'Name can only contain letters and spaces',
                  },
                })}
                placeholder="Your Name"
                className="p-3 block w-full dark:text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
              />
              {errors.name && (
                <p className="text-red-500 dark:text-orange-300 mt-1">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="text"
                className="block text-lg font-medium dark:text-gray-300 text-gray-700 mb-2"
              >
                Testimonial
              </label>
              <textarea
                id="text"
                {...register('text', { required: 'Testimonial text is required' })}
                placeholder="Your testimonial here..."
                className="p-3 block w-full dark:text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                rows="4"
              />
              {errors.text && (
                <p className="text-red-500 dark:text-orange-300 mt-1">{errors.text.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="rating"
                className="block text-lg font-medium dark:text-gray-300 text-gray-700 mb-2"
              >
                Rating
              </label>
              <select
                id="rating"
                {...register('rating', { required: 'Rating is required' })}
                className="p-3 block w-full dark:text-gray-700 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
              >
                <option value="">Select Rating</option>
                <option value="1">1 - Bad</option>
                <option value="2">2 - Poor</option>
                <option value="3">3 - Average</option>
                <option value="4">4 - Good</option>
                <option value="5">5 - Excellent</option>
              </select>
              {errors.rating && (
                <p className="text-red-500 dark:text-orange-300 mt-1">{errors.rating.message}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="imageSrc"
                className="block text-lg font-medium dark:text-gray-300 text-gray-700 mb-2"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="imageSrc"
                {...register('image', { required: 'Image is required' })}
                className="block w-full text-gray-700 border dark:text-gray-700 border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
              />
              {errors.image && (
                <p className="text-red-500 dark:text-orange-300 mt-1">{errors.image.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-orange-500 dark:text-gray-700 text-white rounded-md shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-150 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TestimonialForm;
