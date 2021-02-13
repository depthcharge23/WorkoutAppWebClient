import React from "react";
import "./RegimenWorkout.css";

class RegimenWorkout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": "",
            "sets": 0,
            "reps": 0
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
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="workout-name">Workout Name</label>
                <input
                    type="text"
                    name="workout-name"
                    value={ this.state.workoutName }
                    onChange={ this.handleOnWorkoutNameChange }
                />

                <label htmlFor="sets"># of Sets</label>
                <input
                    type="integer"
                    name="sets"
                    value={ this.state.sets }
                    onChange={ this.handleOnSetsChange }
                />

                <label htmlFor="reps"># of Reps</label>
                <input
                    type="integer"
                    name="reps"
                    value={ this.state.reps }
                    onChange={ this.handleOnRepsChange }
                />

                <button>Back</button>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default RegimenWorkout;
