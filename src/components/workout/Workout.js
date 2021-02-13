import React from "react";
import "./Workout.css";

class Workout extends React.Component {
    constructor (props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();

        this.props.handleOnCreate("asdf", "asdf");
    }

    render () {
        return (
            <>
                <form onSubmit={ this.handleSubmit }>
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
