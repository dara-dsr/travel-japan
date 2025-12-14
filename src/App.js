import React, { lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NotFound from "./pages/404/NotFound";

const Main = lazy(() => import("./pages/Main/Main"));
const Island = lazy(() => import("./pages/Island/Island"));
const Features = lazy(() => import("./pages/Features/Features"));
const Tours = lazy(() => import("./pages/Tours/Tours"));
const About = lazy(() => import("./pages/About/About"));
const Login = lazy(() => import("./pages/Login/Login"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Account = lazy(() => import("./pages/Account/Account"));
const Honshu = lazy(() => import("./pages/Honshu/Honshu"));
const Hokkaido = lazy(() => import("./pages/Hokkaido/Hokkaido"));
const Kyushu = lazy(() => import("./pages/Kyushu/Kyushu"));
const Shikoku = lazy(() => import("./pages/Shikoku/Shikoku"));
const Tugoku = lazy(() => import("./components/Tyugoku/Tugoku"));
const Tohoku = lazy(() => import("./components/Tohoku/Tohoku"));
const Kanto = lazy(() => import("./components/Kanto/Kanto"));
const Chubu = lazy(() => import("./components/Chubu/Chubu"));
const Kansai = lazy(() => import("./components/Kansai/Kansai"));
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
