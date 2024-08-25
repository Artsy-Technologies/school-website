import PropTypes from "prop-types";
import { useAdmin } from "../../hooks/AdminContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ImageGallery() {
  const { isAdmin } = useAdmin();
  const [editingImage, setEditingImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [newImage, setNewImage] = useState({ file: null, title: "" });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("/api/images");
        setGalleryImages(response.data);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleEdit = (image) => {
    setEditingImage(image);
  };

  const handleDelete = async (image) => {
    try {
      await axios.delete(`/api/images/${image._id}`);
      setGalleryImages(galleryImages.filter((img) => img._id !== image._id));
      toast.success("Image deleted successfully!");
    } catch (error) {
      console.error("Failed to delete image:", error);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("title", editingImage.title);
      if (editingImage.file) {
        formData.append("file", editingImage.file); // Match field name
      }
  
      const response = await axios.put(
        `/api/images/${editingImage._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      setGalleryImages(
        galleryImages.map((img) =>
          img._id === response.data._id ? response.data : img
        )
      );
      setEditingImage(null);
      toast.success("Image saved successfully!");
    } catch (error) {
      console.error("Failed to update image:", error);
    }
  };
  
  const handleAdd = async () => {
    if (!newImage.title) {
      toast.error("Please add title to image");
      return;
    }
    if (!newImage.file) {
      toast.error("Please select a file to upload");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("title", newImage.title);
      formData.append("file", newImage.file);

      const response = await axios.post("/api/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Add the new image to the gallery
      setGalleryImages([...galleryImages, response.data]);

      // Reset newImage state
      setNewImage({ file: null, title: "" });

      toast.success("Image added successfully!");
    } catch (error) {
      console.error("Failed to add image:", error);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {galleryImages.length > 0 ? (
          galleryImages.map((image) => (
            <div
              key={image._id}
              className="relative rounded-lg border border-gray-300 shadow-lg overflow-hidden"
            >
              <img
                src={`http://localhost:8000/${image.image}`}
                alt={image.title}
                className="w-full h-64 object-cover"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                {isAdmin && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <button
                      className="px-2 py-1 bg-blue-500 rounded hover:bg-blue-700"
                      onClick={() => handleEdit(image)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 rounded hover:bg-red-700"
                      onClick={() => handleDelete(image)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>No images available.</p>
        )}
      </div>

      {/* Add Image Button */}
      {isAdmin && !editingImage && (
        <div className="fixed bottom-4 right-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
            onClick={() =>
              setEditingImage({ file: null, title: "", _id: null })
            }
          >
            Add Image
          </button>
        </div>
      )}

      {/* Add/Edit Image Form */}
      {isAdmin && editingImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">
              {editingImage._id ? "Edit Image" : "Add Image"}
            </h2>
            <div className="mb-4">
              <input
                type="text"
                value={editingImage._id ? editingImage.title : newImage.title}
                placeholder="Image Title"
                className="w-full p-2 border border-gray-300 rounded mb-2"
                onChange={(e) =>
                  editingImage._id
                    ? setEditingImage({
                        ...editingImage,
                        title: e.target.value,
                      })
                    : setNewImage({ ...newImage, title: e.target.value })
                }
              />
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    console.log("File selected:", file);
                    editingImage._id
                      ? setEditingImage({ ...editingImage, file })
                      : setNewImage({ ...newImage, file });
                  }
                }}
              />
            </div>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => (editingImage._id ? handleSave() : handleAdd())}
            >
              {editingImage._id ? "Save" : "Add"}
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 ml-2"
              onClick={() => setEditingImage(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

ImageGallery.propTypes = {
  initialImages: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
