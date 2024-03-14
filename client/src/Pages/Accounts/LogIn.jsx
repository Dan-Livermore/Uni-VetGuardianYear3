import { Link, Form, redirect, useActionData } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Image from "../../assets/Accounts/LogInBackground.jpg";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = useActionData();

  // Get the data from the fields in the form.
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="flex min-h-screen bg-white dark:bg-gray-900">
        <div className="w-8/12 bg-white">
          <img
            src={Image}
            alt="Animal Image"
            className="object-cover h-full"
          />
        </div>
        <div className="bg-white dark:bg-gray-900  shadow-md w-4/12 p-8 pt-20">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-300">
            Sign In
          </h2>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form method="post" action="/log-in" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
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
                    className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-300"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <Link to="/forgot-password">
                      <p className="font-semibold text-indigo-600 dark:text-indigo-700 hover:text-indigo-500 dark:hover:text-indigo-800">
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
                  className="bg-red-100 dark:bg-red-500 border border-red-400 dark:border-red-700 text-red-700 dark:text-white px-4 py-3 rounded relative"
                  role="alert"
                >
                  <strong className="font-bold">Error! </strong>
                  <span className="block sm:inline">{data.error}</span>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Sign in
                </button>
              </div>
            </Form>

            <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-300 pb-12">
              Don't have an account?
              <Link
                to="/sign-up"
                className="font-semibold text-indigo-600 dark:text-indigo-700 hover:text-indigo-500 dark:hover:text-indigo-800"
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
  // Get the data from the form
  const data = await request.formData();

  const email = data.get("email");
  const password = data.get("password");

  console.log(email, password);
  // Send the data to the server to validate password using bcrypt
  try {
    const response = await axios.post("http://localhost:1111/login", {
      email,
      password,
    });

    console.log("Response from server:", response.data);
    if (response.data.token) {
      // Store the token in local storage or session storage
      localStorage.setItem("token", response.data.token);
      // Redirect to account page
      return redirect("/account");
    } else {
      return { error: error.response.data.error || 'An error occurred.' };
    }
  } catch (error) {
    console.error("Error:", error.response.data);
    return { error: error.response.data.error || 'An error occurred.', statusCode: error.response.status };
  }
};

