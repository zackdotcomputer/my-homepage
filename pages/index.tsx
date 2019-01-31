// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import "../styles/master.scss";
import Page from "../js/layout/Page";
import ImagePane from "../js/sections/ImagePane";
import ContentPane from "../js/sections/ContentPane";
import HomeWelcome from "../js/content/HomeWelcome";
import ResumeSection from "../js/content/Resume";
import PresentFocus from "../js/content/PresentFocus";

const Index = () => (
  <Page>
    <ImagePane />
    <ContentPane>
      <HomeWelcome />
      <ResumeSection />
      <PresentFocus />
    </ContentPane>
  </Page>
);

export default Index;
