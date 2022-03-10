import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function CircularIndeterminate() {
  return (
    <div className='loader'>
      <Box sx={{ display: 'flex' , position: 'absolute', top: '50%', left: '50%' , transform: 'translate(-50%, -50%)', }}>
        <CircularProgress style={{ color: '#FF385C' }} size='100px' thickness={5} />
      </Box>
    </div>
  );
}
