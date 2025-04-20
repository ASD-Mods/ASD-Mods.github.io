import React from 'react'
import "./SideBySidePara.css"
import tempImage from '../assets/capsule_616x353.jpg'

/* MAKE THIS REUSABLE AND ADD PROPS SO IT WORKS */

const SideBySidePara = () => {
  return (
    <div className='SideBySidePara'>
        <div className='SBSP-Left'>
            <h3>Many different games that you can chose from.</h3>
            <p>Choose from over 23048702537 different games for you to play, mod, and enjoy.</p>
        </div>
        <div className='SBSP-Right'>
            <img width="100%" src={tempImage} alt="STUFF" />
        </div>
    </div>
  )
}

export default SideBySidePara