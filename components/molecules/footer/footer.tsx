"use client";
import { FC, ReactElement } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export const Footer: FC = (): ReactElement => {
  return (
    <footer
      data-testid="footer"
      className="flex p-6 justify-between items-start w-full bg-grey gap-x-10"
    >
      <div className="flex flex-col gap-y-6 w-3/4">
        <figure className="flex items-center gap-x-2">
          <Image src="/logo.svg" width={58} height={51} alt="Logo Navbar" />
          <figcaption className="font-medium text-lg">BerryLabs.io</figcaption>
        </figure>

        <p className="text-secondary font-normal font-sans text-md">
          Unlocking the power of AI precision, we revolutionize the way
          businesses operate. Our innovative solution automates repetitive
          tasks, saving valuable time and boosting productivity.
        </p>

        <div className="flex gap-x-6 items-center">
          <Icon icon="fa:facebook" />
          <Icon icon="fa:twitter" />
          <Icon icon="fa:linkedin" />
          <Icon icon="fa:instagram" />
        </div>
      </div>

      <div className="w-full flex justify-start px-8">
        <div className="w-full flex gap-x-8 justify-between">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-black font-bold font-sans text-md mb-4">
              Pages
            </h1>
            <span className="text-black text-sm font-sans text-md">Home</span>
            <span className="text-black text-sm font-sans text-md">
              Pricing
            </span>
            <span className="text-black text-sm font-sans text-md">
              Solution
            </span>
            <span className="text-black text-sm font-sans text-md">Demo</span>
          </div>

          <div className="flex flex-col gap-y-4">
            <h1 className="text-black font-bold font-sans text-md mb-4">
              Service
            </h1>

            <span className="text-black text-sm font-sans text-md">
              CV Screening
            </span>
            <span className="text-black text-sm font-sans text-md">
              Bank Statement
            </span>
            <span className="text-black text-sm font-sans text-md">
              Invoice Analyzer
            </span>
            <span className="text-black text-sm font-sans text-md">
              Regularity Auditor
            </span>
          </div>

          <div className="flex flex-col gap-y-4">
            <h1 className="text-black font-bold font-sans text-md mb-4">
              Contact
            </h1>

            <span className="text-black flex items-center gap-x-2 text-sm font-sans text-md">
              <Icon icon="ph:phone-fill" width={18} /> +6282126753060
            </span>

            <span className="text-black flex items-center gap-x-2 text-sm font-sans text-md">
              <Icon icon="mdi:email" width={18} /> contact@berrytrada.com
            </span>

            <span className="text-black flex items-center gap-x-2 text-sm font-sans text-md">
              <Icon icon="mdi:map-marker" width={18} /> Bandung, Indonesia
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
