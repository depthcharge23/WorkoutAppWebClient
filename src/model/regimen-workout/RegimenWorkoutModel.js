const dotenv = require("dotenv");
dotenv.config();

const SERVER_DNS = process.env.SERVER_DNS || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const CONNECTION_STR = `http://${SERVER_DNS}:${SERVER_PORT}`;

class RegimenWorkoutModel {
    static async createRegimenWorkout (regimenId, workoutId, reps, sets) {
        const response = await fetch(`${CONNECTION_STR}/regimen-workout`, {
            "method": "POST",
            "body": JSON.stringify({
                "regimenWorkoutId": null,
                "regimenId": regimenId,
                "workoutId": workoutId,
                "reps": reps,
                "sets": sets
            }),
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();

        return json;
    }

    static async findRegimenWorkoutsByRegimenId (regimenId) {
        const response = await fetch(`${CONNECTION_STR}/regimen-workout?r=${regimenId}`, {
            "method": "GET"
        });

        const json = await response.json();

        return json;
    }

    static async updateRegimenWorkoutByRegimenWorkoutId (regimenWorkoutId, regimenWorkout) {
        const response = await fetch(`${CONNECTION_STR}/regimen-workout/${regimenWorkoutId}`, {
            "method": "POST",
            "body": JSON.stringify(regimenWorkout),
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();

        return json;
    }

    static async deleteRegimenWorkoutByRegimenWorkoutId (regimenWorkoutId) {
        const response = await fetch(`${CONNECTION_STR}/regimen-workout/${regimenWorkoutId}`, {
            "method": "DELETE"
        });

        const json = await response.json();

        return json;
    }
}

export default RegimenWorkoutModel;
