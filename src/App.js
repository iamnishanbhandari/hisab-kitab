import React from "react";
import {  Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";

import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthUserProvider } from "./Firebaseconfig/auth";
import NavBar from "./components/NavBar";




const App = () => {
  
  return (
    <>
      <Router>
      <AuthUserProvider>
        <Routes> 
          <Route  path="/" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Signup" element={<Signup/>}></Route>
          </Routes>

          </AuthUserProvider>

      </Router>
    </>
  );
};

export default App;
