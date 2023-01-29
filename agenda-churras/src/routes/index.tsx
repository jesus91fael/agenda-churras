import React from "react"
import { BrowserRouter, Route, Routes as Router } from "react-router-dom"
import EditEvent from "../pages/EditEvent"
import Home from "../pages/Home"
import RegisterEvent from "../pages/RegisterEvent"
import View from "../pages/View"

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<Home />} path="/" />
        <Route element={<RegisterEvent />} path="/cadastrar" />
        <Route element={<View />} path="/evento/:id" />
        <Route element={<EditEvent />} path="/editar-evento/:id" />
      </Router>
    </BrowserRouter>
  )
}

export default Routes;
