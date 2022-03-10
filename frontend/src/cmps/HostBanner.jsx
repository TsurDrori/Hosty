import { Link } from 'react-router-dom'
import React from 'react'
import image from '../assets/imgs/airbnb-rental-host-guests-KINDNESSCARD0720.jpg'

function HostBanner() {
  return (
    <div>
      <div className="host-banner-container">
        <Link to='/BecomeHost'>
          <div className="host-banner">
            <img src={image} alt='img' />
            <div className="host-banner-text clean-link">
              <div>
                Join us!
              </div>
              <div>
                Become a Host.
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div >
  )
}

export default HostBanner
