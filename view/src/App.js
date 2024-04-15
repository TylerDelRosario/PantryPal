import "./App.css";
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login.js';
import Home from './Home';

import Dashboard from "./Pages/Dashboard";
import Pantry from "./Pages/Pantry";
import Recipes from "./Pages/Recipies";
import Navbar from "./Pages/Components/Navbar";
import Sidebar from "./Pages/Components/Sidebar";
import Meal from "./Pages/Meal.js";
import ShowRecipeItem from "./Pages/ShowRecipeItem";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="p-4 overflow-auto w-full">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pantry" element={<Pantry />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/recipeX" element={<ShowRecipeItem />} />
              <Route path="/login" element={<Login />} />
              <Route path="/meal" element={<Meal />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
