import { Navbar } from "@/components/molecules";
import { TNavbarItem } from "@/components/molecules/navbar/navbar.type";
import { FC, ReactElement } from "react";

export const HeaderSection: FC = (): ReactElement => {
  const navbarItem: TNavbarItem[] = [
    {
      path: "",
      text: "Product",
      childrens: [
        {
          path: "/product",
          text: "Product Unggulan",
        },
      ],
    },
    {
      path: "",
      text: "Solution",
      childrens: [
        {
          path: "/solution",
          text: "Our Solution",
        },
      ],
    },

    {
      path: "/",
      text: "Pricing",
    },
  ];

  return (
    <header className="w-full h-auto bg-white max-w-[1440px] px-8">
      <Navbar items={navbarItem} />
    </header>
  );
};
