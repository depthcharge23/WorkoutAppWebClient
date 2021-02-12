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
                <RegimenList regimens={ this.state.regimens } handleOnDelete={ this.handleOnDelete } />
                <Regimen />
                <button>Create Regimen</button>
            </>
        );
    }
}

export default RegimenContainer;
