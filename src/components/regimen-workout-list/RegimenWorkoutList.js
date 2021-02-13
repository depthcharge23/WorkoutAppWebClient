import React from "react";
import "./RegimenWorkoutList.css";

// Import Custom Components
import RegimenWorkoutItem from "../regimen-workout-item/RegimenWorkoutItem";

const RegimenWorkoutList = () => {
    return (
        <>
            <ul>
                <li>Push Ups</li>
                <li>Sit Ups</li>
                <li>Crunches</li>
                <li><RegimenWorkoutItem /></li>
            </ul>
        </>
    )
}

export default RegimenWorkoutList;
