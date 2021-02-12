import React from "react";
import './Regimen.css';

class Regimen extends React.Component {
    render () {
        return (
            <form>
                <label htmlFor="regimen-name">Regimen Name</label>
                <input type="text" name="regimen-name" />

                <label htmlFor="rest-between-workout">Rest Between Workout</label>
                <input type="integer" name="rest-between-workout" />

                <button>Back</button>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Regimen;
