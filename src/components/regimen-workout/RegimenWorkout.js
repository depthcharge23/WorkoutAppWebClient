import React from "react";
import "./RegimenWorkout.css";

class RegimenWorkout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": this.props.regimenWorkout && this.props.regimenWorkout.workoutName ? this.props.regimenWorkout.workoutName : "",
            "sets": this.props.regimenWorkout && this.props.regimenWorkout.sets ? this.props.regimenWorkout.sets : 0,
            "reps": this.props.regimenWorkout && this.props.regimenWorkout.reps ? this.props.regimenWorkout.reps : 0
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnWorkoutNameChange = this.handleOnWorkoutNameChange.bind(this);
        this.handleOnSetsChange = this.handleOnSetsChange.bind(this);
        this.handleOnRepsChange = this.handleOnRepsChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        this.props.handleOnCreate(this.state.workoutName, this.state.sets, this.state.reps);

        this.setState({
            "workoutName": "",
            "sets": 0,
            "reps": 0
        });
    }

    handleOnWorkoutNameChange (e) {
        const workoutName = e.target.value;

        this.setState({
            "workoutName": workoutName
        });
    }

    handleOnSetsChange (e) {
        const sets = e.target.value;

        this.setState({
            "sets": sets
        });
    }

    handleOnRepsChange (e) {
        const reps = e.target.value;

        this.setState({
            "reps": reps
        });
    }

    render () {
        return (
            <>
                <h2 className="form-header">Create Regimen Workout</h2>
                
                <form className="form" onSubmit={ this.handleSubmit }>
                    <label className="label" htmlFor="workout-name">
                        Workout Name
                    </label><br />

                    <input
                        className="input"
                        type="text"
                        name="workout-name"
                        value={ this.state.workoutName }
                        onChange={ this.handleOnWorkoutNameChange }
                    /><br />

                    <label className="label" htmlFor="sets">
                        # of Sets
                    </label><br />

                    <input
                        className="input"
                        type="integer"
                        name="sets"
                        value={ this.state.sets }
                        onChange={ this.handleOnSetsChange }
                    /><br />

                    <label className="label" htmlFor="reps">
                        # of Reps
                    </label><br />

                    <input
                        className="input"
                        type="integer"
                        name="reps"
                        value={ this.state.reps }
                        onChange={ this.handleOnRepsChange }
                    /><br />

                    <button className="back-button" onClick={ this.props.showRegimenWorkoutList }>Back</button>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default RegimenWorkout;
