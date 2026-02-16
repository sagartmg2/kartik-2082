import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import orderApi from "../api/order.api";

export default function OrderVerification() {
  const [params] = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    let token = params.get("data");
    if (token) {
      orderApi.verification({ token }).then((res) => {
        // navigate("/orders");
      });
    }
  }, []);

  return <div>
    {
        isVerifying?
        <p> verifing proces....</p>
        :
        <p>
            
        </p>
    }

  </div>;
}
