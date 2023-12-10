
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Nav from "./Components/Nav";

import Home from "./Pages/Home";
import About from "./Pages/About";
import SymptomChecker from "./Pages/SymptomChecker";
import Accounts from "./Pages/Accounts";
import PageNotFound from "./Pages/PageNotFound";

import CreateAccount from "./Pages/CreateAccount";
import ForgotPassword from "./Pages/ForgotPassword";
import UserHome from "./Pages/UserHome";


function App() {
  return (
    <Router>
    <Nav /> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/symptomchecker" element={<SymptomChecker />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
 </Router>
  );
}


export default App;