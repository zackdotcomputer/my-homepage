// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import Page from "../src/layout/Page";
import ImagePane from "../src/components/ImagePane";
import ContentPane from "../src/components/ContentPane";
import HomeWelcome from "../src/content/HomeWelcome";
import SplitSection from "../src/layout/SplitSection";

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
