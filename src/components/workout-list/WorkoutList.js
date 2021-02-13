import React from "react";
import "./WorkoutList.css";

// Import Custom Components
import WorkoutItem from "../workout-item/WorkoutItem";

const WorkoutList = () => {
    return (
        <>
            <h2>Workouts</h2>
            <ul>
                <li>Push Ups</li>
                <li>Squats</li>
                <li>Lunges</li>
                <li><WorkoutItem /></li>
            </ul>
        </>
    );
};

export default WorkoutList;
