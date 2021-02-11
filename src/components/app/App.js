import React from "react";
import './App.css';

// Import Custom Components
import Header from "../header/Header";
import RegimenContainer from "../regimen-container/RegimenContainer";

const App = () => {
  return (
    <>
      <Header />
      <RegimenContainer />
    </>
  );
}

export default App;
