import React, { ReactNode } from "react";
import "./SideBySidePara.css";
import tempImage from "../assets/capsule_616x353.jpg";

/**
 * Props:
 * - Title: string
 * - children: ReactNode (text content)
 * - image?: string (optional custom image source)
 * - reverse?: boolean (swap sides)
 */

const SideBySidePara = ({ Title, children, image, reverse }) => {
  return (
    <div className={`SideBySidePara ${reverse ? "reverse" : ""}`}>
      <div className="SBSP-Left">
        <h3>{Title}</h3>
        <p>{children}</p>
      </div>
      <div className="SBSP-Right">
        <img width="100%" src={image || tempImage} alt="STUFF" />
      </div>
    </div>
  );
};


export default SideBySidePara;
