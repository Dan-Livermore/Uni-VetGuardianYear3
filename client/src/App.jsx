import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from "react-router-dom";
import RootLayout from "./structure/RootLayout";
import PrivateRoutes from "./structure/PrivateRoutes";

import Home from "./pages/Home";
import About from "./pages/About";
import SymptomChecker from "./pages/SymptomChecker";
import ImageClassifier from "./pages/ImageClassifier";
import PageNotFound from "./pages/PageNotFound";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword";
import UserHome from "./pages/UserHome";
import LogIn, { HandleLogIn } from "./pages/LogIn";

// import Result from "./pages/SymptomChecker/Result";
import PasswordRequestSent from "./pages/PasswordRequestSent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<LogIn />} action={HandleLogIn} />
      <Route path="*" element={<PageNotFound />} />
{/* 
      <Route path="/create-account" element={<CreateAccount />} action={HandleSignUp}/> */}

      <Route path="/about" element={<About />} />
      <Route path="/symptom-checker" element={<SymptomChecker />} />
      <Route path="/image-classifier" element={<ImageClassifier />} />
      {/* <Route path="/accounts" element={<Accounts />} /> */}

      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/password-request-sent" element={<PasswordRequestSent />} />
      <Route path="/user-home" element={<UserHome />} />

      {/* <Route path="/result" element={<Result />} /> */}

      <Route path="*" element={<PageNotFound />} />

      <Route element={<PrivateRoutes />}>
        {/* <Route path="/account" element={<Account />} /> */}
        {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/password-request-sent"
            element={<PasswordRequestSent />}
          /> */}
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
