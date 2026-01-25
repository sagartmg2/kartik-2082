import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router";
import { setLogin } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  console.log({ errors });
  /* 
    CRUD operations
        C - create
        R read
        U udpated
        D delelete


    http request methods
        POST - create
        GET - read
        PUT/PATCH - update
        DELETE - delete


    http status codes
    2 : success
        200
        201
        203
        204

    3: redirection
        304
        308
    
    4:  (client/react side error)
        400  -- bad request
        401  -- unauthenticated // not logged in 
        403  -- unatuthorized  
        404  -- route not found
        405  -- route matched but request method 
        422  -- unprocessable entity : similar to 400
        429  -- DDOS attack , rate limit 

    5: server side error
        500 :  server errror : unable to handle codes properly
        503 :  gateway error 
        504
  */

  const handleFormSubmit = (data) => {
    axios
      .post(
        "https://dummyjson.com/auth/login",
        {
          // username: "emilys",
          // password: "emilyspass",
          username: data.email,
          password: data.password,
          expiresInMins: 30,
        },
        {}
      )
      .then((res) => {
        console.log(res.data.accessToken);
        localStorage.setItem("accessToken", res.data.accessToken);
        dispatch(setLogin()); // change in redux userStore
        navigate("/dashboard");
        // setIsLoggedIn(true); // was changeing in App.jsx
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mb-4">
          <input
            placeholder="email"
            className="border py-4 px-8"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span>{errors.email.message || "this field is required"}</span>
          )}
        </div>
        <div className="mb-4 relative inline-block ">
          <input
            placeholder="password"
            type="text"
            className={`border py-4 px-8 ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", { required: true, minLength: 8 })}
          />
          {errors.password && (
            <span>
              {errors.password.message || "Min 8 characters required."}
            </span>
          )}
          <FaRegEye className="absolute right-4 top-4 text-2xl" />
          {/* <FaRegEyeSlash className="absolute right-4 top-4 text-2xl" /> */}
        </div>
        <div>
          <Button title="submit" />
        </div>
      </form>
    </div>
  );
}
