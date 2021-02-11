import React from "react";
import './RegimenList.css';

// Import Custom Components
import RegimenItem from "../regimen-item/RegimenItem";

const RegimenList = () => {
    return (
        <ul>
            <li>Leg Day</li>
            <li>CHEST!</li>
            <li>Bis & Back</li>
            <li><RegimenItem /></li>
        </ul>
    );
}

export default RegimenList;
