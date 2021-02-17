const dotenv = require("dotenv");
dotenv.config();

const SERVER_DNS = process.env.SERVER_DNS || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const CONNECTION_STR = `http://${SERVER_DNS}:${SERVER_PORT}`;

class RegimenModel {
    static async createRegimen (regimenName, restBetweenWorkout) {
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

        return json;
    }

    static async findRegimensByUserId (userId) {
        const response = await fetch(`${CONNECTION_STR}/regimen?u=${userId}`, {
            "method": "GET"
        });

        const json = await response.json();

        return json;
    }

    static async updateRegimenByRegimenId (regimenId, regimen) {
        const response = await fetch(`${CONNECTION_STR}/regimen/${regimenId}`, {
            "method": "POST",
            "body": JSON.stringify(regimen),
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();

        return json;
    }

    static async deleteRegimenByRegimenId (regimenId) {
        const response = await fetch(`${CONNECTION_STR}/regimen/${regimenId}`, {
            "method": "DELETE"
        });

        const json = await response.json();

        return json;
    }

    static validateRegimenName (regimenName) {
        if (!regimenName) {
            return "Regimen Name cannot be empty.";
        } else if (regimenName && regimenName.length > 50) {
            return "Regimen Name length cannot be greater than 50.";
        }

        return "";
    }

    static validateRestBetweenWorkout (restBetweenWorkout) {
        if (!restBetweenWorkout && restBetweenWorkout !== 0) {
            return "Rest Between Workout cannot be empty.";
        } else if (restBetweenWorkout && isNaN(Number(restBetweenWorkout))) {
            return "Rest Between Workout has to be a number.";
        } else if (restBetweenWorkout && restBetweenWorkout < 0) {
            return "Rest Between Workout cannot be a negative number.";
        }

        return "";
    }
}

export default RegimenModel;
