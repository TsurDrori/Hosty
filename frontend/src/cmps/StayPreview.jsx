import { Link } from 'react-router-dom';
import { stayService } from '../services/stay.service';
export function StayPreview({ stay }) {
  const avgRate = stayService.getAverageScoreDetails(stay)

  return (
    <Link className='clean-link' to={`/stay/${stay._id}`}>
      <article className='card'>

        <div className='img-container'>
          <img src={stay.imgUrls[0]} alt='' />
        </div>

        <div className='preview-body flex card-info'>

          <div className='address-container'>
            <h2> {stay.loc.address}</h2>
          </div>

          <div className='info-container text-right'>
            <h4> $ {stay.price} /night</h4>
          </div>
          <div className='info-container'>
            <h4>{stay.type}</h4>
          </div>

          <div className='info-container text-right'>
            <h4 >{avgRate} <span className='fas fa-star'></span></h4>
          </div>


        </div>

      </article>
    </Link >
  );
}
