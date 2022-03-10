import React, { useState } from 'react';
import { ReadMore } from './ReadMore';

export function StayReviews({ stay }) {
  const [isLongText, setIsLongText] = useState(false);

  const toggleText = () => {
    setIsLongText(!isLongText);
  };
  return (
    <section className='stay-details-reviews'>
      <ul className='reviews-list-container clean-list'>
        {stay.reviews.map((review, index) => (
          <li key={index} className='review-preview-container'>
            <section>
              <div className='review-preview-header'>
                <img className='host-img' src={review.by.imgUrl}></img>
                <div className='review-preview-text-container'>
                  <li className='fullname'>{review.by.fullname}</li>
                  <li className='date'>{review.createdAt}</li>
                </div>
              </div>
              <span className='txt'>
                <ReadMore id={review.id} text={review.txt} isLongTxtShown={isLongText} onToggleTxt={toggleText} />
              </span>
            </section>
          </li>
        ))}
      </ul>
    </section>
  );
}
