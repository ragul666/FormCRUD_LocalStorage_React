import React, { useState, useEffect } from "react";
import { View } from "./components/View";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
// getting the values of local storage

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
