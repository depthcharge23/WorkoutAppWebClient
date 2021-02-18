import React from "react";
import "./App.css";

// Import Custom Components
import Header from "../header/Header";
import RegimenContainer from "../regimen-container/RegimenContainer";
import WorkoutContainer from "../workout-container/WorkoutContainer";

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      "navItems": [ "Your Regimens", "Workouts"],
      "selectedNavItem": "Your Regimens"
    };
  }
  
  render () {
    return (
      <>
        <Header className="row" navItems={ this.state.navItems } />
        <div className="row app">
          <div className="column">
            <RegimenContainer className="row" />
            <WorkoutContainer className="row" />
          </div>
        </div>
      </>
    );
  }
}

export default App;
