import React from "react";
import "./RegimenWorkoutItem.css";

const RegimenWorkoutItem = (props) => {
    return (
        <div className="item">
            <span className="regimen-workout-name" onClick={ () => { props.onSelect(props.index); } }>{ `${props.regimenWorkout.workoutName} Sets: ${props.regimenWorkout.sets} Reps: ${props.regimenWorkout.reps}` }</span>
            <button className="delete-button" onClick={ () => { props.onDelete(props.index); } }>Delete</button>
        </div>
    );
}

export default RegimenWorkoutItem;
