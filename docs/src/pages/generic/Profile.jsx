/*

page with a users profile
has their overview
has their mod gallery
has their feed
has their links

buttons to:
- report
- bump (like)
- follow

*/


import ExpansiveImage from '../../components/ExpansiveImage.jsx'
import FeedPost from '../../components/FeedPost.jsx'

import tempImage from '../../assets/capsule_616x353.jpg'

import "./Profile.css"

import { useState } from 'react'
import DownloadFile from '../../components/DownloadFile.jsx'

const Profile = () => {
  const [currentPage, setCurrentPage] = useState("Overview");

  return (
    <>
    <div className='pro-main'>
      <div className='pro-topbar'>
        <img className='pro-logo' src={tempImage} alt="" />
        <div>
          <h2>Cool Ahh pro Name</h2>
          <p>Digga d im a well known bandit heard a new mash js landed jeez cop it chop it sand it</p>
        </div>
        <div className='pro-topbar-buttons'>
           
          <div className='df-download'>
                Download
          </div>
        </div>
      </div>
      
      <div className='mp-body-buttons'>
        <button onClick={() => setCurrentPage("Overview")}>
          Overview
        </button>
        <button onClick={() => setCurrentPage("pros")}>
          pros
        </button>
        <button onClick={() => setCurrentPage("Gallery")}>
          Gallery
        </button>
        <button onClick={() => setCurrentPage("Feed")}>
          Feed
        </button>
        <button onClick={() => setCurrentPage("Downloads")}>
          Downloads
        </button>
      </div>
      <div className='current-page'>
        {currentPage === "Overview" ? (
          <div>
            <h1>Overview</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Libero harum iure, aspernatur neque officiis consequatur 
                dolores proi placeat facilis quibusdam corrupti atque 
                distinctio incidunt quisquam voluptates eum, earum aut fugiat.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Libero harum iure, aspernatur neque officiis consequatur 
                dolores proi placeat facilis quibusdam corrupti atque 
                distinctio incidunt quisquam voluptates eum, earum aut fugiat.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Libero harum iure, aspernatur neque officiis consequatur 
                dolores proi placeat facilis quibusdam corrupti atque 
                distinctio incidunt quisquam voluptates eum, earum aut fugiat.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Libero harum iure, aspernatur neque officiis consequatur 
                dolores proi placeat facilis quibusdam corrupti atque 
                distinctio incidunt quisquam voluptates eum, earum aut fugiat.</p>
          </div>
          ) : currentPage === "Gallery" ? (
            <div className='gallery'>
              <ExpansiveImage src="this is useless rn" />
              <ExpansiveImage src="this is useless rn" />
              <ExpansiveImage src="this is useless rn" />
              <ExpansiveImage src="this is useless rn" />
              <ExpansiveImage src="this is useless rn" />
              <ExpansiveImage src="this is useless rn" />
            </div>
          ) : currentPage === "Feed" ? (
            <div className='feed'>
              <FeedPost />
              <FeedPost />
            </div>
          ) : currentPage === "Downloads" ? (
            <div className='downloads'>
              <div className='title-cont'>
                  <div className='mp-file-info'>
                      <h1>File Info</h1>
                  </div>
                  <div className='mp-date-posted'>
                      <h3>Time Posted</h3>
                  </div>
                  <div className='mp-more-info'>
                      <h3>Buttons</h3>
                  </div>
              </div>
              <hr className="mp-clinebreak"/>

              <DownloadFile />
              <DownloadFile />
            </div>
          ) : (<h1>Error has occured</h1>)}
      </div>
    </div>
    </>
  )
}

export default Profile