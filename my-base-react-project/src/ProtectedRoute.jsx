import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute({ isLoggedIn }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // let accessToken = localStorage.getItem("accessToken");

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/auth/me", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     })
  //     .then((res) => {
  //       setIsLoggedIn(true);
  //       setIsLoading(false);
  //     })
  //     .catch((res) => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) {
  //   return <p>loading... please wait.</p>;
  // }

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
