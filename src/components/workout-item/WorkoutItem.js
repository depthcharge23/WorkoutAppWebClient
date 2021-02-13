import React from "react";
import "./WorkoutItem.css";

const WorkoutItem = (props) => {
    return (
        <>
            <span onClick={ () => { props.onWorkoutSelect(props.index) } }>{ props.workout.workoutName }</span>
            <button className="delete-button" onClick={ () => { props.onDelete(props.index) } }>X</button>
        </>
    );
}

export default WorkoutItem;
