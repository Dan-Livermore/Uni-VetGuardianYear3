import { Link, Form, redirect, useActionData } from "react-router-dom";
import Image from "../../assets/Accounts/SignUpBackground.jpg";
import axios from "axios";
import { useState } from "react";
import { useSnackbar } from "notistack";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const data = useActionData();
  const { enqueueSnackbar } = useSnackbar();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="w-8/12 bg-white">
          <img src={Image} alt="Animal Image" className="object-cover h-full" />
        </div>
        <div className="bg-white shadow-md w-4/12 p-8">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form method="post" action="/sign-up" className="space-y-6">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="string"
                      name="firstname"
                      autoComplete="string"
                      onChange={handleFirstnameChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="string"
                      name="lastname"
                      autoComplete="string"
                      onChange={handleLastnameChange}
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleEmailChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handlePasswordChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
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
                  className="flex w-full justify-center rounded-md bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Sign Up
                </button>
              </div>
            </Form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?
              <Link
                to="/log-in"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                {" "}
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

export const HandleSignUp = async ({ request, enqueueSnackbar }) => {
  const data = await request.formData();
  const email = data.get("email");
  const password = data.get("password");
  const firstname = data.get("firstname");
  const lastname = data.get("lastname");

  try {
    const response = await axios.post("http://localhost:1111/signup", {
      email,
      password,
      firstname,
      lastname,
    });
    console.log("Response from server:", response.data);
    if (response.data === "Account Created!") {
      // enqueueSnackbar("Your account has been created.", { variant: "success" });
      // return redirect("/account");
 
      try {
        const response = await axios.post("http://localhost:1111/login", {
          email,
          password,
        });

        console.log("Response from server:", response.data);
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          return redirect("/account");
        } else {
          return { error: error.response.data.error || "An error occurred." };
        }
      } catch (error) {
        console.error("Error:", error.response.data);
        return {
          error: error.response.data.error || "An error occurred.",
          statusCode: error.response.status,
        };
      }
    } else if (response.data === "Enter an email, a password and both names") {
      return {
        error: " Please enter an email address a password and both names",
      };
    } else {
      console.log(response.data);
      return { error: "An Error Has Occurred" };
    }
  } catch (error) {
    return { error: error.message };
  }
};
