import { FC, ReactElement } from "react";

export const HeroSection: FC = (): ReactElement => {
  return (
    <section
      data-testid="hero"
      className="flex items-center justify-center flex-col gap-x-6 h-[400px] w-auto"
    >
      <div className="flex flex-col items-center h-auto gap-y-4 justify-center md:w-[684px] w-fit px-6">
        <h1 className="text-4xl font-bold">Berrylabs Pricing</h1>
        <h2 className="text-secondary text-center text-lg font-thin leading-relaxed md:w-[520px] w-full">
          Automate Without Breaking the Bank: Affordable Solutions for Every
          Business.
        </h2>
      </div>
    </section>
  );
};
