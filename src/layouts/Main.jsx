import React from "react";
import { Outlet } from "react-router-dom";

export default function Main({ children }) {
  return (
    <div className="w-[420px] h-screen bg-white mx-auto flex flex-col">
      <Outlet />
    </div>
  );
}
