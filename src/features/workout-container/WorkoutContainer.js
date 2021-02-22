import React from "react";
import "./WorkoutContainer.css";

// Import Custom Components
import WorkoutList from "../workout-list/WorkoutList";
import Workout from "../workout/Workout";

// Import Models
import WorkoutModel from "../../model/workout/WorkoutModel";

class WorkoutContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "component": "workoutList",
            "workouts": [],
            "selectedWorkout": null,
            "action": "create"
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleWorkoutSelect = this.handleWorkoutSelect.bind(this);

        this.showCreateWorkout = this.showCreateWorkout.bind(this);
        this.showWorkoutList = this.showWorkoutList.bind(this);
    }

    async componentDidMount () {
        const workouts = await WorkoutModel.findAllWorkouts();

        this.setState({
            "workouts": workouts
        });
    }

    async handleOnDelete (i) {
        const workouts = this.state.workouts.slice();
        const workout = workouts[i];

        await WorkoutModel.deleteWorkoutByWorkoutId(workout["workoutId"]);
        
        workouts.splice(i, 1);

        this.setState({
            "workouts": workouts
        });
    }

    async handleOnSubmit (workoutName, workoutDescription) {
        const workouts = this.state.workouts.slice();
        const selectedWorkout = this.state.selectedWorkout;

        if (this.state.action === "create") {
            const createdWorkout = await WorkoutModel.createWorkout(workoutName, workoutDescription);
            workouts.push(createdWorkout);
        } else {
            selectedWorkout["workoutName"] = workoutName;
            selectedWorkout["workoutDescription"] = workoutDescription;

            const updatedWorkout = await WorkoutModel.updateWorkoutByWorkoutId(selectedWorkout["workoutId"], selectedWorkout);
            const index = workouts.indexOf(selectedWorkout);

            workouts[index] = updatedWorkout;
        }

        this.setState({
            "workouts": workouts,
            "selectedWorkout": selectedWorkout,
            "component": "workoutList"
        });
    }

    handleWorkoutSelect (i) {
        this.setState({
            "selectedWorkout": this.state.workouts[i],
            "component": "workout",
            "action": "update"
        });
    }

    showCreateWorkout () {
        this.setState({
            "selectedWorkout": null,
            "component": "workout",
            "action": "create"
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
                    headerName={ this.state.selectedWorkout && this.state.selectedWorkout.workoutName ? this.state.selectedWorkout.workoutName : "Create Workout" }
                    handleOnCreate={ this.handleOnSubmit }
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
