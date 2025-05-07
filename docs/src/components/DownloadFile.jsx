import React from 'react'
import { useState } from 'react';

import './DownloadFile.css'

const DownloadFile = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
      const toggleExpand = () => {
        setIsExpanded(!isExpanded);
      };

  return (
    <>
        <div className='download-cont'>
            <div className='file-info'>
                <h1>v12.4.12 - NeoForge</h1>
                <p>v12-4-12modname-neoforge.jar</p>
            </div>
            <div className='date-posted'>
                <h3>3 months ago</h3>
            </div>
            <div className='more-info'>
                <div onClick={toggleExpand} className='df-more-info'>
                    More Info
                </div>
            </div>
            <div className='df-buttons'>
                <div className='df-download'>
                    Download
                </div>
            </div>
        </div>
        {isExpanded && (
            <div className="df-fullscreen-overlay" onClick={toggleExpand}>
              <div className='df-expanded-div'>
                <h1>Hello WOrld</h1>
              </div>
            </div>
            )}
    </>
  )
}

export default DownloadFile