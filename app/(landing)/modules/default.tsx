import { FC, Fragment, ReactElement } from "react";
import { HeaderSection } from "./header-section";
import { FooterSection } from "./footer-section";
import { HeroSection } from "./hero-section";

export const LandingModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <HeaderSection />
      <main className="flex relative items-center flex-col min-h-screen h-full">
        <HeroSection />
        <FooterSection />
      </main>
    </Fragment>
  );
};
