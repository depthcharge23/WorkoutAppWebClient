import React from "react";
import "./RegimenContainer.css";

// Import Custom Components
import RegimenList from "../regimen-list/RegimenList";
import Regimen from "../regimen/Regimen";

const dotenv = require("dotenv");
dotenv.config();

const SERVER_DNS = process.env.SERVER_DNS || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const CONNECTION_STR = `http://${SERVER_DNS}:${SERVER_PORT}`;

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
        const response = await fetch(`${CONNECTION_STR}/regimen?u=1`, {
            "method": "GET"
        });
        const json = await response.json();

        this.setState({
            "regimens": json
        });
    }

    async handleOnDelete (i) {
        const regimens = this.state.regimens.slice();
        const regimen = regimens[i];

        const response = await fetch(`${CONNECTION_STR}/regimen/${regimen["regimenId"]}`, {
            "method": "DELETE"
        });

        const json = await response.json();
        
        regimens.splice(i, 1);

        this.setState({
            "regimens": regimens
        });
    }

    async handleOnCreate (regimenName, restBetweenWorkout) {
        const response = await fetch(`${CONNECTION_STR}/regimen`, {
            "method": "POST",
            "body": JSON.stringify({
                "regimenId": null,
                "userId": 1,
                "regimenName": regimenName,
                "restBetweenWorkout": restBetweenWorkout
            }),
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();

        const regimens = this.state.regimens.slice();
        regimens.push(json);

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
