import React, { PropsWithChildren } from "react";
import ResponsiveLogo from "../../contents/ResponsiveLogo";
import WelcomeIntro from "../../contents/WelcomeIntro";
import Nav from "./Nav";

const NormcoreLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="container mx-auto flex flex-col justify-center min-h-screen">
      <div className="lg:w-2/3 mx-4">
        <header>
          <ResponsiveLogo />
          <WelcomeIntro />
          <Nav />
        </header>
        <div className="mx-4 my-8">{children}</div>
      </div>
    </div>
  );
};

export default NormcoreLayout;
