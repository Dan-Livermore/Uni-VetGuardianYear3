import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./structure/RootLayout";
import PrivateRoutes from "./structure/PrivateRoutes";

import Home from "./Pages/Home";
import About from "./Pages/About";
import SymptomChecker from "./Pages/SymptomChecker";
import ImageClassifier from "./Pages/ImageClassifier";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import CreateAccount from "./Pages/CreateAccount";
import ForgotPassword from "./Pages/ForgotPassword";
import UserHome from "./Pages/UserHome";
import LogIn from "./Pages/LogIn";

import Result from "./Pages/SymptomChecker/Result";
import PasswordRequestSent from "./Pages/PasswordRequestSent";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/log-in" element={<LogIn />}/>  
      {/* action={HandleLogIn} /> */}
      <Route path="*" element={<PageNotFound />} />

      <Route path="/create-account" element={<CreateAccount />}/>
      {/* action={HandleSignUp}/> */}
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

      <Route path="/result" element={<Result />} />

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
