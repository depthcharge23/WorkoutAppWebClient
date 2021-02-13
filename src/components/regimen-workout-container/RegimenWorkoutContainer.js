import React from "react";
import "./RegimenWorkoutContainer.css";

// Import Custom Components
import RegimenWorkoutList from "../regimen-workout-list/RegimenWorkoutList";

class RegimenWorkoutContainer extends React.Component {
    render () {
        return (
            <>
                <h2>Regimen Workouts</h2>
                <RegimenWorkoutList />
            </>
        );
    }
}

export default RegimenWorkoutContainer;
