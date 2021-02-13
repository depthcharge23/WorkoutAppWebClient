import React from "react";
import './WorkoutItem.css';

const WorkoutItem = (props) => {
    return (
        <>
            { props.workout.workoutName }
            <button>X</button>
        </>
    );
}

export default WorkoutItem;
