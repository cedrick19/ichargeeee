import { PropsWithChildren } from "react";

import { Footer, NavBar } from "@/components";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-white bg-[url('@/assets/green-line.svg')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-10">
        <NavBar />

        <main>{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
