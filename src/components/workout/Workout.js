import React from "react";
import "./Workout.css";

class Workout extends React.Component {
    render () {
        return (
            <>
                <form>
                    <label>Workout Name</label>
                    <input type="text" />

                    <label>Workout Description</label>
                    <input type="text" />

                    <button>Back</button>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default Workout;
