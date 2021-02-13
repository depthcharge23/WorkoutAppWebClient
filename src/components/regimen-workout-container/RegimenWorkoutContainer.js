import React from "react";
import "./RegimenWorkoutContainer.css";

// Import Custom Components
import RegimenWorkoutList from "../regimen-workout-list/RegimenWorkoutList";
import RegimenWorkout from "../regimen-workout/RegimenWorkout";

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

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnCreate = this.handleOnCreate.bind(this);
    }

    handleOnDelete (i) {
        const regimenWorkouts = this.state.regimenWorkouts.slice();
        regimenWorkouts.splice(i, 1);

        this.setState({
            "regimenWorkouts": regimenWorkouts
        });
    }

    handleOnCreate (workoutName, sets, reps) {
        const regimenWorkouts = this.state.regimenWorkouts.slice();
        regimenWorkouts.push({
            "workoutName": workoutName,
            "sets": sets,
            "reps": reps
        });

        this.setState({
            "regimenWorkouts": regimenWorkouts
        });
    }

    render () {
        return (
            <>
                <RegimenWorkoutList
                    regimenWorkouts={ this.state.regimenWorkouts }
                    handleOnDelete={ this.handleOnDelete }
                />
                <RegimenWorkout
                    handleOnCreate={ this.handleOnCreate }
                />
            </>
        );
    }
}

export default RegimenWorkoutContainer;
