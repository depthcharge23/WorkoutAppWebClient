import React from "react";
import "./WorkoutList.css";

// Import Custom Components
import WorkoutItem from "../workout-item/WorkoutItem";

const WorkoutList = (props) => {
    return (
        <>
            <h2>Workouts</h2>
            <ul>
                {
                    props.workouts.map((workout, index) => (
                        <li key={ index }>
                            <WorkoutItem workout={ workout } index={ index } />
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default WorkoutList;
