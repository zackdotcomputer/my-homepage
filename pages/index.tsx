// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import "../styles/master.scss";
import Page from "../js/layout/Page";
import ImagePane from "../js/sections/ImagePane";
import ContentPane from "../js/sections/ContentPane";
import HomeWelcome from "../js/content/HomeWelcome";

const Index = () => (
  <Page>
    <ContentPane>
      <HomeWelcome />
    </ContentPane>
    <ImagePane />
  </Page>
);

export default Index;
