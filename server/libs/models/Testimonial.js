import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    text: { type: String, required: true },
    imageSrc: { type: String }, 
    accepted: { type: Boolean, default: false }, 
    rating: { type: Number, min: 1, max: 5 } // Rating between 1 and 5
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
