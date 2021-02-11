import React from "react";
import './RegimenItem.css';

const RegimenItem = (props) => {
    return (
        <>
            { props.regimen.regimenName }
        </>
    );
}

export default RegimenItem;
