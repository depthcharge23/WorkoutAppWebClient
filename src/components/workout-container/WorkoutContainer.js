import React from "react";
import './WorkoutContainer.css';

// Import Custom Components
import WorkoutList from "../workout-list/WorkoutList";
import Workout from "../workout/Workout";

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

        this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    handleOnDelete (i) {
        const workouts = this.state.workouts.slice();
        workouts.splice(i, 1);

        this.setState({
            "workouts": workouts
        });
    }

    render () {
        return (
            <>
                <WorkoutList
                    workouts={ this.state.workouts }
                    handleOnDelete={ this.handleOnDelete }
                />
                <Workout />
            </>
        );
    }
}

export default WorkoutContainer;
