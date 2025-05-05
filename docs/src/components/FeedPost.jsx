import React from 'react'

import ExpansiveImage from './ExpansiveImage'

import './FeedPost.css'

import tempImage from '../assets/capsule_616x353.jpg'

const FeedPost = () => {
  return (
    <div className='container'>
        <h3>Jan 1st 2025</h3>
        <h1>Aquatic Update</h1>
        <p>Digga d im in love with violence violence woah he works with
            trident all of them know but they keepin it silent cant be gang u dont fit the
            requiremnts im a man with integrity even when they beggin me
        </p>
        <div className='attachments'>
            <ExpansiveImage />
            <ExpansiveImage />
            <ExpansiveImage />
        </div>
    </div>
  )
}

export default FeedPost