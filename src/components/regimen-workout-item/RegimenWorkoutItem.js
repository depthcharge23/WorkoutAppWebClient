import React from "react";
import "./RegimenWorkoutItem.css";

const RegimenWorkoutItem = (props) => {
    return (
        <>
            <span onClick={ () => { props.onSelect(props.index); } }>{ `${props.regimenWorkout.workoutName} Sets: ${props.regimenWorkout.sets} Reps: ${props.regimenWorkout.reps}` }</span>
            <button onClick={ () => { props.onDelete(props.index); } }>X</button>
        </>
    );
}

export default RegimenWorkoutItem;
