// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import "../styles/master.scss";
import Page from "../js/layout/Page";
import ImagePane from "../js/components/ImagePane";
import ContentPane from "../js/components/ContentPane";
import HomeWelcome from "../js/content/HomeWelcome";
import ResumeSection from "../js/content/Resume";
import PresentFocus from "../js/content/PresentFocus";
import Thanks from "../js/content/Thanks";
import SplitSection from "../js/layout/SplitSection";

const Index = () => (
  <Page>
    <ImagePane />
    <ContentPane>
      <SplitSection
        id="welcome"
        className="home-welcome"
        image={<img src="/static/img/zack-suited.jpg" alt="A photo of Zack" />}
      >
        <HomeWelcome />
      </SplitSection>
      <SplitSection
        id="about-me"
        image={
          <img
            src="/static/img/zack-museum.jpg"
            alt="Zack, thinking in a museum"
          />
        }
      >
        <PresentFocus />
        <ResumeSection />
      </SplitSection>
      <SplitSection
        id="thanks"
        image={
          <img src="/static/img/zack-forest.jpg" alt="Zack, in the forest" />
        }
      >
        <Thanks />
      </SplitSection>
    </ContentPane>
  </Page>
);

export default Index;
