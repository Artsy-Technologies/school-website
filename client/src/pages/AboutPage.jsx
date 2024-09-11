import Banner from "../components/banner/Banner";
import { History } from "../components/history/history";
import { Messages } from "../components/messages/messages";
import { useData } from "../context/BannerContext";
import VisionMissionCard from "../components/CardPages/MissionVission";
import AwardsAndRecognition from "../components/CardPages/AwardsAndRecognition";
function AboutPage() {
  const { aboutPage } = useData();

  return (
    <div className="flex min-h-screen w-full flex-col gap-2 dark:bg-darkmode">
      <Banner
        main={aboutPage.title}
        content={aboutPage.content}
        buttonText={aboutPage.buttonText}
      />
      <Messages />
      <div className="max-w-full overflow-hidden">
        <VisionMissionCard />
        <AwardsAndRecognition />
      </div>
      <History />

    </div>
  );
}

export default AboutPage;
