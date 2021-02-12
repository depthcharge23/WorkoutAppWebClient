import React from "react";
import './RegimenList.css';

// Import Custom Components
import RegimenItem from "../regimen-item/RegimenItem";

const RegimenList = (props) => {
    return (
        <ul>
            {
                props.regimens.map((regimen, index) => (
                    <li key={ index }>
                        <RegimenItem 
                            regimen={ regimen } 
                            index={ index }
                            onDelete={ props.handleOnDelete }
                        />
                    </li>
                ))
            }
        </ul>
    );
}

export default RegimenList;
