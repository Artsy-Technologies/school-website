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

export default AboutPage;
