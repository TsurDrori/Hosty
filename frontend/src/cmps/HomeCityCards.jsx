import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterBy } from '../store/stay.action';
import { handelChange } from './InspirationCards'

function HomeCityCard({ src, title, description, price, handelChange }) {

  return (
    <div className='inspiration-card'>
      <div className='inspiration-card-img' onClick={() => handelChange(title)}>
        <img src={src} alt="" />
      </div>
      <div className="card__info">
        <h2>{title}</h2>
        {/* <h2>{price}</h2>
                <h4>{description}</h4> */}
      </div>
    </div>
  )
}

// const mapDispatchToProps = {
//   setFilterBy,
// };

export default HomeCityCard

// export const HomeCityCard = connect(mapStateToProps, mapDispatchToProps)( _HomeCityCard);

