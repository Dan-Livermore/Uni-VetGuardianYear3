import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import SymptomChecker from "./Pages/SymptomChecker";
import ImageClassifier from "./Pages/ImageClassifier";
import Accounts from "./Pages/Accounts";
import PageNotFound from "./Pages/PageNotFound";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import CreateAccount from "./Pages/CreateAccount";
import ForgotPassword from "./Pages/ForgotPassword";
import UserHome from "./Pages/UserHome";

import Result from "./Pages/SymptomChecker/Result";
import PasswordRequestSent from "./Pages/PasswordRequestSent";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
        <Route path="/image-classifier" element={<ImageClassifier />} />
        <Route path="/accounts" element={<Accounts />} />

        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />

        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path ="/password-request-sent" element={<PasswordRequestSent/>} />
        <Route path="/user-home" element={<UserHome />} />

        
        <Route path="/result" element={<Result />} />


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;