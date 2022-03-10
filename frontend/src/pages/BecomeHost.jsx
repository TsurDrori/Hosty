import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/imgs/resized_FI_Getty_Airbnb-host-welcoming-guests.jpg'


export function BecomeHost() {
  return (

    <div className="full">
      <div className="become-host-container">
        <Link to='/BecomeHost'>
          <div className="host-banner">
            <img src={image} alt='img' />
            <div className="host-banner-text clean-link">
              <div>
                Hosting
              </div>
              <div>
                makes Hosty,
              </div>
              <div>
                Hosty!
              </div>
              <div>
                Try Hosting
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div >
  )
}


