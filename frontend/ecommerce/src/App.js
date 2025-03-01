import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./components/screens/HomeScreen";
import SignupScreen from "./components/screens/SignupScreen";
import LoginScreen from "./components/screens/LoginScreen";
import CartScreen from "./components/screens/CartScreen";
import About from "./components/screens/about";

function App() {
  return (
    <Router>  {/* Router should wrap everything that needs navigation */}
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/about" element={<About />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
