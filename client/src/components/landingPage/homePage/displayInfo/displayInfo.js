import React from "react";
import "./displayInfo.css";
export default function DisplayInfo() {
  return (
    <React.Fragment>
      <div className='container'>
        <h1 className="header">
          EasyBackendCl
          <img
            className='displayInfoImg'
            src={require("../../../../assets/images/gears.png")}
          />
        </h1>
        <p className="text">
          Create a Remote Database and a REST FULL API in minutes without
          writing any peice of code!
        </p>
      </div>
    </React.Fragment>
  );
}
