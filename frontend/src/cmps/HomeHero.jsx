import React from 'react'
import { Link } from "react-router-dom";


export function Hero() {
  return (
    <div className="hero-container">
      {/* <div className="hero-text-pic-container"> */}
        <div className="hero-img-container">
          <div className="hero-text clean-link">
            Not sure where to go? Perfect.
            <Link to='/StaySearch' className="hero-button clean-link">
              <span className="gradient-text">I'm flexible</span>
            </Link>
          </div>
        </div>
      {/* </div> */}

    </div>
  )
}

