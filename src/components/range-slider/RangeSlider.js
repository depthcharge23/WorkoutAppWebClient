import React, { useState } from "react";
import "./RangeSlider.css";

const RangeSlider = (props) => {
    const [ value, setValue ] = useState(Number(props.value));

    const handleOnChange = (e) => {
        setValue(Number(e.target.value));

        props.callback(Number(e.target.value));
    };

    return (
        <>
            <label className="label" htmlFor={ props.inputName }>
                { props.inputNameDisplay }
            </label>

            <div className="range-contianer">
                <input
                    className="range"
                    type="range"
                    name={ props.inputName }
                    min={ props.min }
                    max={ props.max }
                    step={ props.step }
                    value={ value }
                    onChange={ handleOnChange }
                />

                <p className="value-box">{ props.unit ? `${value} ${props.unit}` : value }</p>
            </div>
        </>
    );
};

export default RangeSlider;
