import React from "react";
import "./WorkoutItem.css";

const WorkoutItem = (props) => {
    return (
        <div className="item">
            <span className="workout-name" onClick={ () => { props.onWorkoutSelect(props.index) } }>{ props.workout.workoutName }</span>
            <button className="delete-button" onClick={ () => { props.onDelete(props.index) } }>Delete</button>
        </div>
    );
}

export default WorkoutItem;
