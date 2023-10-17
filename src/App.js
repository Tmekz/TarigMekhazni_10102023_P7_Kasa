import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Accomodation from "./pages/Accomodation";

// On importe la DB en local
import housesData from "./assets/data/housesDB.json";

const App = () => {
  return (
    <div id="page-container">
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home housesData={housesData} />} />
          <Route
            path="/accomodation/:id"
            element={<Accomodation housesData={housesData} />}
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
    </BrowserRouter>
      </div>
  );
};

export default App;
