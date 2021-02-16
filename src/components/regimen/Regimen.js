import React from "react";
import "./Regimen.css";

class Regimen extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "regimenName": this.props.regimen && this.props.regimen.regimenName ? this.props.regimen.regimenName : "",
            "restBetweenWorkout": this.props.regimen && this.props.regimen.restBetweenWorkout ? this.props.regimen.restBetweenWorkout : 0,
            "regimenNameError": "",
            "restBetweenWorkoutError": ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnRegimenNameChange = this.handleOnRegimenNameChange.bind(this);
        this.handleOnRestBetweenWorkoutChange = this.handleOnRestBetweenWorkoutChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        
        this.props.handleOnSubmit(this.state.regimenName, this.state.restBetweenWorkout);

        this.setState({
            "regimenName": "",
            "restBetweenWorkout": 0
        });
    }

    handleOnRegimenNameChange (e) {
        const regimenName = e.target.value;
        let error = "";

        if (!regimenName) {
            error = "Regimen Name cannot be empty.";
        } else if (regimenName && regimenName.length > 50) {
            error = "Regimen Name length cannot be greater than 50.";
        }

        if (error) {
            e.target.classList.add("error-input");
        } else {
            e.target.classList.remove("error-input");
        }

        this.setState({
            "regimenName": regimenName,
            "regimenNameError": error
        });
    }

    handleOnRestBetweenWorkoutChange (e) {
        const restBetweenWorkout = e.target.value;
        let error = "";

        if (!restBetweenWorkout) {
            error = "Rest Between Workout cannot be empty.";
        } else if (restBetweenWorkout && isNaN(Number(restBetweenWorkout))) {
            error = "Rest Between Workout has to be a number.";
        } else if (restBetweenWorkout && restBetweenWorkout < 0) {
            error = "Rest Between Workout cannot be a negative number.";
        }

        if (error) {
            e.target.classList.add("error-input");
        } else {
            e.target.classList.remove("error-input");
        }

        this.setState({
            "restBetweenWorkout": restBetweenWorkout,
            "restBetweenWorkoutError": error
        });
    }

    render () {
        return (
            <>
                <h2 className="form-header">Create Regimen</h2>

                <form className="form" onSubmit={ this.handleSubmit }>
                    <label className="label" htmlFor="regimen-name">
                        Regimen Name
                    </label><br />

                    <p className="error">{ this.state.regimenNameError }</p>

                    <input
                        className="input"
                        type="text"
                        name="regimen-name"
                        value={ this.state.regimenName }
                        onChange={ this.handleOnRegimenNameChange }
                    /><br />

                    <label className="label" htmlFor="rest-between-workout">
                        Rest Between Workout
                    </label><br />

                    <p className="error">{ this.state.restBetweenWorkoutError }</p>

                    <input 
                        className="input"
                        type="integer"
                        name="rest-between-workout"
                        value={ this.state.restBetweenWorkout }
                        onChange={ this.handleOnRestBetweenWorkoutChange }
                    /><br />

                    <button className="back-button" onClick={ this.props.showRegimenList } >Back</button>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Regimen;
