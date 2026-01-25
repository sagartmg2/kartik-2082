import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router";
import { setLogin } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  console.log({ errors });

  const handleFormSubmit = (data) => {
    axios
      .post(
        `${import.meta.env.VITE_SERVER_URL}/signup`,
        {
          email: data.email,
          password: data.password,
          name: data.name,
        },
        {},
      )
      .then((res) => {
        console.log(res.data.accessToken);
        localStorage.setItem("accessToken", res.data.accessToken);
        dispatch(setLogin()); // change in redux userStore
        navigate("/dashboard");
        // setIsLoggedIn(true); // was changeing in App.jsx
      })
      .catch((err) => {
        // setError("email", {
        //   type: "server",
        //   message: "email is already required",
        // });
        // console.log(err.response.data.errors);

        err.response.data.errors.forEach((fieldErr) => {
          setError(fieldErr.field, {
            type: "server",
            message: fieldErr.message,
          });
        });
      });
  };

  return (
    <div>
      <h1>Signup Form {import.meta.env.VITE_SERVER_URL}</h1>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mb-4">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input
            id="name"
            placeholder="name"
            className="border py-4 px-8"
            {...register("name", { required: true })}
          />
          <div>
            {errors.name && (
              <span className="text-red-500">
                {errors.name.message || "this field is required"}
              </span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <input
            placeholder="email"
            className="border py-4 px-8"
            {...register("email", { required: true })}
          />
          <div>
            {errors.email && (
              <span>{errors.email.message || "this field is required"}</span>
            )}
          </div>
        </div>
        <div className="mb-4 relative inline-block ">
          <input
            placeholder="password"
            type="text"
            className={`border py-4 px-8 ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: true,
              minLength: { value: 8, message: "min 8 characters required " },
            })}
          />
          <div>
            {errors.password && (
              <span>{errors.password.message || "This fired is required"}</span>
            )}
          </div>
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
