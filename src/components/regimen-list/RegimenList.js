import React from "react";
import "./RegimenList.css";

// Import Custom Components
import RegimenItem from "../regimen-item/RegimenItem";

const RegimenList = (props) => {
    return (
        <div className="list">
            <h2 className="list-header">Your Regimens</h2>
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
            <button className="create-button" onClick={ props.showCreateRegimen } >Create Regimen</button>
        </div>
    );
}

export default RegimenList;
