import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const CreateAccount = () => {
  return (<>
    <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8 bg-purple-100">
<div className="bg-white shadow-md rounded-md p-6 max-w-md w-full mt-1 md:mt-0">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>
  
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label htmlFor="first name" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
              <div className="mt-2">
                <input type="string" autoComplete="string" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
            <div>
              <label htmlFor="last name" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
              <div className="mt-2">
                <input type="string" autoComplete="string" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>
          </div>
          <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
  
          <div>
            <Link to="/user-home">
              <button type="submit" className="flex w-full justify-center rounded-md bg-fuchsia-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-600">Sign in</button>
            </Link>
          </div>
        </form>
  
        <p className="mt-10 text-center text-sm text-gray-500">Already have an account?
          <Link to="/accounts" className="font-semibold text-indigo-600 hover:text-indigo-500">
            {" "} Log In
          </Link>
        </p>
      </div>
      </div>
    </div>
  </>
  );
}

export default CreateAccount;