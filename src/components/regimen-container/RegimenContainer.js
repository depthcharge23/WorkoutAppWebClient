import React from "react";
import './RegimenContainer.css';

// Import Custom Components
import RegimenList from "../regimen-list/RegimenList";
import Regimen from "../regimen/Regimen";

class RegimenContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "component": "regimenList",
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
        this.showCreateRegimen = this.showCreateRegimen.bind(this);
        this.showRegimenList = this.showRegimenList.bind(this);
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
            "component": "regimenList",
            "regimens": regimens
        });
    }

    showCreateRegimen () {
        this.setState({
            "component": "regimen"
        });
    }

    showRegimenList () {
        this.setState({
            "component": "regimenList"
        });
    }

    render () {
        let component = null;

        switch (this.state.component) {
            case "regimenList":
                component = <RegimenList regimens={ this.state.regimens } handleOnDelete={ this.handleOnDelete } showCreateRegimen={ this.showCreateRegimen } />;
                break;
            case "regimen":
                component = <Regimen handleOnCreate={ this.handleOnCreate } showRegimenList={ this.showRegimenList } />;
                break;
            default:
                break;
        }


        return (
            <>
                { component }
            </>
        );
    }
}

export default RegimenContainer;
