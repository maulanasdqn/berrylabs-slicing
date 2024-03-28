import { FC, PropsWithChildren, ReactElement } from "react";
import { FooterSection } from "./modules/footer";
import { HeaderSection } from "./modules/header";

const LandingTemplate: FC<PropsWithChildren> = ({ children }): ReactElement => {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <HeaderSection />
      {children}
      <FooterSection />
    </main>
  );
};

export default LandingTemplate;
