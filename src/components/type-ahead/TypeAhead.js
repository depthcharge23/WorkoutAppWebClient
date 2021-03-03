import React, { useState } from "react";
import "./TypeAhead.css";

const TypeAhead = (props) => {
    const [ value, setValue ] = useState(props.value);
    const [ filterItems, setFilterItems ] = useState([]);
    const [ showItems, setShowItems ] = useState(false);
    const [ error, setError ] = useState("");

    const handleOnFocus = (e) => {
        const elementVal = e.target.value;

        const newItems = props.items.filter(value => {
            return value.toUpperCase().indexOf(elementVal.toUpperCase()) > -1;
        });

        setFilterItems(newItems);
        setShowItems(newItems && newItems.length > 0);
    };

    const handleOnChange = (e) => {
        const elementVal = e.target.value;
        let typeAheadError = "";
        
        const newItems = props.items.filter(item => {
            return item.toUpperCase().indexOf(elementVal.toUpperCase()) > -1;
        });

        if (!newItems || newItems.length === 0) {
            e.target.classList.add("error-input");            
            typeAheadError = "The item does not exist in the list. Please select an item from the list.";
        } else {
            e.target.classList.remove("error-input");
        }

        setValue(elementVal);
        setFilterItems(newItems);
        setShowItems(newItems && newItems.length > 0);
        setError(typeAheadError);

        props.callback(elementVal, typeAheadError ? true : false);
    };

    const handleOnClick = (e) => {
        const elementVal = e.target.innerText;
        const input = document.getElementById("type-ahead-input");

        input.classList.remove("error-input");

        setValue(elementVal);
        setShowItems(false);
        setError("");

        props.callback(elementVal, false);
    };

    return (
        <>
            <label className="label" htmlFor={ props.typeAheadName }>
                { props.typeAheadNameDisplay }
            </label>

            <p className="error">{ error }</p>

            <div className="type-ahead">
                <input
                    id="type-ahead-input"
                    type="text"
                    autoComplete="off"
                    name={ props.typeAheadName }
                    value={ value }
                    onFocus={ handleOnFocus }
                    onChange={ handleOnChange }
                />

                <ul className="type-ahead-list" hidden={ !showItems }>
                    {
                        filterItems.map((value, index) => (
                            <li
                                className="type-ahead-list-item"
                                key={ index }
                                onClick={ handleOnClick }
                            >
                                { value }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default TypeAhead;
