import React from "react";
import "./RegimenContainer.css";

// Import Custom Components
import RegimenList from "../regimen-list/RegimenList";
import Regimen from "../regimen/Regimen";

// Import Models
import RegimenModel from "../../model/regimen/RegimenModel";

class RegimenContainer extends React.Component {
    constructor () {
        super();

        this.state = {
            "component": "regimenList",
            "regimens": [],
            "selectedRegimen": null,
            "action": "create"
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleRegimenSelect = this.handleRegimenSelect.bind(this);

        this.showCreateRegimen = this.showCreateRegimen.bind(this);
        this.showRegimenList = this.showRegimenList.bind(this);
    }

    async componentDidMount () {
        const regimens = await RegimenModel.findRegimensByUserId(1);

        this.setState({
            "regimens": regimens
        });
    }

    async handleOnDelete (i) {
        const regimens = this.state.regimens.slice();
        const regimen = regimens[i];

        await RegimenModel.deleteRegimenByRegimenId(regimen["regimenId"]);
        
        regimens.splice(i, 1);

        this.setState({
            "regimens": regimens
        });
    }

    async handleOnSubmit (regimenName, restBetweenWorkout) {
        const regimens = this.state.regimens.slice();
        const selectedRegimen = this.state.selectedRegimen;

        if (this.state.action === "create") {
            const createdRegimen = await RegimenModel.createRegimen(regimenName, restBetweenWorkout);
            regimens.push(createdRegimen);
        } else {
            selectedRegimen["regimenName"] = regimenName;
            selectedRegimen["restBetweenWorkout"] = restBetweenWorkout;

            const updatedReigmen = await RegimenModel.updateRegimenByRegimenId(selectedRegimen["regimenId"], selectedRegimen);
            const index = regimens.indexOf(selectedRegimen);
    
            regimens[index] = updatedReigmen;
        }

        this.setState({
            "regimens": regimens,
            "selectedRegimen": selectedRegimen,
            "component": "regimenList"
        });
    }

    handleRegimenSelect (i) {
        this.setState({
            "selectedRegimen": this.state.regimens[i],
            "component": "regimen",
            "action": "update"
        });
    }

    showCreateRegimen () {
        this.setState({
            "selectedRegimen": null,
            "component": "regimen",
            "action": "create"
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
                component = <RegimenList
                    regimens={ this.state.regimens }
                    handleRegimenSelect={ this.handleRegimenSelect }
                    handleOnDelete={ this.handleOnDelete }
                    showCreateRegimen={ this.showCreateRegimen }
                />;
                break;
            case "regimen":
                component = <Regimen
                    regimen={ this.state.selectedRegimen }
                    headerName={ this.state.selectedRegimen && this.state.selectedRegimen.regimenName ? this.state.selectedRegimen.regimenName : "Create Regimen" }
                    handleOnSubmit={ this.handleOnSubmit }
                    showRegimenList={ this.showRegimenList }
                />;
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
