import React from "react";
import "./RegimenWorkoutList.css";

// Import Custom Components
import RegimenWorkoutItem from "../regimen-workout-item/RegimenWorkoutItem";

const RegimenWorkoutList = (props) => {
    return (
        <div className="list">
            <h2 className="list-header">Regimen Workouts</h2>
            <ul>
                {
                    props.regimenWorkouts.map((regimenWorkout, index) => (
                        <li key={index}>
                            <RegimenWorkoutItem
                                regimenWorkout={ regimenWorkout }
                                index={ index }
                                onDelete={ props.handleOnDelete }
                                onSelect={ props.handleOnSelect }
                            />
                        </li>
                    ))
                }
            </ul>
            <button className="create-button" onClick={ props.showCreateRegimenWorkout }>Create Regimen Workout</button>
        </div>
    )
}

export default RegimenWorkoutList;
