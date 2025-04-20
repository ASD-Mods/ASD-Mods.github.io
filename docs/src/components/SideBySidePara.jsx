import React, { ReactNode } from "react";
import "./SideBySidePara.css";
import tempImage from "../assets/capsule_616x353.jpg";

/* make image a property */


const SideBySidePara = (Props) => {
  return (
    <div className="SideBySidePara">
      <div className="SBSP-Left">
        <h3>{Props.Title}</h3>
        <p>
          {Props.children}
        </p>
      </div>
      <div className="SBSP-Right">
        <img width="100%" src={tempImage} alt="STUFF" />
      </div>
    </div>
  );
};

export default SideBySidePara;
