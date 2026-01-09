import React from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute() {
  // let isLoggedIn = false;
  //   let isLoggedIn = true;

  let accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
