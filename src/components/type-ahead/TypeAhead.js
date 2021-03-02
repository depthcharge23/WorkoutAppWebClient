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
        setShowItems(true);
    };

    const handleOnBlur = (e) => {
        const elementVal = e.target.value;
        const foundItem = props.items.find(item => {
            return item.toUpperCase().indexOf(elementVal.toUpperCase()) > -1;
        });

        if (foundItem && filterItems.length === 1) {
            e.target.classList.remove("error-input");
            setValue(foundItem);
            setShowItems(false);
        } else {
            e.target.classList.add("error-input");            
            setError("Please select an item from the list.");
        }
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
        setShowItems(true);
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
    };

    return (
        <>
            <label className="label" htmlFor={ props.typeAheadName }>
                { props.typeAheadNameDisplay }
            </label>

            <p className="error">{ error }</p>

            <div className="type-ahead">
                <input 
                    type="text"
                    id="type-ahead-input"
                    list="data"
                    name={ props.typeAheadName }
                    value={ value }
                    onFocus={ handleOnFocus }
                    onBlur={ handleOnBlur }
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
