import React from 'react'

import './DownloadFile.css'

const DownloadFile = () => {
  return (
    <div className='download-cont'>
        <div className='file-info'>
            <h1>v12.4.12 - NeoForge</h1>
            <p>v12-4-12modname-neoforge.jar</p>
        </div>
        <div className='date-posted'>
            <h3>3 months ago</h3>
        </div>
        <div className='more-info'>
            <div className='df-more-info'>
                More Info
            </div>
        </div>
        <div className='df-buttons'>
            <div className='df-download'>
                Download
            </div>
        </div>
    </div>
  )
}

export default DownloadFile