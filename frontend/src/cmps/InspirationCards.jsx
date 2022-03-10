import React, { useEffect, useState } from 'react'
import Card from './HomeCityCards.jsx'
import NY from '../assets/imgs/matteo-catanese-dVCGpKZB_E8-unsplash.jpg'
import Paris from '../assets/imgs/Paris-at-Night-Wallpapers-Top-Free-Paris-at-Night-.jpg'
import Prague from '../assets/imgs/prague.jpg'
import London from '../assets/imgs/alexander-london-3l1sjp562qQ-unsplash.jpg'
import { HomeTopStays } from '../cmps/HomeTopStays.jsx';
import { stayService } from '../services/stay.service';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterBy } from '../store/stay.action';
import { useHistory } from 'react-router-dom';

// const stays = [
//     {
//         _id: '10006546',
//         name: 'OAKTREEHOUSE - SLEEP IN THE TREEHOUSE',
//         type: 'TreeHouse',
//         imgUrls: 'https://a0.muscache.com/im/pictures/147f068f-b2d2-4d27-92f0-b93c7c772463.jpg?im_w=1200',
//         price: 498.0,
//         address: 'Modra, Slovakia',
//     },
//     {
//         _id: '10006548',
//         name: 'Villa Cleopatra, by Cyprus-Villa-Retreats.com',
//         type: 'villa',
//         imgUrls: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//         price: 300.0,
//         address: 'Beograd,Serbia',
//     },
//     {
//         _id: '10006549',
//         name: 'Private room in nature lodge hosted by Metin',
//         type: 'lodge',
//         imgUrls: 'https://a0.muscache.com/im/pictures/2374cfe3-70a3-409e-868a-56eabd11b1b7.jpg?im_w=1200',
//         price: 176.0,
//         address: 'Lubniewice, Lubuskie, Poland',
//     },
//     {
//         _id: '10006550',
//         name: '1 Numaralı 4 kisi kapasiteli Kütük ev 🌿',
//         type: 'house',
//         imgUrls: 'https://a0.muscache.com/im/pictures/1feb61aa-9dbf-42a9-b125-62ea5d1682d3.jpg?im_w=1200',
//         price: 80.0,
//         address: 'Mníšek, Czechia',
//     },
// ];
function InspirationCards() {
    const [topRatedStays, setTopRatedStays] = useState(null);
    const filters = useSelector((state) => state.staysModule.filterBy)
    const [filterByCity, setFilterByCity] = useState(null);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(async () => {
        const topRatedStays = await stayService.getTopRatedStays()
        setTopRatedStays(topRatedStays)


    }, [])
    const handelChange = (value) => {
        const submittedFilter = {
            ...filters, city: value
        }
        dispatch(setFilterBy(submittedFilter));
        history.push('/StaySearch')


    }
    return (
        <div>
            <p className="inspiration-title">Inspiration for your next trip</p>
            <section></section>

            <div className='inspiration-cards-container' >

                <Card handelChange={handelChange}
                    src={NY}
                    title="New York"

                />
                <Card handelChange={handelChange}
                    src={Paris}
                    title="Paris"
                />
                <Card handelChange={handelChange}
                    src={Prague}
                    title="Prague"

                />
                <Card handelChange={handelChange}
                    src={London}
                    title="London"

                />
            </div>

            <p className="inspiration-title">Top rated spots for your next vacation</p>

            <section className='top-cards-container'>
                {topRatedStays && topRatedStays.map((topRatedStay) => (
                    <HomeTopStays key={topRatedStay._id} stay={topRatedStay} />
                ))}
            </section>
            {/* <div className='inspiration-cards-container'> */}
            {/* <Card
                    src='https://a0.muscache.com/im/pictures/147f068f-b2d2-4d27-92f0-b93c7c772463.jpg?im_w=1200'
                    title="TreeHouse"
                    description="Modra, Slovakia"
                    price="$498/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="£350/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="£70/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="£70/night"
                /> */}
            {/* </div> */}
        </div>
    )
}

export default InspirationCards
