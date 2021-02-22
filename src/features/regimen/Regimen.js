import React from "react";
import "./Regimen.css";

// Import Custom Components
import RegimenWorkoutContainer from "../regimen-workout-container/RegimenWorkoutContainer";
import Input from "../input/Input";
import RangeSlider from "../range-slider/RangeSlider";

// Import Models
import RegimenModel from "../../model/regimen/RegimenModel";

class Regimen extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            "regimenId": this.props.regimen && this.props.regimen.regimenId ? this.props.regimen.regimenId : -1,
            "regimenName": this.props.regimen && this.props.regimen.regimenName ? this.props.regimen.regimenName : "",
            "restBetweenWorkout": this.props.regimen && this.props.regimen.restBetweenWorkout ? this.props.regimen.restBetweenWorkout : 1,
            "isError": false
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.setRegimenName = this.setRegimenName.bind(this);
        this.setRestBetweenWorkout = this.setRestBetweenWorkout.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        
        if (this.state.regimenName && !this.state.isError) {
            this.props.handleOnSubmit(this.state.regimenName, this.state.restBetweenWorkout);

            this.setState({
                "regimenName": "",
                "restBetweenWorkout": 1
            });
        }
    }

    setRegimenName (regimenName, isError) {
        this.setState({
            "regimenName": regimenName,
            "isError": isError
        });
    }

    setRestBetweenWorkout (restBetweenWorkout) {
        this.setState({
            "restBetweenWorkout": restBetweenWorkout
        });
    }

    render () {
        const regimenWorkout = this.state.regimenId > 0 ? <RegimenWorkoutContainer regimenId={ this.state.regimenId } /> : null;
        const submitButton = this.state.regimenName && !this.state.isError ? <button className="submit-button" type="submit">Submit</button> : null;

        return (
            <>
                <h2 className="form-header">{ this.props.headerName }</h2>

                <form className="form" onSubmit={ this.handleSubmit }>
                    <Input 
                        inputName="regimen-name"
                        inputNameDisplay="Regimen Name"
                        value={ this.state.regimenName }
                        isAsync={ false }
                        validate={ RegimenModel.validateRegimenName }
                        callback={ this.setRegimenName }
                    /><br />

                    <RangeSlider
                        inputName="rest-between-workout"
                        inputNameDisplay="Rest Between Workout"
                        min="0"
                        max="5"
                        step="1"
                        value={ this.state.restBetweenWorkout }
                        unit="mins"
                        callback={ this.setRestBetweenWorkout }
                    /><br />

                    <button className="back-button" onClick={ this.props.showRegimenList } >Back</button>
                    { submitButton }
                </form>

                { regimenWorkout }
            </>
        );
    }
}

export default Regimen;
