import React from "react";
import { Outlet } from "react-router";

function ProtectedRoute() {
  // user value in redux ? logged in  : not
  return <Outlet />;
}

export default ProtectedRoute;
