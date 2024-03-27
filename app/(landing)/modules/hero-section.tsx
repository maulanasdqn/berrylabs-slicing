import { FC, ReactElement } from "react";

export const HeroSection: FC = (): ReactElement => {
  return (
    <section className="flex items-center justify-center flex-col gap-x-6 h-[400px] w-full">
      <div className="flex flex-col items-center w-1/2 h-auto gap-y-4 justify-center">
        <h1 className="text-4xl font-bold">Berrylabs Pricing</h1>
        <h2 className="text-secondary text-center text-lg font-thin">
          Automate Without Breaking the Bank: Affordable Solutions for Every
          Business.
        </h2>
      </div>
    </section>
  );
};
