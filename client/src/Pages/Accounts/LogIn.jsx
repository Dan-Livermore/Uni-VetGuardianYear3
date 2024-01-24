import { Link, Form, redirect, useActionData } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Image from "../../assets/LogInBackground.jpg";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = useActionData();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="w-8/12 bg-white">
          <img
            src={Image}
            alt="Animal Image"
            className="object-cover h-full"
          />
        </div>
        <div className="bg-white shadow-md w-4/12 p-8 pt-20">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In
          </h2>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form method="post" action="/log-in" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link to="/forgot-password">
                      <p className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    type="password"
                    onChange={handlePasswordChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {data && data.error && (
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error! </strong>
                  <span className="block sm:inline">{data.error}</span>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Sign in
                </button>
              </div>
            </Form>

            <p className="mt-10 text-center text-sm text-gray-500 pb-12">
              Don't have an account?
              <Link
                to="/sign-up"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                {""} Sign up today
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;

export const HandleLogIn = async ({ request }) => {
  const data = await request.formData();

  const email = data.get("email");
  const password = data.get("password");

  console.log(email, password);
  try {
    const response = await axios.post("http://localhost:1111/login", {
      email,
      password,
    });

    console.log("Response from server:", response.data);
    if (response.data.token) {
      // Store the token in local storage or session storage
      localStorage.setItem("token", response.data.token);
      // Redirect to account page or perform other actions
      return redirect("/account");
    } else {
      return { error: error.response.data.error || 'An error occurred.' };
    }
  } catch (error) {
    console.error("Error:", error.response.data);
    return { error: error.response.data.error || 'An error occurred.', statusCode: error.response.status };
  }
};

