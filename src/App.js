import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import Island from "./pages/Island/Island";
import Features from "./pages/Features/Features";
import Tours from "./pages/Tours/Tours";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Registration from "./pages/Regitration/Registration";
import Account from "./pages/Account/Account";
import Honshu from "./pages/Honshu/Honshu";
import Hokkaido from "./pages/Hokkaido/Hokkaido";
import Kyushu from "./pages/Kyushu/Kyushu";
import Shikoku from "./pages/Shikoku/Shikoku";
import Tugoku from "./components/Tyugoku/Tugoku";
import Tohoku from "./components/Tohoku/Tohoku";
import Kanto from "./components/Kanto/Kanto";
import Chubu from "./components/Chubu/Chubu";
import Kansai from "./components/Kansai/Kansai";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/islands" element={<Island />} />
            <Route path="/features" element={<Features />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/about" element={<About />} />

            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/account" element={<Account />} />

            <Route path="/honshu" element={<Honshu />} />
            <Route path="/hokkaido" element={<Hokkaido />} />
            <Route path="/kyushu" element={<Kyushu />} />
            <Route path="/shikoku" element={<Shikoku />} />

            <Route path="/tugoku" element={<Tugoku />} />
            <Route path="/tohoku" element={<Tohoku />} />
            <Route path="/kanto" element={<Kanto />} />
            <Route path="/chubu" element={<Chubu />} />
            <Route path="/kansai" element={<Kansai />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
