// import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilterBy } from '../store/stay.action';

function valuetext(value) {
  return `${value}`;
}

export function RangeSlider({ handelPriceRange }) {
  const [value, setValue] = React.useState([0, 5000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const filterBy = useSelector((state) => state.staysModule.filterBy);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onSetFilter(newValue);
  };

  const onSetFilter = (newValue) => {
    const minPrice = newValue[0];
    const maxPrice = newValue[1];

    const priceRange = {
      minPrice,
      maxPrice,
    };
    handelPriceRange('priceRange', priceRange);

    // const submittedFilter = {
    //     ...filterBy, minPrice, maxPrice
    // }

    // dispatch(setFilterBy(submittedFilter))

    // const submittedFilter = {
    //   ...filters, name: filterBy.filterByText
    // }
    // console.log('submittedFilter:', submittedFilter);
  };
  // const dispatchPrice = () => {
  //     const minPrice = newValue[0]
  //     const maxPrice = newValue[1]

  //     const submittedFilter = {
  //         ...filterBy, minPrice, maxPrice
  //     }
  //     dispatch(setFilterBy(submittedFilter))
  // }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        min={50}
        max={5000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
