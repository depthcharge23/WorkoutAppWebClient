import React from "react";
import "./WorkoutContainer.css";

// Import Custom Components
import WorkoutList from "../workout-list/WorkoutList";
import Workout from "../workout/Workout";

class WorkoutContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "component": "workoutList",
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
            ],
            "selectedWorkout": null
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnCreate = this.handleOnCreate.bind(this);
        this.handleWorkoutSelect = this.handleWorkoutSelect.bind(this);

        this.showCreateWorkout = this.showCreateWorkout.bind(this);
        this.showWorkoutList = this.showWorkoutList.bind(this);
    }

    handleOnDelete (i) {
        const workouts = this.state.workouts.slice();
        workouts.splice(i, 1);

        this.setState({
            "workouts": workouts
        });
    }

    handleOnCreate (workoutName, workoutDescription) {
        const workouts = this.state.workouts.slice();
        workouts.push({
            "workoutName": workoutName,
            "workoutDescription": workoutDescription
        });

        this.setState({
            "component": "workoutList",
            "workouts": workouts
        });
    }

    handleWorkoutSelect (i) {
        this.setState({
            "selectedWorkout": this.state.workouts[i],
            "component": "workout"
        });
    }

    showCreateWorkout () {
        this.setState({
            "selectedWorkout": null,
            "component": "workout"
        });
    }

    showWorkoutList () {
        this.setState({
            "component": "workoutList"
        });
    }

    render () {
        let component = null;

        switch (this.state.component) {
            case "workoutList":
                component = <WorkoutList
                    workouts={ this.state.workouts }
                    handleWorkoutSelect={ this.handleWorkoutSelect }
                    handleOnDelete={ this.handleOnDelete }
                    showCreateWorkout={ this.showCreateWorkout }
                />
                break;
            case "workout":
                component = <Workout
                    workout={ this.state.selectedWorkout }
                    handleOnCreate={ this.handleOnCreate }
                    showWorkoutList={ this.showWorkoutList }
                />
                break;
            default:
                break;
        }

        return (
            <>
                { component }                
            </>
        );
    }
}

export default WorkoutContainer;
