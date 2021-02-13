import React from "react";
import "./App.css";

// Import Custom Components
import Header from "../header/Header";
import RegimenContainer from "../regimen-container/RegimenContainer";
import WorkoutContainer from "../workout-container/WorkoutContainer";

const App = () => {
  return (
    <>
      <Header />
      <RegimenContainer />
      <WorkoutContainer />
    </>
  );
}

export default App;
