import React from "react";
import "./RegimenWorkoutList.css";

// Import Custom Components
import RegimenWorkoutItem from "../regimen-workout-item/RegimenWorkoutItem";

const RegimenWorkoutList = (props) => {
    return (
        <>
            <h2>Regimen Workouts</h2>
            <ul>
                {
                    props.regimenWorkouts.map((regimenWorkout, index) => (
                        <li key={index}>
                            <RegimenWorkoutItem
                                regimenWorkout={ regimenWorkout }
                                index={ index }
                                onDelete={ props.handleOnDelete }
                            />
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default RegimenWorkoutList;
