import React, { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ThemeContext from "./context/ThemeContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Navigate to="/AAPL"/>
      <Outlet/>
    </ThemeContext.Provider>
  );
}

export default App;