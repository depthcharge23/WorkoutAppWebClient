import React from "react";
import './WorkoutItem.css';

const WorkoutItem = (props) => {
    return (
        <>
            { props.workout.workoutName }
            <button onClick={ () => { props.onDelete(props.index) } }>X</button>
        </>
    );
}

export default WorkoutItem;
