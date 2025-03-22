import React from "react";
import "modern-normalize";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header"; // Import Navigation
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage"; // Import NotFoundPage
import "./vars.css";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </>
  );
}

export default App;
