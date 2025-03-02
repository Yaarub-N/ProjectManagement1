import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Header from "./Components/sections/Header";
import Footer from "./Components/sections/Footer";
import { ThemeProvider } from "./Components/ThemeProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <dir className="wrapper">
          {" "}
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Footer />
        </dir>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
