import React from "react";
import "./RegimenItem.css";

const RegimenItem = (props) => {
    return (
        <>
            <span onClick={ () => { props.onRegimenSelect(props.index); } }>{ props.regimen.regimenName }</span>
            <button onClick={ () => { props.onDelete(props.index); } }>X</button>
        </>
    );
}

export default RegimenItem;
