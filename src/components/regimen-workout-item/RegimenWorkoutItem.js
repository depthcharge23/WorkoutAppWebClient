import React from "react";
import "./RegimenWorkoutItem.css";

const RegimenWorkoutItem = (props) => {
    return (
        <>
            { `${props.regimenWorkout.workoutName} Sets: ${props.regimenWorkout.sets} Reps: ${props.regimenWorkout.reps}` }
            <button onClick={ () => { props.onDelete(props.index); } }>X</button>
        </>
    );
}

export default RegimenWorkoutItem;
