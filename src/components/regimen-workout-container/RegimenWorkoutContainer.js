import React from "react";
import "./RegimenWorkoutContainer.css";

// Import Custom Components
import RegimenWorkoutList from "../regimen-workout-list/RegimenWorkoutList";
import RegimenWorkout from "../regimen-workout/RegimenWorkout";

// Import Models
import RegimenWorkoutModel from "../../model/regimen-workout/RegimenWorkoutModel";

class RegimenWorkoutContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "component": "regimenWorkoutList",
            "regimenWorkouts": [],
            "selectedRegimenWorkout": null,
            "action": "create"
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);

        this.showRegimenWorkoutList = this.showRegimenWorkoutList.bind(this);
        this.showCreateRegimenWorkout = this.showCreateRegimenWorkout.bind(this);
    }

    async componentDidMount () {
        const regimenWorkouts = await RegimenWorkoutModel.findRegimenWorkoutsByRegimenId(1);

        this.setState({
            "regimenWorkouts": regimenWorkouts
        });
    }

    async handleOnDelete (i) {
        const regimenWorkouts = this.state.regimenWorkouts.slice();
        const regimenWorkout = regimenWorkouts[i];

        await RegimenWorkoutModel.deleteRegimenWorkoutByRegimenWorkoutId(regimenWorkout["regimenWorkoutId"]);

        regimenWorkouts.splice(i, 1);

        this.setState({
            "regimenWorkouts": regimenWorkouts
        });
    }

    async handleOnSubmit (workoutId, reps, sets) {
        const regimenWorkouts = this.state.regimenWorkouts.slice();
        const selectedRegimenWorkout = this.state.selectedRegimenWorkout;

        if (this.state.action === "create") {
            const createdRegimenWorkout = await RegimenWorkoutModel.createRegimenWorkout(1, 1, reps, sets);
            regimenWorkouts.push(createdRegimenWorkout);
        } else {
            selectedRegimenWorkout["workoutId"] = workoutId;
            selectedRegimenWorkout["reps"] = reps;
            selectedRegimenWorkout["sets"] = sets;

            const updatedRegimenWorkout = await RegimenWorkoutModel.updateRegimenWorkoutByRegimenWorkoutId(selectedRegimenWorkout["regimenWorkoutId"], selectedRegimenWorkout);
            const index = regimenWorkouts.indexOf(selectedRegimenWorkout);

            regimenWorkouts[index] = updatedRegimenWorkout;
        }

        this.setState({
            "regimenWorkouts": regimenWorkouts,
            "selectedRegimenWorkout": selectedRegimenWorkout,
            "component": "regimenWorkoutList"
        });
    }

    handleOnSelect (i) {
        this.setState({
            "selectedRegimenWorkout": this.state.regimenWorkouts[i],
            "component": "regimenWorkout",
            "action": "update"
        });
    }

    showCreateRegimenWorkout () {
        this.setState({
            "selectedRegimenWorkout": null,
            "component": "regimenWorkout",
            "action": "create"
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
                    handleOnSubmit={ this.handleOnSubmit }
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
