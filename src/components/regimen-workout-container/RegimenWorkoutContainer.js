import React from "react";
import "./RegimenWorkoutContainer.css";

// Import Custom Components
import RegimenWorkoutList from "../regimen-workout-list/RegimenWorkoutList";
import RegimenWorkout from "../regimen-workout/RegimenWorkout";

class RegimenWorkoutContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "component": "regimenWorkoutList",
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
            ],
            "selectedRegimenWorkout": null
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnCreate = this.handleOnCreate.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);

        this.showRegimenWorkoutList = this.showRegimenWorkoutList.bind(this);
        this.showCreateRegimenWorkout = this.showCreateRegimenWorkout.bind(this);
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

    handleOnSelect (i) {
        this.setState({
            "selectedRegimenWorkout": this.state.regimenWorkouts[i],
            "component": "regimenWorkout"
        });
    }

    showCreateRegimenWorkout () {
        this.setState({
            "selectedRegimenWorkout": null,
            "component": "regimenWorkout"
        });
    }

    showRegimenWorkoutList () {
        this.setState({
            "component": "regimenWorkoutList"
        });
    }

    render () {
        let component = null;

        switch (this.state.component) {
            case "regimenWorkoutList":
                component = <RegimenWorkoutList
                    regimenWorkouts={ this.state.regimenWorkouts }
                    handleOnDelete={ this.handleOnDelete }
                    handleOnSelect={ this.handleOnSelect }
                    showCreateRegimenWorkout={ this.showCreateRegimenWorkout }
                />;
                break;
            case "regimenWorkout":
                component = <RegimenWorkout
                    regimenWorkout={ this.state.selectedRegimenWorkout }
                    handleOnCreate={ this.handleOnCreate }
                    showRegimenWorkoutList={ this.showRegimenWorkoutList }
                />;
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

export default RegimenWorkoutContainer;
