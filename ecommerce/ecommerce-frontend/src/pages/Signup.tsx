import axios from "axios";
import BreadCrumb from "../components/BreadCrumb";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import notify from "../helpers/notify";
import { login } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  interface ValidationError {
    field: string;
    message: string;
  }

  const [errors, setErrors] = useState<ValidationError[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("here");
    e.preventDefault();
    setErrors([]);

    const form = e.currentTarget;
    axios
      .post("http://localhost:3000/api/auth/signup", {
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        password: (form.elements.namedItem("password") as HTMLInputElement)
          .value,
        firstName: (form.elements.namedItem("firstName") as HTMLInputElement)
          .value,
        lastName: (form.elements.namedItem("lastName") as HTMLInputElement)
          .value,
        isSeller: (form.elements.namedItem("isSeller") as HTMLInputElement)
          .checked,
        // email: "testing@testing.com",
        // password: "password",
      })
      .then((res) => {
        console.log(res.data);
        dispatch(login(res.data));
        localStorage.setItem("accessToken", res.data.token);
        notify.success("login successful");
        // navigate("/");
      })
      .catch((err) => {
        notify.error(err.response.data.msg);

        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      });
  };

  return (
    <div className="bg-white">
      {/* Top header area */}
      <BreadCrumb title={"Login"} />

      {/* Main content */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="flex min-h-[62vh] items-center justify-center py-14">
          <div className="w-full max-w-md">
            <div className="rounded-md bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-200">
              <div className="px-10 py-10">
                <h2 className="text-center text-xl font-semibold text-slate-900">
                  Signup
                </h2>
                <p className="mt-1 text-center text-xs text-slate-500">
                  Please Signup using account detail bellow.
                </p>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input
                      name="firstName"
                      placeholder="firstName"
                      className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                    />
                    {errors.find((el) => el.field == "firstName")?.message}
                  </div>
                  <div>
                    <input
                      name="lastName"
                      placeholder="lastName"
                      className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                    />
                    {errors.find((el) => el.field == "lastName")?.message}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                      autoComplete="email"
                    />
                    {errors.find((el) => el.field == "email")?.message}
                  </div>

                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="h-11 w-full rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                      autoComplete="current-password"
                    />
                  </div>

                  <div>
                    <label htmlFor="isSeller">
                      Signup as both Buyer and Seller
                    </label>
                    <input
                      id="isSeller"
                      type="checkbox"
                      name="isSeller"
                      className="h-5 w-5 rounded border border-slate-200 bg-white px-4 text-sm text-slate-900 transition outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                    />
                  </div>

                  <div className="pt-1">
                    <a
                      href="#"
                      className="text-xs text-slate-500 hover:text-slate-700"
                    >
                      Forgot your password?
                    </a>
                  </div>

                  <button className="mt-1 h-11 w-full rounded bg-pink-600 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus:ring-4 focus:ring-pink-200 focus:outline-none">
                    Sign Up
                  </button>

                  <p className="pt-3 text-center text-xs text-slate-500">
                    Don't have an Account?
                    <a
                      href="#"
                      className="ml-1 text-slate-600 hover:text-pink-600"
                    >
                      Create account
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
