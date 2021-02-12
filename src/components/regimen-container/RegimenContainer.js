import React from "react";
import './RegimenContainer.css';

// Import Custom Components
import RegimenList from "../regimen-list/RegimenList";

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
    }

    handleOnDelete (i) {
        const regimens = this.state.regimens.slice();
        regimens.splice(i, 1);

        this.setState({
            "regimens": regimens
        });
    }

    render () {
        return (
            <>
                <h2>Regimen</h2>
                <RegimenList regimens={ this.state.regimens } handleOnDelete={ this.handleOnDelete } />
                <button>Create Regimen</button>
            </>
        );
    }
}

export default RegimenContainer;
