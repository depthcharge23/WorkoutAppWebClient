import React from "react";
import "./RegimenWorkoutContainer.css";

// Import Custom Components
import RegimenWorkoutList from "../regimen-workout-list/RegimenWorkoutList";

class RegimenWorkoutContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "regimenWorkouts": [
                {
                    "workoutName": "Push Ups",
                    "sets": 3,
                    "reps": 10
                },
                {
                    "workoutName": "Sit Ups",
                    "sets": 3,
                    "reps": 10
                },
                {
                    "workoutName": "Crunches",
                    "sets": 3,
                    "reps": 10
                }
            ]
        };
    }


    render () {
        return (
            <>
                <RegimenWorkoutList
                    regimenWorkouts={ this.state.regimenWorkouts }
                />
            </>
        );
    }
}

export default RegimenWorkoutContainer;
