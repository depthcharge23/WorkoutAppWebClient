import React from "react";
import "./Workout.css";

class Workout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": "",
            "workoutDescription": ""
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
                    <label htmlFor="workout-name">Workout Name</label>
                    <input 
                        type="text"
                        name="workout-name"
                        value={ this.state.workoutName }
                        onChange={ this.handleOnWorkoutNameChange }
                    />

                    <label htmlFor="workout-description">Workout Description</label>
                    <input
                        type="text"
                        name="workout-description"
                        value={ this.state.workoutDescription }
                        onChange={ this.handleOnWorkoutDescriptionChange }
                    />

                    <button onClick={ this.props.showWorkoutList }>Back</button>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Workout;
