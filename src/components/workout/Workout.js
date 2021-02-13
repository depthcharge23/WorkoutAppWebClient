import React from "react";
import "./Workout.css";

class Workout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": this.props.workout && this.props.workout.workoutName ? this.props.workout.workoutName : "",
            "workoutDescription": this.props.workout && this.props.workout.workoutDescription ? this.props.workout.workoutDescription : ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnWorkoutNameChange = this.handleOnWorkoutNameChange.bind(this);
        this.handleOnWorkoutDescriptionChange = this.handleOnWorkoutDescriptionChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        this.props.handleOnCreate(this.state.workoutName, this.state.workoutDescription);

        this.setState({
            "workoutName": "",
            "workoutDescription": ""
        });
    }

    handleOnWorkoutNameChange (e) {
        const workoutName = e.target.value;

        this.setState({
            "workoutName": workoutName
        });
    }

    handleOnWorkoutDescriptionChange (e) {
        const workoutDescription = e.target.value;

        this.setState({
            "workoutDescription": workoutDescription
        });
    }

    render () {
        return (
            <>
                <form onSubmit={ this.handleSubmit }>
                    <h2 className="form-header">Create Workout</h2>

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

                    <label className="label" htmlFor="workout-description">
                        Workout Description
                    </label><br />

                    <input
                        className="input"
                        type="text"
                        name="workout-description"
                        value={ this.state.workoutDescription }
                        onChange={ this.handleOnWorkoutDescriptionChange }
                    /><br />

                    <button className="back-button" onClick={ this.props.showWorkoutList }>Back</button>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Workout;
