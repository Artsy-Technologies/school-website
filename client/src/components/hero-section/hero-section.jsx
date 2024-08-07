import './hero-section.css';

const HeroSection = () => {
  return (
    <div className="herosection__container">
      <div className="herosection__content">
        <div className="content__heading">
          <h1 className="content__heading--main">
            <span className="heading__main--white">
              Welcome to&nbsp;
            </span>
            <span className="heading__main--color">
              Sri Murugha Rajendraswamy CBSE School
            </span>
          </h1>
          <h2 className="content__heading--sub">
            <span className="heading__sub--white">
              Where Young Minds Blossoms and&nbsp;
            </span>
            <span className="heading__sub--color">
              Dreams Take Flight.
            </span>
          </h2>
        </div>
        <div className="content__main">
          <div className="content__main--description">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a
            lifetime. Join us as we embark on an exciting educational
            journey together!
          </div>
          <div className="content__main--btn">
            Admission is Open, Grab your seat now
          </div>
        </div>
      </div>
      <div className="herosection__image">
        <div className="hero__image--circle">
          {/* image container */}
        </div>
        <div className="hero__image--content">
          <h2>Shaping future for over 2500+ students</h2>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;