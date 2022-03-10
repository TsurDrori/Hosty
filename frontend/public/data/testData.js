const stays = [
  {
    _id: '10006546',
    name: 'OAKTREEHOUSE - SLEEP IN THE TREEHOUSE',
    type: 'TreeHouse',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/147f068f-b2d2-4d27-92f0-b93c7c772463.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/826303c3-ef43-43f2-8f44-3038fcaa41ed.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/5f79a3c4-ea63-474b-9924-c4fde883015d.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/b4be5c14-ffdf-46c0-bee3-f4cd9de0a996.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/c1c19e8d-787c-4ba2-bc8f-6b9e14b6c7b0.jpg?im_w=720',
    ],
    price: 498.0,
    summary:
      'TREEHOUSE is installed on four adult oaks. A wooden bridge leads directly to the terrace with a view of the surrounding trees. The house is connected to the electricity grid. Water is supplied in containers and is used for hand washing and basic hygiene. Inside our treehouse there is a chair and a sofa bed, basic kitchen equipment, electric kettle for water, plates etc. ',
    bedrooms: 1,
    beds: 1,
    baths: 1.5,
    capacity: 3,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Ania & Peter',
      imgUrl: 'https://a0.muscache.com/im/pictures/user/93cacfa5-90df-4efa-929b-087f93299e3d.jpg?im_w=240',
    },
    loc: {
      country: 'Slovakia',
      countryCode: 'PT',
      address: 'Modra, Modra,Slovakia, Slovakia',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: '1',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: '2',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: '3',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: '4',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: '5',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: '6',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: '7',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: '8',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: '9',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006547',
    name: 'Treehouse hosted by Margaritis',
    type: 'TreeHouse',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/5e3df10f-69df-44c8-9469-f2639d9a98d8.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/b5b4d421-9932-4420-83b1-11c3d063d219.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/a44ef5e8-edf6-4831-b5af-3495b4dd636e.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/c70f99be-1d4c-4381-9f3d-3820b1aaa59c.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/912630c8-241c-4bb4-be18-4b007160cc74.jpg?im_w=720',
    ],
    price: 120.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Germany',
      countryCode: 'PT',
      address: 'Berlin,Germany',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006548',
    name: 'Villa Cleopatra, by Cyprus-Villa-Retreats.com',
    type: 'villa',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/383b14c4-3b61-406e-9503-859d19f38369.jpg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 300.0,
    summary:
      'Villa Cleopatra offers a comfortable lounge with a large flat screen TV. A fully equipped kitchen with everything you need & a dining area, 3 double bedrooms on the ground floor (one including a bunkbed, with a separate toilet and family bathroom. Upstairs you will find the master bedroom with ensuite bathroom & a further double bedroom with an ensuite bathroom.',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Serbia',
      countryCode: 'PT',
      address: 'Beograd,Serbia',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006549',
    name: 'Private room in nature lodge hosted by Metin',
    type: 'lodge',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/2374cfe3-70a3-409e-868a-56eabd11b1b7.jpg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 176.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Poland',
      countryCode: 'PT',
      address: 'Lubniewice, Lubuskie, Poland',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006550',
    name: '1 Numaralı 4 kisi kapasiteli Kütük ev 🌿',
    type: 'house',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/1feb61aa-9dbf-42a9-b125-62ea5d1682d3.jpg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 80.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Czechia',
      countryCode: 'PT',
      address: 'Mníšek, Czechia',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006551',
    name: 'Mandalina Bahçesindeki Ev',
    type: 'Tiny house',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/85d59929-c512-4a79-b94b-2e284028092e.jpg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 176.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Poland',
      countryCode: 'PT',
      address: 'Ślesin, Wielkopolska, Poland',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006552',
    name: 'Montañitas Dağ Evi',
    type: 'Tiny house',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/0d93e337-c49c-4bf5-83f4-982cb9f2e132.jpg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 480.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Huseiyn',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Cyprus',
      countryCode: 'PT',
      address: 'Miliou, Paphos, Cyprus',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006553',
    name: 'Sea Front Oceanus H2 Spacious family villa, private pool and beautiful garden',
    type: 'villa',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-24527065/original/beb4e1df-f904-4714-bb25-e789402a0365.jpeg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 1473.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Turkey',
      countryCode: 'PT',
      address: 'Fethiye, Muğla, Turkey',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006554',
    name: 'DIANA - Coralli Spa Protaras, pool view apartment',
    type: 'house',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-41189245/original/e221687b-4260-4c33-8b93-594bafd30223.jpeg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 136.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Greece',
      countryCode: 'PT',
      address: 'Agios Nikolaos, Crete, Greece',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
  {
    _id: '10006555',
    name: 'Beach House Belgrade',
    type: 'Houseboat',
    imgUrls: [
      'https://a0.muscache.com/im/pictures/76189dfb-9805-49c1-a039-a9d7d5135fbd.jpg?im_w=1200',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    ],
    price: 80.0,
    summary:
      'Beautiful 4 bedroom architecturally designed house, with infinity pool and floor to ceiling views in almost every room of the sea and Cap de Creus national park, in beautiful working fishing village in Northern Greece ',
    bedrooms: 3,
    beds: 2,
    baths: 2,
    capacity: 8,
    amenities: ['TV', 'Wifi', 'Kitchen', 'Smoking allowed', 'Pets allowed'],
    host: {
      _id: '51399391',
      fullname: 'Davit Pok',
      imgUrl: 'https://a0.muscache.com/im/users/22498531/profile_pic/1413294529/original.jpg?im_w=240',
    },
    loc: {
      country: 'Turkey',
      countryCode: 'PT',
      address: 'Urla, İzmir, Turkey',
      lat: -8.61308,
      lng: 41.1413,
    },
    reviews: [
      {
        id: 'madeId',
        txt: 'Fabulously cozy apartment. You have everything you need. There are a lot of little things that impress those who sleep there. The ladybug gummies was amaizing..',
        rate: 4.93,
        createdAt: new Date(2217123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Jozsef',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a7cc0b74-1b56-4f8b-92ff-f83797829f3c.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'The perfect place for my wedding preparations and photos! Cozy, clean, awesome with amazing light for the photographer. ',
        rate: 5,
        createdAt: new Date(2114123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Maria',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/1bd3f085-66fa-4e23-88ae-3dd682ea3b12.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'This is truly one of the best experiences to go through! The location is amazing! Walking around is very nice and peaceful! A big supermarket is nearby and overall staying there is a big escape from everyday life and that is amazing on its own! I really recommend this place for everyone!',
        rate: 5,
        createdAt: new Date(2214124174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Nikita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/c6ea1d12-8d78-4059-b469-6a7c03635552.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Zuzana',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/a515c1ea-a27a-4eac-add1-bbd41def051a.jpg?im_w=240',
        },
      },

      {
        id: 'madeId',
        txt: 'Ania and Peter are sympathetic couple with inspirational life style what changed our staying to the more amazing experience. Thanks for nature which gave us beautiful sounds and my opinion is that we were at the right time in the right place. In May, nature wakes up, so it is even more of an experience to sleep in the treehouse. You must see! We liked it everything and the most outside shower with refreshing water. We are giving them 10 from 10.If you are nature lovers go and experience staying in OAKTREEHOUSE by your self. You can ask Ania and Peter what to do around, they will recommend it you hiking, biking, wine testing etc.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Anita',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/8657d1be-095a-4d5b-86e2-0e5d381ecbca.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Amazing host helped me to prepare unforgettable engagement night at spectacular place like this.',
        rate: 5,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lima',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/2965cd79-df90-427e-8694-4e55fbe8fdf8.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Perfection to a very tiny detail, one of a kind experience! We really enjoyed the stay and especially the great sleep in the middle of forrest :) Would definitely love to come back.',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Michal',
          imgUrl: 'https://a0.muscache.com/im/pictures/user/9b9eacee-6aaa-4c79-8bf1-79fb4a9baf1f.jpg?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'We loved the tree house! Everything was perfect!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Lucy',
          imgUrl: 'https://a0.muscache.com/defaults/user_pic-225x225.png?im_w=240',
        },
      },
      {
        id: 'madeId',
        txt: 'Great location, nice people, good communication - definitly to recommend! We booked as a birthday surprise for friends and they have been super happy!',
        rate: 1,
        createdAt: new Date(2214123174455).toLocaleString('default', {
          month: 'long',
          year: 'numeric',
        }),
        by: {
          _id: 'u102',
          fullname: 'Florian',
          imgUrl: 'https://a0.muscache.com/im/users/4903890/profile_pic/1434080085/original.jpg?im_w=240',
        },
      },
    ],
  },
];