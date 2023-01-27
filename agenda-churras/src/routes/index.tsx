import React from "react";
import { BrowserRouter, Route, Routes as Router} from "react-router-dom";
import Home from "../pages/Home";
import RegisterEvent from "../pages/RegisterEvent";


const Routes: React.FC  = () => {
   return(
       <BrowserRouter>
       <Router>

           <Route element = { < Home /> }  path="/" />
           <Route element = { < RegisterEvent /> }  path="/cadastrar" />
       </Router>
       </BrowserRouter>
   )
}

export default Routes;