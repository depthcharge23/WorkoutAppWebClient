import React from "react";
import "./Regimen.css";

// Import Models
import RegimenModel from "../../model/regimen/RegimenModel";

class Regimen extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "regimenName": this.props.regimen && this.props.regimen.regimenName ? this.props.regimen.regimenName : "",
            "restBetweenWorkout": this.props.regimen && this.props.regimen.restBetweenWorkout ? this.props.regimen.restBetweenWorkout : "",
            "regimenNameError": "",
            "restBetweenWorkoutError": ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnRegimenNameChange = this.handleOnRegimenNameChange.bind(this);
        this.handleOnRestBetweenWorkoutChange = this.handleOnRestBetweenWorkoutChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        let error = RegimenModel.validateRegimenName(this.state.regimenName);
        let hasError = false;

        if (error) {
            const element = document.querySelector(`input[name="regimen-name"]`);
            element.classList.add("error-input");

            hasError = true;

            this.setState({
                "regimenNameError": error
            });
        }
        
        error = RegimenModel.validateRestBetweenWorkout(this.state.restBetweenWorkout);

        if (error) {
            const element = document.querySelector(`input[name="rest-between-workout"]`);
            element.classList.add("error-input");

            hasError = true;

            this.setState({
                "restBetweenWorkoutError": error
            });
        }
        
        if (!hasError) {
            this.props.handleOnSubmit(this.state.regimenName, this.state.restBetweenWorkout);

            this.setState({
                "regimenName": "",
                "restBetweenWorkout": 0
            });
        }
    }

    handleOnRegimenNameChange (e) {
        const regimenName = e.target.value;
        let error = RegimenModel.validateRegimenName(regimenName);

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
        let error = RegimenModel.validateRestBetweenWorkout(restBetweenWorkout);

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
                <h2 className="form-header">{ this.props.headerName }</h2>

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
