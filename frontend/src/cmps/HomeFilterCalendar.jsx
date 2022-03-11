import  React, { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@material-ui/lab/StaticDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { utilService } from '../services/util.service.js';

export function Calendar({ handelDateChange, onSaveCal }) {
  const [value, setValue] = useState([null, null]);

  const onSave = () => {
    let startDate = utilService.convert(value[0]);
    let endDate = utilService.convert(value[1]);
    onSaveCal(startDate, endDate)
  }

  return (
    <div className='filter-calendar-div'>
      <div className='date-range'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
            disablePast
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <div>
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2, borderColor: 'primary.light' }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              </div>
            )}
          />
        </LocalizationProvider>
      </div>
      <button className='save-button' onClick={onSave}>
        save
      </button>
    </div>
  );
}

            // useEffect(() => {
            //   if (!value[0]) return;
          
            //   const startDate = utilService.convert(value[0]);
            //   let endDate = utilService.convert(value[1]);
          
            //   let today = startDate;
            //   today = new Date(today.split('/')[2], today.split('/')[1] - 1, today.split('/')[0]);
            //   if (endDate.includes('1970')) {
            //     endDate = '25/01/2022';
            //   }
            //   let date2 = endDate;
            //   date2 = new Date(date2.split('/')[2], date2.split('/')[1] - 1, date2.split('/')[0]);
              
            // }, [value]);