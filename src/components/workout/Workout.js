import React from "react";
import "./Workout.css";

// Import Models
import WorkoutModel from "../../model/workout/WorkoutModel";

class Workout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": this.props.workout && this.props.workout.workoutName ? this.props.workout.workoutName : "",
            "workoutDescription": this.props.workout && this.props.workout.workoutDescription ? this.props.workout.workoutDescription : "",
            "workoutNameError": "",
            "workoutDescriptionError": ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnWorkoutNameChange = this.handleOnWorkoutNameChange.bind(this);
        this.handleOnWorkoutDescriptionChange = this.handleOnWorkoutDescriptionChange.bind(this);
    }

    async handleSubmit (e) {
        e.preventDefault();

        let error = await WorkoutModel.validateWorkoutName(this.state.workoutName);
        let hasError = false;

        if (error) {
            const element = document.querySelector(`input[name="workout-name"]`);
            element.classList.add("error-input");

            hasError = true;

            this.setState({
                "workoutNameError": error
            });
        }

        error = WorkoutModel.validateWorkoutDescription(this.state.workoutDescription);

        if (error) {
            const element = document.querySelector(`input[name="workout-description"]`);
            element.classList.add("error-input");

            hasError = true;

            this.setState({
                "workoutDescriptionError": error
            });
        }

        if (!hasError) {
            this.props.handleOnCreate(this.state.workoutName, this.state.workoutDescription);

            this.setState({
                "workoutName": "",
                "workoutDescription": ""
            });
        }
    }

    async handleOnWorkoutNameChange (e) {
        const workoutName = e.target.value;
        let error = await WorkoutModel.validateWorkoutName(workoutName);

        if (error) {
            e.target.classList.add("error-input");
        } else {
            e.target.classList.remove("error-input");
        }

        this.setState({
            "workoutName": workoutName,
            "workoutNameError": error
        });
    }

    handleOnWorkoutDescriptionChange (e) {
        const workoutDescription = e.target.value;
        let error = WorkoutModel.validateWorkoutDescription(workoutDescription);

        if (error) {
            e.target.classList.add("error-input");
        } else {
            e.target.classList.remove("error-input");
        }

        this.setState({
            "workoutDescription": workoutDescription,
            "workoutDescriptionError": error
        });
    }

    render () {
        return (
            <>
                <h2 className="form-header">{ this.props.headerName }</h2>

                <form className="form" onSubmit={ this.handleSubmit }>
                    <label className="label" htmlFor="workout-name">
                        Workout Name
                    </label><br />

                    <p className="error">{ this.state.workoutNameError }</p>

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

                    <p className="error">{ this.state.workoutDescriptionError }</p>

                    <textarea
                        className="textarea"
                        name="workout-description"
                        rows="5"
                        cols="100"
                        value={ this.state.workoutDescription }
                        onChange={ this.handleOnWorkoutDescriptionChange }
                    ></textarea><br />

                    <button className="back-button" onClick={ this.props.showWorkoutList }>Back</button>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Workout;
