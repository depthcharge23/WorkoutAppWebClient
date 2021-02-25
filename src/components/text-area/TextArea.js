import React, { useState } from "react";
import "./TextArea.css";

const TextArea = (props) => {
    const [ value, setValue ] = useState(props.value);
    const [ error, setError ] = useState(" "); 

    const handleOnChange = async (e) => {
        const elementValue = e.target.value;
        const textAreaError = props.isAsync ? await props.validate(elementValue) : props.validate(elementValue);

        if (textAreaError) {
            e.target.classList.add("error-input");
        } else {
            e.target.classList.remove("error-input");
        }

        setValue(elementValue);
        setError(textAreaError);

        props.callback(elementValue, textAreaError ? true : false);
    };

    return (
        <>
            <label className="label" htmlFor={ props.textAreaName }>
                { props.textAreaDisplay }
            </label>

            <p className="error">{ error }</p>

            <textarea
                className="textarea"
                name={ props.textAreaName }
                rows={ props.rows }
                cols={ props.cols }
                value={ value }
                onChange={ handleOnChange }
            ></textarea>
        </>
    );
};

export default TextArea;
