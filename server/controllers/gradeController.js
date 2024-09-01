import Grade from '../libs/models/Grade.js';
import fs from 'fs';
import path from 'path';

// Add a new grade
export const addGrade = async (req, res) => {
    try {
      const { grade } = req.body;
      const pdfFile = req.file;
  
      if (!grade || !pdfFile) {
        return res.status(400).json({ message: 'Please provide all required fields' });
      }
  
      // Check if the grade already exists
      const existingGrade = await Grade.findOne({ grade });
      if (existingGrade) {
        return res.status(409).json({ message: 'Grade already exists' });
      }
  
      // If the grade doesn't exist, create a new one
      const newGrade = new Grade({
        grade,
        pdfName: pdfFile.originalname,
        pdfPath: pdfFile.path,
      });
  
      await newGrade.save();
      res.status(201).json({ message: 'Grade added successfully', grade: newGrade });
    } catch (error) {
      console.error('Error in addGrade function:', error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  };
  

// Update an existing grade
export const updateGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade } = req.body;
    const pdfFile = req.file;

    // Find the existing grade
    const existingGrade = await Grade.findById(id);
    if (!existingGrade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    // Update the grade information
    const updatedData = { grade };
    if (pdfFile) {
      updatedData.pdfName = pdfFile.originalname;
      updatedData.pdfPath = pdfFile.path;

      // Delete the old PDF if a new one is uploaded
      if (existingGrade.pdfPath && fs.existsSync(existingGrade.pdfPath)) {
        fs.unlinkSync(existingGrade.pdfPath); // Ensure this path is correct
      }
    }

    const updatedGrade = await Grade.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({ message: 'Grade updated successfully', grade: updatedGrade });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Delete a grade
export const deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedGrade = await Grade.findByIdAndDelete(id);

    if (!deletedGrade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    // Delete the PDF file associated with the grade
    if (deletedGrade.pdfPath && fs.existsSync(deletedGrade.pdfPath)) {
      fs.unlinkSync(deletedGrade.pdfPath); // Ensure this path is correct
    }

    res.status(200).json({ message: 'Grade deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all grades
export const getGrades = async (req, res) => {
  try {
    const grades = await Grade.find();
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Edit a grade - Separate function for more detailed control (if needed)
export const editGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const { grade } = req.body;

    // Find the existing grade
    const existingGrade = await Grade.findById(id);
    if (!existingGrade) {
      return res.status(404).json({ message: 'Grade not found' });
    }

    // Update the grade information
    const updatedData = { grade };
    const updatedGrade = await Grade.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({ message: 'Grade updated successfully', grade: updatedGrade });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
