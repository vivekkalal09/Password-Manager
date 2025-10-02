import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./App.css";
import Manager from "./components/Manager";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
