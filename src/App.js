import "./App.css";
import React from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Row from "./components/Row/Row";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row />
    </div>
  );
}

export default App;
