import React from "react";
import "./WorkoutItem.css";

const WorkoutItem = (props) => {
    return (
        <div className="item">
            <span onClick={ () => { props.onWorkoutSelect(props.index) } }>{ props.workout.workoutName }</span>
            <button className="delete-button" onClick={ () => { props.onDelete(props.index) } }>X</button>
        </div>
    );
}

export default WorkoutItem;
