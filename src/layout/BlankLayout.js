import React from "react";
import { Outlet } from "react-router-dom";

function BlankLayout() {
  return (
    <div>
      <h1>Blank Layout</h1>
      <Outlet />
    </div>
  );
}

export default BlankLayout;
