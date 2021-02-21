import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
    const [ value, setValue ] = useState(props.value);
    const [ error, setError ] = useState(" ");

    const handleOnChange = async (e) => {
        const elementValue = e.target.value;
        const inputError = props.isAsync ? await props.validate(elementValue) : props.validate(elementValue);

        if (inputError) {
            e.target.classList.add("error-input");
        } else {
            e.target.classList.remove("error-input");
        }

        setValue(elementValue);
        setError(inputError);

        props.callback(elementValue, inputError ? true : false);
    };

    return (
        <>
            <label className="label" htmlFor={ props.inputName }>
                { props.inputNameDisplay }
            </label>

            <p className="error">{ error }</p>

            <input 
                className="input"
                type="text"
                name={ props.inputName }
                value={ value }
                onChange={ handleOnChange }
            />
        </>
    );
};

export default Input;
