const dotenv = require("dotenv");
dotenv.config();

const SERVER_DNS = process.env.SERVER_DNS || "localhost";
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const CONNECTION_STR = `http://${SERVER_DNS}:${SERVER_PORT}`;

class WorkoutModel {
    static async createWorkout (workoutName, workoutDescription) {
        const response = await fetch(`${CONNECTION_STR}/workout`, {
            "method": "POST",
            "body": JSON.stringify({
                "workoutId": null,
                "workoutName": workoutName,
                "workoutDescription": workoutDescription
            }),
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();

        return json;
    }

    static async findAllWorkouts () {
        const response = await fetch(`${CONNECTION_STR}/workout`, {
            "method": "GET"
        });

        const json = await response.json();

        return json;
    }

    static async updateWorkoutByWorkoutId (workoutId, workout) {
        const response = await fetch(`${CONNECTION_STR}/workout/${workoutId}`, {
            "method": "POST",
            "body": JSON.stringify(workout),
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });

        const json = await response.json();

        return json;
    }

    static async deleteWorkoutByWorkoutId (workoutId) {
        const response = await fetch(`${CONNECTION_STR}/workout/${workoutId}`, {
            "method": "DELETE"
        });

        const json = await response.json();

        return json;
    }

    static async validateWorkoutName (workoutName) {
        if (!workoutName) {
            return "Workout Name cannot be empty.";
        } else if (workoutName && workoutName.length > 50) {
            return "Workout Name length cannot be greater than 50.";
        }

        const response = await fetch(`${CONNECTION_STR}/workout/workout-name/${ encodeURIComponent(workoutName) }`, {
            "method": "GET"
        });

        const json = await response.json();

        if (json) {
            return `There is already a workout named ${workoutName}. Please enter a unique workout name.`;
        }
        

        return "";
    }

    static validateWorkoutDescription (workoutDescription) {
        if (!workoutDescription) {
            return "Workout Description cannot be empty.";
        }

        return "";
    }
}

export default WorkoutModel;
