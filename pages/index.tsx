// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import "../styles/master.scss";
import Page from "../js/layout/Page";
import ImagePane from "../js/components/ImagePane";
import ContentPane from "../js/components/ContentPane";
import HomeWelcome from "../js/content/HomeWelcome";
import ResumeSection from "../js/content/Resume";
import PresentFocus from "../js/content/PresentFocus";
import Thanks from "../js/content/Thanks";

const Index = () => (
  <Page>
    <ImagePane />
    <ContentPane>
      <HomeWelcome />
      <PresentFocus />
      <ResumeSection />
      <Thanks />
    </ContentPane>
  </Page>
);

export default Index;
