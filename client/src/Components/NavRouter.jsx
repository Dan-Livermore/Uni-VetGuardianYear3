import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom"

import Home from './Home'; 
import SymptomChecker from './SymptomChecker';
import Accounts from './Accounts';

export const NavRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/SymptomChecker" element={<SymptomChecker/>}/>
      <Route path="/Accounts" element={<Accounts/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default NavRouter