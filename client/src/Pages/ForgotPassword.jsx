
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
  <div class="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <h1 class="text-4xl font-medium">Reset Password</h1>
      <p class="text-slate-500">Fill in the form to reset the password</p>

      <form action="" class="my-10">
          <div class="flex flex-col space-y-5">
              <label for="email">
                  <p class="font-medium text-slate-700 pb-2">Email address</p>
                  <input id="email" name="email" type="email" class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
              </label>
             
              <button class="w-full py-3 font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg border-purple-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                    
                    <span>Reset password</span>
              </button>
              <p class="text-center">Don't have an account? <a href="#" class="text-purple-600 font-medium inline-flex space-x-1 items-center">
                <Link to="/create-account">
                <span>Register now </span>
                </Link>
                </a></p>
          </div>
      </form>
  </div>
  </>
  );
};

export default ForgotPassword