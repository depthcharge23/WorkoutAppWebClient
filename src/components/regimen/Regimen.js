import React from "react";
import "./Regimen.css";

class Regimen extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "regimenName": this.props.regimen && this.props.regimen.regimenName ? this.props.regimen.regimenName : "",
            "restBetweenWorkout": this.props.regimen && this.props.regimen.restBetweenWorkout ? this.props.regimen.restBetweenWorkout : 0
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

        this.setState({
            "regimenName": regimenName
        });
    }

    handleOnRestBetweenWorkoutChange (e) {
        const restBetweenWorkout = e.target.value;

        this.setState({
            "restBetweenWorkout": restBetweenWorkout
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
