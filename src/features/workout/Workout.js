import React from "react";
import "./Workout.css";

// Import Custom Components
import Input from "../../components/input/Input";
import TextArea from "../../components/text-area/TextArea";

// Import Models
import WorkoutModel from "../../model/workout/WorkoutModel";

class Workout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": this.props.workout && this.props.workout.workoutName ? this.props.workout.workoutName : "",
            "workoutDescription": this.props.workout && this.props.workout.workoutDescription ? this.props.workout.workoutDescription : "",
            "workoutDescriptionError": "",
            "isError": false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnWorkoutDescriptionChange = this.handleOnWorkoutDescriptionChange.bind(this);

        this.setWorkoutName = this.setWorkoutName.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        let hasError = false;

        let error = WorkoutModel.validateWorkoutDescription(this.state.workoutDescription);

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

    setWorkoutName (workoutName, isError) {
        this.setState({
            "workoutName": workoutName,
            "isError": isError
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
        const submitButton = this.state.workoutName && this.state.workoutDescription && !this.state.isError ? <button className="submit-button" type="submit">Submit</button> : null;

        return (
            <>
                <h2 className="form-header">{ this.props.headerName }</h2>

                <form className="form" onSubmit={ this.handleSubmit }>
                    <Input 
                        inputName="workout-name"
                        inputNameDisplay="Workout Name"
                        value={ this.state.workoutName }
                        isAsync={ true }
                        validate={ WorkoutModel.validateWorkoutName }
                        callback={ this.setWorkoutName }
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

                    <TextArea /><br />

                    <button className="back-button" onClick={ this.props.showWorkoutList }>Back</button>
                    { submitButton }
                </form>
            </>
        );
    }
}

export default Workout;
