import { useState } from "react";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";
import './App.css'


function App() {
  return (
    <NavBar>
  <AppRoutes></AppRoutes>
  </NavBar>
);
}

export default App;
