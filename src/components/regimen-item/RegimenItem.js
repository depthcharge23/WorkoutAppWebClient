import React from "react";
import "./RegimenItem.css";

const RegimenItem = (props) => {
    return (
        <div className="item">
            <span className="regimen-name" onClick={ () => { props.onRegimenSelect(props.index); } }>{ props.regimen.regimenName }</span>
            <button className="delete-button" onClick={ () => { props.onDelete(props.index); } }>X</button>
        </div>
    );
}

export default RegimenItem;
