import React from 'react'
import "./SideBySidePara.css"
import tempImage from '../assets/capsule_616x353.jpg'

/* MAKE THIS REUSABLE AND ADD PROPS SO IT WORKS */

const SideBySidePara = () => {
  return (
    <div className='SideBySidePara'>
        <div className='SBSP-Left'>
            <h1>Left</h1>
            <p>asduh hasd iuguiasd giagd iugasdiug aisug diuagsd iugsd iugsa udasg diusagd asduh hasd iuguiasd giagd iugasdiug aisug diuagsd iugsd iugsa udasg diusagdiugsad iug sadiu iuasd giuasgdiugiudgiuas dguisgd auidag siugd asiugida</p>
        </div>
        <div className='SBSP-Right'>
            <img width="100%" src={tempImage} alt="STUFF" />
        </div>
    </div>
  )
}

export default SideBySidePara