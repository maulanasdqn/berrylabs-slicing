import { FC, ReactElement } from "react";
import { HeroSection } from "./hero";
import { CTASection } from "./call-to-action";
import { PricingSection } from "./pricing";

export const LandingModule: FC = (): ReactElement => {
  return (
    <section className="flex max-w-[1440px] w-full relative items-center flex-col h-auto px-8">
      <HeroSection />
      <PricingSection />
      <CTASection />
    </section>
  );
};
