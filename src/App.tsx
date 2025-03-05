import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Layout from "./layout/Layout";
import { AosInitializer } from "./lib/aosInitializer";
import { Toaster } from "@/components/ui/toaster";
import { Spinner } from "./components";

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-[100vh] items-center justify-center bg-[#E5E7E9]">
          <Spinner />
        </div>
      }
    >
      <Layout>
        <AosInitializer />
        <Outlet />
        {/* <FloatingButton /> */}
        <Toaster />
      </Layout>
    </Suspense>
  );
};

export default App;
