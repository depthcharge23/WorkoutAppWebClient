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
    }

    render () {
        return (
            <>
                <h2>Regimen</h2>
                <RegimenList regimens={ this.state.regimens } />
            </>
        );
    }
}

export default RegimenContainer;
