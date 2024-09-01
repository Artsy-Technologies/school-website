import Banner from "../components/banner/Banner";
import { History } from "../components/history/history";
import { Messages } from "../components/messages/messages";
import { useData } from "../context/BannerContext";
import VisionMissionCard from "../components/CardPages/MissionVission";
import AwardsAndRecognition from "../components/CardPages/AwardsAndRecognition";
function AboutPage() {
  const { aboutPage } = useData();

  return (
    <div className="flex flex-col gap-2 dark:bg-darkmode">
      <Banner
        main={aboutPage.title}
        content={aboutPage.content}
        buttonText={aboutPage.buttonText}
      />
      <Messages />
      <VisionMissionCard />
      <AwardsAndRecognition/>
      <History />
      
    </div>
  );
}

export default AboutPage;
