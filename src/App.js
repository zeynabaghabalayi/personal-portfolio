// Import React modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// COMPONENTS:
import Layout from "./components/layout/Layout";

// PAGES:

import Home from "./pages/home/Home";
import NotFound from "./pages/404/NotFound";
import ProJectDetail from "./pages/productDetail/ProductDetail";
function App() {
  return (
    <div className="app">
      <Routes>
        {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="*" element={<NotFound />} />
          <Route path="/detail/:id" element={<ProJectDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
