// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import ContentPane from "../src/components/ContentPane";
import ImagePane from "../src/components/ImagePane";
import HomeWelcome from "../src/content/HomeWelcome";
import Page from "../src/layout/Page";
import SplitSection from "../src/layout/SplitSection";

const Index = () => (
  <Page>
    <ImagePane />
    <ContentPane>
      <SplitSection
        id="welcome"
        className="home-welcome"
        image={<img src="/static/img/zack-suited.jpg" alt="Zack in a suit" />}
      >
        <HomeWelcome />
      </SplitSection>
    </ContentPane>
  </Page>
);

export default Index;
