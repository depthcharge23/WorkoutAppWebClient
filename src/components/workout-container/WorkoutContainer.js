import React from "react";
import './WorkoutContainer.css';

// Import Custom Components
import WorkoutList from "../workout-list/WorkoutList";

class WorkoutContainer extends React.Component {
    render () {
        return (
            <>
                <WorkoutList />
            </>
        );
    }
}

export default WorkoutContainer;
