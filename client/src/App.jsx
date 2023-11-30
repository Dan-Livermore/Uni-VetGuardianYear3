import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";

import Home from "./Pages/Home";
import About from "./Pages/About";
import SymptomChecker from "./Pages/SymptomChecker";
import Accounts from "./Pages/Accounts";

function App() {
  return ( 
   <>
   <Nav />
   <Router>
       <Routes>
       <Route path="/" exact Component={Home} />
       <Route path="/about" exact Component={About} />
       <Route path="/symptomchecker" exact Component={SymptomChecker} />
       <Route path="/accounts" exact Component={Accounts} />
       <Route path="*" exact Component={PageNotFound} />
       </Routes>
     </Router>
    </>
  );
}

export default App;