import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div className=" min- h-screen flex items-center justify-center dark:bg-gray-900">
        <div className="w-1/3 bg-white dark:bg-gray-900 dark:text-gray-300 p-8 rounded-xl shadow shadow-slate-300">
          <h1 class="text-4xl font-medium">Reset Password</h1>
          <p class="text-slate-500">Fill in the form to reset your password</p>

          <form action="" class="my-10">
            <div class="flex flex-col space-y-5">
              <label for="email">
                <p class="font-medium text-slate-700 dark:text-gray-300 pb-2">
                  Email address
                </p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <Link to="/password-request-sent">
                <button className="w-full py-3 font-medium bg-emerald-500 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-800 text-white dark:text-gray-300 rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                  <span>Reset password</span>
                </button>
              </Link>
              <p class="text-center">
                Don't have an account?{" "}
                <a
                  href="#"
                  class="text-indigo-600 dark:text-indigo-700 hover:text-indigo-500 dark:hover:text-indigo-600 font-medium inline-flex space-x-1 items-center"
                >
                  <Link to="/sign-up">
                    <span>Register now </span>
                  </Link>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
