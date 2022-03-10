import React from 'react';

export function StayDetailsPics({ stay }) {
  return (
    <div>
      <section className='stay-details-images'>
        {stay.imgUrls.map((image, index) => (
          <div key={index} className='image-container'>
            <img src={image} />
          </div>
        ))}
      </section>
    </div>
  );
}
