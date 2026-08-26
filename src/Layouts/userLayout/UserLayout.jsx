import React, { useState } from "react";
import Sidebar from "../../Components/Pages/Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="h-screen">
      <div className="flex items-start h-full">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="w-full h-full">
          <Header isOpen={isOpen} />
          <section className="p-6">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
};

export default UserLayout;
