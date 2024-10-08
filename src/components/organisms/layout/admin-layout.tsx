import React from "react";
import Navbar from "../../molecule/navbar/navbar";
import Sidebar from "../../molecule/sidebar/sidebar";
import { Input } from "../../atom/input/input";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="drawer bg-base-200 min-h-screen  lg:drawer-open">
      <Input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <Navbar />
      <Sidebar />
      <div className="drawer-content pt-[69px]">{children}</div>
    </div>
  );
}
