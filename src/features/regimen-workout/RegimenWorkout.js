import React from "react";
import "./RegimenWorkout.css";

// Import Custom Components
import RangeSlider from "../../components/range-slider/RangeSlider";
import TypeAhead from "../../components/type-ahead/TypeAhead";

class RegimenWorkout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": this.props.regimenWorkout && this.props.regimenWorkout.workoutName ? this.props.regimenWorkout.workoutName : "",
            "sets": this.props.regimenWorkout && this.props.regimenWorkout.sets ? this.props.regimenWorkout.sets : 0,
            "reps": this.props.regimenWorkout && this.props.regimenWorkout.reps ? this.props.regimenWorkout.reps : 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.setSets = this.setSets.bind(this);
        this.setReps = this.setReps.bind(this);
        this.setWorkoutName = this.setWorkoutName.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        this.props.handleOnSubmit(1, this.state.reps, this.state.sets);

        this.setState({
            "workoutName": "",
            "sets": 0,
            "reps": 0
        });
    }

    setWorkoutName (workoutName) {
        this.setState({
            "workoutName": workoutName
        });
    }

    setSets (sets) {
        this.setState({
            "sets": sets
        });
    }

    setReps (reps) {
        this.setState({
            "reps": reps
        });
    }

    render () {
        return (
            <>
                <h2 className="form-header">Create Regimen Workout</h2>
                
                <form className="form" onSubmit={ this.handleSubmit }>
                    <TypeAhead
                        typeAheadName="workout-name"
                        typeAheadNameDisplay="Workout Name"
                        value={ this.state.workoutName }
                        items={ ["Pull Ups", "Push Ups", "Squats", "Lunges"] }
                        callback={ this.setWorkoutName }
                    /><br />

                    <RangeSlider 
                        inputName="sets"
                        inputNameDisplay="# of Sets"
                        min="0"
                        max="5"
                        step="1"
                        value={ this.state.sets }
                        callback={ this.setSets }
                    /><br />

                    <RangeSlider 
                        inputName="reps"
                        inputNameDisplay="# of Reps"
                        min="0"
                        max="25"
                        step="5"
                        value={ this.state.reps }
                        callback={ this.setReps }
                    /><br />

                    <button className="back-button" onClick={ this.props.showRegimenWorkoutList }>Back</button>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default RegimenWorkout;
