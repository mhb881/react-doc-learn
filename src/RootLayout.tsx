import { Suspense } from "react";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router";

// 布局组件
const RootLayout = () => {
  return (
    <div className="app-container flex h-screen">
      <SideBar />
      <div className="flex-1 overflow-auto px-8">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default RootLayout;
