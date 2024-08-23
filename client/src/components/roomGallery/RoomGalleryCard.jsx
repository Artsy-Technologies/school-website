import { useState } from 'react';
import Image1 from "../../assets/RoomGallery/Image1.png";
import Image2 from "../../assets/RoomGallery/Image2.png";
import Image3 from "../../assets/RoomGallery/Image3.png";
import Image4 from "../../assets/RoomGallery/Image4.png";
import Image5 from "../../assets/RoomGallery/Image5.png";
import Image6 from "../../assets/RoomGallery/Image6.png";
import Image7 from "../../assets/RoomGallery/Image7.png";
import Image8 from "../../assets/RoomGallery/Image8.png";
import Image9 from "../../assets/RoomGallery/Image9.png";
import Image10 from "../../assets/RoomGallery/Image10.png";
import Image11 from "../../assets/RoomGallery/Image11.png";
import Image12 from "../../assets/RoomGallery/Image12.png";
import Image13 from "../../assets/RoomGallery/Image13.png";
import Image14 from "../../assets/RoomGallery/Image14.png";
import Image15 from "../../assets/RoomGallery/Image15.png";
import Image16 from "../../assets/RoomGallery/Image16.png";
import Image17 from "../../assets/RoomGallery/Image17.png";
import Image18 from "../../assets/RoomGallery/Image18.png";
import Image19 from "../../assets/RoomGallery/Image19.png";
import Image20 from "../../assets/RoomGallery/Image20.png";
import Card from "./CardRow";

const SubContainer = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  const cardsData = [
    {
      id: 'Classrooms',
      images: [
        { src: Image1, alt: "Classroom Image 1" },
        { src: Image2, alt: "Classroom Image 2" },
        { src: Image3, alt: "Classroom Image 3" },
        { src: Image4, alt: "Classroom Image 4" },
      ],
      heading: "Classrooms",
      paragraph:
        "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    },
    {
      id: 'Library',
      images: [
        { src: Image5, alt: "Library Image 1" },
        { src: Image6, alt: "Library Image 2" },
        { src: Image7, alt: "Library Image 3" },
        { src: Image8, alt: "Library Image 4" },
      ],
      heading: "Library",
      paragraph:
        "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    },
    {
      id: 'Science Lab',
      images: [
        { src: Image9, alt: "Science Lab Image 1" },
        { src: Image10, alt: "Science Lab Image 2" },
        { src: Image11, alt: "Science Lab Image 3" },
        { src: Image12, alt: "Science Lab Image 4" },
      ],
      heading: "Science Lab",
      paragraph:
        "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    },
    {
      id: 'Computer Lab',
      images: [
        { src: Image13, alt: "Science Lab Image 1" },
        { src: Image14, alt: "Science Lab Image 2" },
        { src: Image15, alt: "Science Lab Image 3" },
        { src: Image16, alt: "Science Lab Image 4" },
      ],
      heading: "Computer Lab",
      paragraph:
        "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills",
    },
    {
      id: 'Garden and Nature Area',
      images: [
        { src: Image17, alt: "Garden Image 1" },
        { src: Image18, alt: "Garden Image 2" },
        { src: Image19, alt: "Garden Image 3" },
        { src: Image20, alt: "Garden Image 4" },
      ],
      heading: "Garden and Nature Area",
      paragraph:
        "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    },
  ];

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredCards = selectedFilter === 'ALL'
    ? cardsData
    : cardsData.filter(card => card.id === selectedFilter);

  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-20">
      {/* Section Title */}
      <section className="text-center max-w-3xl mb-12">
        <a href="#">
          <button className="border-2 border-purple-700 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300">
            Our Gallery
          </button>
        </a>
        <h1 className="text-4xl font-bold mt-6 text-white">Our Rooms Gallery</h1>
        <p className="text-lg text-white mt-4">
          Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.
        </p>
      </section>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => handleFilterChange('ALL')}
          className={`py-2 px-6 rounded-lg ${selectedFilter === 'ALL' ? 'bg-purple-600 text-white' : 'bg-white dark:bg-gray-500 text-purple-600 dark:text-white hover:bg-purple-600 hover:text-white transition duration-300'}`}
        >
          ALL
        </button>
        {cardsData.map((card) => (
          <button
            key={card.id}
            onClick={() => handleFilterChange(card.id)}
            className={`py-2 px-6 rounded-lg ${selectedFilter === card.id ? 'bg-purple-600 text-white' : 'bg-white dark:bg-gray-500 text-purple-600 dark:text-white hover:bg-purple-600 hover:text-white transition duration-300'}`}
          >
            {card.heading}
          </button>
        ))}
      </div>

      {/* Render Cards */}
      <section className="flex flex-col justify-center gap-20 p-14 w-full">
        {filteredCards.map((card, index) => (
          <div key={index} className="w-full flex justify-center">
            <Card
              images={card.images}
              heading={card.heading}
              paragraph={card.paragraph}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SubContainer;
