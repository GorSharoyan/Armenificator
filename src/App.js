import "./App.css";
import React from "react";

//components
import Armenificator from "./components/Armenificator/Armenificator";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Armenificator />
      <Footer />
    </>
  );
}

export default App;
