import { Button } from "@/components/atoms/button";
import { FC, ReactElement } from "react";

export const CTASection: FC = (): ReactElement => {
  return (
    <section
      data-testid="cta"
      className="flex flex-col w-full items-center justify-center gap-y-10 h-[478px]"
    >
      <div className="flex flex-col gap-y-6">
        <h1 className="w-full max-w-screen-lg text-center md:text-6xl text-3xl px-6 font-bold">
          Haven{"'"}t found which package is right for you?
        </h1>
        <p className="text-secondary md:text-2xl text-lg text-center">
          We{"'"}ve got you covered! Talk to our experts to find the best
          solution for you, anytime for free!
        </p>
      </div>
      <Button size="lg">Talk To Expert</Button>
    </section>
  );
};
