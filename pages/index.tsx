// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import Page from "../js/layout/Page";
import ImagePane from "../js/components/ImagePane";
import ContentPane from "../js/components/ContentPane";
import HomeWelcome from "../js/content/HomeWelcome";
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
    </ContentPane>
  </Page>
);

export default Index;
