import Testimonial from '../libs/models/Testimonial.js';


export const addTestimonial = async (req, res) => {
    const { name, text, rating } = req.body;
    const imageSrc = req.file ? req.file.path : ''; // Handle file path

    const newTestimonial = new Testimonial({
        name,
        text,
        imageSrc,
        rating
    });

    try {
        const savedTestimonial = await newTestimonial.save();
        res.status(201).json(savedTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.status(200).json(testimonials);
    } catch (error) {
        // Handle any errors
        res.status(500).json({ message: error.message });
    }
};
// Update testimonial
export const updateTestimonial = async (req, res) => {
    const { name, text, rating } = req.body;
    const imageSrc = req.file ? req.file.path : '';

    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            req.params.id, 
            { name, text, imageSrc, rating }, 
            { new: true, runValidators: true }
        );

        if (!updatedTestimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }

        res.status(200).json(updatedTestimonial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Accept/Reject testimonial
export const acceptRejectTestimonial = async (req, res) => {
    const { id } = req.params;
    const { action } = req.body;

    if (!['accept', 'reject'].includes(action)) {
        return res.status(400).json({ message: 'Invalid action' });
    }

    try {
        // Perform database operation based on action
        if (action === 'reject') {
            await Testimonial.findByIdAndDelete(id);
        } else if (action === 'accept') {
            await Testimonial.findByIdAndUpdate(id, { accepted: true });
        }
        res.status(200).json({ message: 'Testimonial updated' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}


export const deleteTestimonial = async (req, res) => {
    try {
        const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
        if (!testimonial) {
            return res.status(404).json({ message: 'Testimonial not found' });
        }
        res.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};