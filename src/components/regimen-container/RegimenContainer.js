import React from "react";
import './RegimenContainer.css';

// Import Custom Components
import RegimenList from "../regimen-list/RegimenList";
import Regimen from "../regimen/Regimen";

class RegimenContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "regimens": [
                {
                    "regimenName": "Leg Day"
                },
                {
                    "regimenName": "CHEST!"
                },
                {
                    "regimenName": "Bis & Back"
                }
            ]
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnCreate = this.handleOnCreate.bind(this);
    }

    handleOnDelete (i) {
        const regimens = this.state.regimens.slice();
        regimens.splice(i, 1);

        this.setState({
            "regimens": regimens
        });
    }

    handleOnCreate (regimenName, restBetweenWorkout) {
        const regimens = this.state.regimens.slice();
        regimens.push({
            "regimenName": regimenName,
            "restBetweenWorkout": restBetweenWorkout
        });

        this.setState({
            "regimens": regimens
        });
    }

    render () {
        return (
            <>
                <RegimenList regimens={ this.state.regimens } handleOnDelete={ this.handleOnDelete } />
                <Regimen handleOnCreate={ this.handleOnCreate } />
                <button>Create Regimen</button>
            </>
        );
    }
}

export default RegimenContainer;
