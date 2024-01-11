import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="signin" element={<h1>Hoi</h1>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
