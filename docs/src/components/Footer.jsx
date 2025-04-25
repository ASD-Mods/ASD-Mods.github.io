import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-div'>
      <div className='footer-row'>

        <div className='footer-col'>
          <h3>Socials</h3>
          <a href="">Discord</a>
          <a href="">Twitter</a>
          <a href="">Youtube</a>
          <a href="">Instagram</a>
        </div>

        <div className='footer-col'>
          <h3>About</h3>
          <a href="">Blog</a>
          <a href="">Changelog</a>
          <a href="">Status</a>
          <a href="">Careers</a>
          <a href="">Rewards Program</a>
        </div>

        <div className='footer-col'>
          <h3>Resources</h3>
          <a href="">Ticket Center</a>
          <a href="">Report Issues</a>
        </div>

        <div className='footer-col'>
          <h3>Legal</h3>
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
        </div>

      </div>
    </div>
  )
}

export default Footer
