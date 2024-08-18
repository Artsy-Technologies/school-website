import Banner from "../components/banner/Banner";
import { History } from "../components/history/history";
import { useData } from "../context/BannerContext";

function AboutPage() {
  const { aboutPage } = useData();

  return (
    <div className="flex flex-col gap-12 dark:bg-darkmode">
      <Banner
        main={aboutPage.title}
        content={aboutPage.content}
        buttonText={aboutPage.buttonText}
      />
      {/* Our Mission & Visions */}
      {/* Our Awards and Recognitions */}
      <History />
    </div>
  );
}

<<<<<<< HEAD

export default AboutPage
=======
export default AboutPage;
>>>>>>> 1fe29ea94989f24fb08de6ed6c59ca820b776309
