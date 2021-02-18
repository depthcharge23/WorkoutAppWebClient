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

    this.handleOnNavItemClick = this.handleOnNavItemClick.bind(this);
  }

  handleOnNavItemClick (navItem) {
    this.setState({
      "selectedNavItem": navItem
    });
  }
  
  render () {
    let component = null;

    switch (this.state.selectedNavItem) {
      case "Your Regimens":
        component = <RegimenContainer className="row" />;
        break;
      case "Workouts":
        component = <WorkoutContainer className="row" />;
        break;
      default:
        break;
    }


    return (
      <>
        <Header className="row" navItems={ this.state.navItems } handleOnNavItemClick={ this.handleOnNavItemClick } />
        <div className="row app">
          <div className="column">
            { component }            
          </div>
        </div>
      </>
    );
  }
}

export default App;
