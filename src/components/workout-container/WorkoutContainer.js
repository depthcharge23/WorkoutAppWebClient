import React from "react";
import './WorkoutContainer.css';

// Import Custom Components
import WorkoutList from "../workout-list/WorkoutList";

class WorkoutContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "workouts": [
                {
                    "workoutName": "Push Ups"
                },
                {
                    "workoutName": "Squats"
                },
                {
                    "workoutName": "Lunges"
                }
            ]
        };
    }

    render () {
        return (
            <>
                <WorkoutList workouts={ this.state.workouts } />
            </>
        );
    }
}

export default WorkoutContainer;
