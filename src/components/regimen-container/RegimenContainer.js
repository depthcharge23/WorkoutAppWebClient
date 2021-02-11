import React from "react";
import './RegimenContainer.css';

// Import Custom Components
import RegimenList from "../regimen-list/RegimenList";

const RegimenContainer = () => {
  return (
    <>
        <h2>Regimen</h2>
        <RegimenList />
    </>
  );
}

export default RegimenContainer;
