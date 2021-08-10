import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./widget/Header";
import { Footer } from "./widget/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Footer />
      </Router>
    </>
  );
}

export default App;
