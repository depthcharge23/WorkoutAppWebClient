import React from "react";
import "./WorkoutList.css";

// Import Custom Components
import WorkoutItem from "../workout-item/WorkoutItem";

const WorkoutList = (props) => {
    return (
        <div className="list">
            <h2 className="list-header">Workouts</h2>
            <ul>
                {
                    props.workouts.map((workout, index) => (
                        <li key={ index }>
                            <WorkoutItem
                                workout={ workout }
                                index={ index }
                                onDelete={ props.handleOnDelete }
                                onWorkoutSelect={ props.handleWorkoutSelect }
                            />
                        </li>
                    ))
                }
            </ul>
            <button className="create-button" onClick={ props.showCreateWorkout }>Create Workout</button>
        </div>
    );
};

export default WorkoutList;
