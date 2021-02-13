import React from "react";
import "./App.css";

// Import Custom Components
import Header from "../header/Header";
import RegimenContainer from "../regimen-container/RegimenContainer";
import WorkoutContainer from "../workout-container/WorkoutContainer";
import RegimenWorkoutContainer from "../regimen-workout-container/RegimenWorkoutContainer";

const App = () => {
  return (
    <>
      <Header />
      <RegimenContainer />
      <WorkoutContainer />
      <RegimenWorkoutContainer />
    </>
  );
}

export default App;
