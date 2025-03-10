import React from "react";
import Navbar from "./components/Navbar";
import TopNavbar from "./components/TopNavbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopNavbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
