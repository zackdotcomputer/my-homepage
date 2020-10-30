// Created 7/2019 by Zack Sheppard (zacksheppard.com)

import Page from "../src/layout/Page";
import ImagePane from "../src/components/ImagePane";
import ContentPane from "../src/components/ContentPane";
import ResumeSection from "../src/content/Resume";
import PresentFocus from "../src/content/PresentFocus";
import SplitSection from "../src/layout/SplitSection";

const Work = () => (
  <Page>
    <ImagePane />
    <ContentPane>
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
    </ContentPane>
  </Page>
);

export default Work;
