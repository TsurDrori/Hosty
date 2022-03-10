import { Link } from 'react-router-dom';
export function HomeTopStays({ stay }) {
  return (
    <Link className='clean-link inspiration-card' to={`/stay/${stay._id}`}>
      {/* <article className='inspiration-card'> */}

      <div className='inspiration-card-img'>
        <img src={stay.imgUrls[0]} alt='' />
      </div>

      <div className='card__info'>

        <div className='address'>
          <h2> {stay.loc.address}</h2>
        </div>

        <div className='price'>
          <h3> $ {stay.price} /night</h3>
        </div>

        <div className='rate'>
          <h3> {stay.avgRate} <span className='fas fa-star'></span></h3>
        </div>
{/* 
        <div className='type'>
          <h4 >{stay.type}</h4>
        </div> */}


      </div>

      {/* </article> */}
    </Link >
  );
}
