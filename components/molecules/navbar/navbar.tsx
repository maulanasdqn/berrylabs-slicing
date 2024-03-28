"use client";
import { FC, ReactElement } from "react";
import { TNavbar } from "./navbar.type";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Button } from "@/components/atoms/button";

export const Navbar: FC<TNavbar> = (props): ReactElement => {
  return (
    <nav
      data-testid="navbar"
      className="p-4 bg-white flex items-center w-full justify-between"
    >
      <div className="flex items-center gap-x-10 w-full">
        <figure className="flex items-center gap-x-2 mr-[60px]">
          <Image src="/logo.svg" width={58} height={51} alt="Logo Navbar" />
          <figcaption className="font-medium text-md text-black">
            BerryLabs.io
          </figcaption>
        </figure>

        <ul className="flex items-center w-full gap-x-6">
          {props?.items?.map((nav, key) => (
            <li key={key} className="p-3">
              {nav?.childrens ? (
                <div className="flex items-center gap-x-2 cursor-pointer">
                  <span className="text-md font-medium font-sans">
                    {nav.text}
                  </span>
                  <Icon icon="fluent:chevron-down-16-filled" />
                </div>
              ) : (
                <Link
                  className="text-md font-medium font-sans"
                  href={nav.path!}
                >
                  {nav.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8 w-full justify-end">
        <Button size="md">Get Started</Button>
      </div>
    </nav>
  );
};
