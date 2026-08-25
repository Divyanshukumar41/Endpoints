import React from "react";
import Sidebar from "../../Components/Pages/Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <main className="h-screen">
      <div className="flex items-start h-full">
        <Sidebar />
        <div className="w-full h-full">
          <Header />
          <section className="p-6">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
};

export default UserLayout;
