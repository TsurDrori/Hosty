import React from 'react'

export function HomeCard({ src, title, description, price }) {
  return (
    <div className='inspiration-card'>
            <div className='inspiration-card-img'>
            <img src={src} alt="" />
            </div>
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
  )
}

export default HomeCard

