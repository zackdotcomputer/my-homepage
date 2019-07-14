// Created 7/2019 by Zack Sheppard (zacksheppard.com)

import "../styles/master.scss";

import Page from "../js/layout/Page";
import ImagePane from "../js/components/ImagePane";
import ContentPane from "../js/components/ContentPane";
import ResumeSection from "../js/content/Resume";
import PresentFocus from "../js/content/PresentFocus";
import SplitSection from "../js/layout/SplitSection";

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
