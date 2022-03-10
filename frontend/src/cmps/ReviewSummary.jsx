import React from 'react';
import { utilService } from '../services/util.service';


export const ReviewSummary = ({ stay }) => {
  if (!stay) return <h1>Loading...</h1>;
  const averageRate = utilService.getReviews(stay);

  return (
    <div>
      <section className='review-summary'>
        <span className='fas fa-star-review-summary'></span>
        <span>{averageRate.toFixed(2)}</span>
        <span>·</span>
        <span> {stay.reviews.length} reviews</span>
      </section>

      <div className='overall'>
        <div className='rate'>
          <p>Cleanliness</p>
          <div className='rate-number'>
            <div className='container'>
              <div className='skills cleanliness'> </div>
            </div>
            <p>4.5</p>
          </div>
        </div>

        <div className='rate'>
          <p>Communication</p>
          <div className='rate-number'>
            <div className='container'>
              <div className='skills communication'></div>
            </div>
            <p>4</p>
          </div>
        </div>

        <div className='rate'>
          <p>Check-in</p>
          <div className='rate-number'>
            <div className='container'>
              <div className='skills check-in'></div>
            </div>
            <p>5</p>
          </div>
        </div>
        <div className='rate'>
          <p>Accuracy</p>
          <div className='rate-number'>
            <div className='container'>
              <div className='skills accuracy'></div>
            </div>
            <p>5</p>
          </div>
        </div>
        <div className='rate'>
          <p>Location</p>
          <div className='rate-number'>
            <div className='container'>
              <div className='skills location'></div>
            </div>
            <p>5</p>
          </div>
        </div>
        <div className='rate'>
          <p>Value</p>
          <div className='rate-number'>
            <div className='container'>
              <div className='skills value'></div>
            </div>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
};
