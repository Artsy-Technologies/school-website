import PropTypes from "prop-types";

// Card Component
const Card = ({ icon, heading, paragraph, cardHeight }) => {
  return (
    <div className={`relative p-6 w-[450px] ${cardHeight}`}>
      {/* Icon Container */}
      <div
        className="absolute -top-0 left-8 rounded-xl z-30 p-2 flex items-center justify-center shadow-lg"
        style={{ backgroundColor: "#fb6c1c" }}
      >
        <img className="h-8 w-8" loading="lazy" alt="" src={icon} />
      </div>

      {/* Card Container */}
      <div className="relative rounded-xl p-3 pt-8 shadow-2xl bg-white dark:bg-gray-700 border flex flex-col justify-between h-full">
        <h3 className="text-xl font-bold mb-2 text-purple-600 dark:text-white">
          {heading}
        </h3>
        <div className="text-base font-normal text-gray-600 dark:text-gray-100 flex-grow">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  cardHeight: PropTypes.string,
};

// Container Component
const Container = ({
  sectionTitle,
  sectionDescription,
  buttonText,
  buttonLink,
  cardsData,
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 px-4 mt-20 mb-20">
      <section className="text-center max-w-3xl">
        <a href={buttonLink}>
          <button className="border-2 border-purple-700 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500">
            {buttonText}
          </button>
        </a>
        <h1 className="text-4xl font-bold mt-4 text-white">{sectionTitle}</h1>
        <p className="text-lg text-white mt-2">{sectionDescription}</p>
      </section>
      <section className="flex flex-wrap justify-center gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            heading={card.heading}
            paragraph={card.paragraph}
            cardHeight={card.cardHeight} // Pass the height prop here
          />
        ))}
      </section>
    </div>
  );
};

Container.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  sectionDescription: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      paragraph: PropTypes.string.isRequired,
      cardHeight: PropTypes.string,
    })
  ).isRequired,
};

export default Container;
