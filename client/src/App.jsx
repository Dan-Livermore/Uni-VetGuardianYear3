import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from "react-router-dom";
import RootLayout from "./structure/RootLayout";
import PrivateRoutes from "./structure/PrivateRoutes";

import ImageClassifier from "./pages/ImageClassifier";
import PageNotFound from "./pages/PageNotFound";

// Landing Pages
import About from "./pages/LandingPages/About";
import Contact from "./pages/LandingPages/Contact";
import Home from "./pages/LandingPages/Home";
import Services from "./pages/LandingPages/Services";
import Terms from "./pages/LandingPages/Terms";

// Accounts Pages
import ForgotPassword from "./pages/Accounts/ForgotPassword";
import PasswordRequestSent from "./pages/Accounts/PasswordRequestSent";
import LogIn, { HandleLogIn } from "./pages/Accounts/LogIn";
import SignUp, { HandleSignUp } from "./pages/Accounts/SignUp.jsx";
import UserHome from "./Pages/Accounts/UserHome.jsx";
import UpdateUser from "./Pages/Accounts/UpdateUser.jsx";
import UpdatePassword from "./Pages/Accounts/UpdatePassword.jsx";
import DeleteAccount from "./Pages/Accounts/DeleteAccount.jsx";

// Symptom Checker Pages
import SymptomChecker from "./pages/SymptomChecker/SymptomChecker.jsx";
import Result from "./pages/SymptomChecker/Result";

// DB Info Pages
import DisplayUsers from "./Pages/DBInfo/Users/DisplayUsers.jsx";
import CreateUser from "./Pages/DBInfo/Users/CreateUser.jsx"; 
import DisplayOneUser from "./Pages/DBInfo/Users/DisplayOneUser.jsx";
import EditUser from "./Pages/DBInfo/Users/EditUser.jsx";
import DeleteUser from "./Pages/DBInfo/Users/DeleteUser.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/terms" element={<Terms />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-request-sent" element={<PasswordRequestSent />} />
      <Route path="/log-in" element={<LogIn />} action={HandleLogIn} />
      <Route path="/sign-up" element={<SignUp />} action={HandleSignUp}/>

      <Route path="/symptom-checker" element={<SymptomChecker />} />
      <Route path="/result" element={<Result />} />
      <Route path="/image-classifier" element={<ImageClassifier />} />


      <Route element={<PrivateRoutes />}>
        <Route path="/account" element={<UserHome />} />
        <Route path="/update-account/:id" element={<UpdateUser />} />
        <Route path="/update-password/:id" element={<UpdatePassword />} />
        <Route path="/delete-account/:id" element={<DeleteAccount />} />


        <Route path="/admin/users" element={<DisplayUsers />} />  
        <Route path="/admin/users/create" element={<CreateUser />}  />
        <Route path="/admin/users/read/:id" element={<DisplayOneUser />} />  
        <Route path="/admin/users/edit/:id" element={<EditUser />} />  
        <Route path="/admin/users/delete/:id" element={<DeleteUser/>} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
