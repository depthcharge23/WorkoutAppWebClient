import React from "react";
import './WorkoutItem.css';

const WorkoutItem = (props) => {
    return (
        <>
            { props.workout.workoutName }
        </>
    );
}

export default WorkoutItem;
