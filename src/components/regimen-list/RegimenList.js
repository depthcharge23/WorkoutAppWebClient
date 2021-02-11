import React from "react";
import './RegimenList.css';

// Import Custom Components
import RegimenItem from "../regimen-item/RegimenItem";

const RegimenList = (props) => {
    return (
        <ul>
            {
                props.regimens.map((regimen, index) => (
                    <li><RegimenItem regimen={ regimen } key={ index } /></li>
                ))
            }
        </ul>
    );
}

export default RegimenList;
