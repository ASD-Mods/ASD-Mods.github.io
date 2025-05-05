import React from 'react'
import { useState } from 'react';

import './ExpansiveImage.css'

import tempImage from '../assets/capsule_616x353.jpg'

const ExpansiveImage = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
    <div onClick={toggleExpand} className='main-div' >
        <img src={tempImage} alt="asd" />

        <h1>capsule_616x353.jpg</h1>
    </div>

    {isExpanded && (
    <div className="fullscreen-overlay" onClick={toggleExpand}>
      <img src={tempImage} alt="Expanded" className="fullscreen-image" />
    </div>
    )}
    </>
  )
}

export default ExpansiveImage