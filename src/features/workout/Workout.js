import React from "react";
import "./Workout.css";

// Import Custom Components
import TextArea from "../../components/text-area/TextArea";
import TypeAhead from "../../components/type-ahead/TypeAhead";

// Import Models
import WorkoutModel from "../../model/workout/WorkoutModel";

class Workout extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "workoutName": this.props.workout && this.props.workout.workoutName ? this.props.workout.workoutName : "",
            "workoutDescription": this.props.workout && this.props.workout.workoutDescription ? this.props.workout.workoutDescription : "",
            "isError": false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setWorkoutName = this.setWorkoutName.bind(this);
        this.setWorkoutDescription = this.setWorkoutDescription.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        if (this.state.workoutName && this.state.workoutDescription && !this.state.isError) {
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

    setWorkoutDescription (workoutDescription, isError) {
        this.setState({
            "workoutDescription": workoutDescription,
            "isError": isError
        });
    }

    render () {
        const submitButton = this.state.workoutName && this.state.workoutDescription && !this.state.isError ? <button className="submit-button" type="submit">Submit</button> : null;

        return (
            <>
                <h2 className="form-header">{ this.props.headerName }</h2>

                <form className="form" onSubmit={ this.handleSubmit }>
                    <TypeAhead 
                        typeAheadName="workout-names"
                        typeAheadNameDisplay="Workout Name"
                        value={ this.state.workoutName }
                        items={ ["Push Ups", "Pull Ups", "Squats", "Lunges"] }
                        callback={ this.setWorkoutName }
                    /><br />

                    <TextArea 
                        textAreaName="workout-description"
                        textAreaDisplay="Workout Description"
                        rows="5"
                        cols="100"
                        value={ this.state.workoutDescription }
                        isAsync={ false }
                        validate={ WorkoutModel.validateWorkoutDescription }
                        callback={ this.setWorkoutDescription }
                    /><br />

                    <button className="back-button" onClick={ this.props.showWorkoutList }>Back</button>
                    { submitButton }
                </form>
            </>
        );
    }
}

export default Workout;
