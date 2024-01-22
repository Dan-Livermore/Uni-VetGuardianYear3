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
import LogIn, { HandleLogIn } from "./pages/Accounts/LogIn";
import SignUp, { HandleSignUp } from "./pages/Accounts/SignUp.jsx";
import PasswordRequestSent from "./pages/Accounts/PasswordRequestSent";
import UserHome from "./pages/Accounts/UserHome";

// Symptom Checker Pages
import SymptomChecker from "./pages/SymptomChecker/SymptomChecker.jsx";
import Result from "./pages/SymptomChecker/Result";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/terms" element={<Terms />} />

      <Route path="/log-in" element={<LogIn />} action={HandleLogIn} />
      <Route path="/sign-up" element={<SignUp />} action={HandleSignUp}/>

      <Route path="/symptom-checker" element={<SymptomChecker />} />
      <Route path="/result" element={<Result />} />
      <Route path="/image-classifier" element={<ImageClassifier />} />


      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-request-sent" element={<PasswordRequestSent />} />
      <Route path="/user-home" element={<UserHome />} />



      <Route element={<PrivateRoutes />}>
        <Route path="/account" element={<UserHome />} />
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
