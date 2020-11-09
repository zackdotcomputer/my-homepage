// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from "react";
import BackToTop from "./BackToTop";

const ContentPane = ({ children }: PropsWithChildren<{}>) => {
  const [significantlyScrolled, setSignificantlyScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || 0;
    const significance = 200;

    const isNowSignificant = scrollTop >= significance;

    setSignificantlyScrolled(isNowSignificant);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="content" className={significantlyScrolled ? "scrolled" : ""}>
      <BackToTop />
      {children}
    </div>
  );
};

export default ContentPane;
