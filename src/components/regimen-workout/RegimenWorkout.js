import React from "react";
import "./RegimenWorkout.css";

class RegimenWorkout extends React.Component {
    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        this.props.handleOnCreate("asdf", 1, 1);
    }

    render () {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label htmlFor="workout-name">Workout Name</label>
                <input type="text" name="workout-name" />

                <label htmlFor="sets"># of Sets</label>
                <input type="integer" name="sets" />

                <label htmlFor="reps"># of Reps</label>
                <input type="integer" name="reps" />

                <button>Back</button>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default RegimenWorkout;
