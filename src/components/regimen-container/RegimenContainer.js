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
            "selectedRegimen": null
        };

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnCreate = this.handleOnCreate.bind(this);
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

        const deletedRegimen = await RegimenModel.deleteRegimenByRegimenId(regimen["regimenId"]);
        console.log(deletedRegimen);
        
        regimens.splice(i, 1);

        this.setState({
            "regimens": regimens
        });
    }

    async handleOnCreate (regimenName, restBetweenWorkout) {
        const createdRegimen = await RegimenModel.createRegimen(regimenName, restBetweenWorkout);        

        const regimens = this.state.regimens.slice();
        regimens.push(createdRegimen);

        this.setState({
            "regimens": regimens,
            "component": "regimenList"
        });
    }

    handleRegimenSelect (i) {
        this.setState({
            "selectedRegimen": this.state.regimens[i],
            "component": "regimen"
        });
    }

    showCreateRegimen () {
        this.setState({
            "selectedRegimen": null,
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
                    handleOnCreate={ this.handleOnCreate }
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
