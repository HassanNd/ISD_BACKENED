import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import TrafficReport from "./pages/TrafficReport";

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>
      <Navbar />   {/* 🔴 MUST ALWAYS BE HERE */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/traffic"
          element={token ? <TrafficReport /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
