// Library Import
import React from "react";

// File Import
import { ChildrenType } from "@/types";
import { Header, Footer } from "@/component";
import { ReduxProvider } from "@/store/provider";

const Layout = ({ children }: ChildrenType) => {
  return (
    <div>
      <ReduxProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </ReduxProvider>
    </div>
  );
};

export default Layout;
