import React from "react";
import "./RegimenList.css";

// Import Custom Components
import RegimenItem from "../regimen-item/RegimenItem";

const RegimenList = (props) => {
    return (
        <>
            <h2 className="regimen-list-header">Your Regimens</h2>
            <ul>
                {
                    props.regimens.map((regimen, index) => (
                        <li key={ index }>
                            <RegimenItem 
                                regimen={ regimen } 
                                index={ index }
                                onDelete={ props.handleOnDelete }
                                onRegimenSelect={ props.handleRegimenSelect }
                            />
                        </li>
                    ))
                }
            </ul>
            <button className="create-regimen-button" onClick={ props.showCreateRegimen } >Create Regimen</button>
        </>
    );
}

export default RegimenList;
