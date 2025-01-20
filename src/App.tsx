import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


import HorribleToolbar from './HorribleToolbar';
import HorribleButton from './HorribleButton';


export default function App() {
  return (
    <>
      <Container>
        <Box sx={{my: 4}}>
          <Typography variant="h4" component="h1" sx={{mb: 2}}>
            Testing TypeScript and React...
            <HorribleToolbar />
            <HorribleToolbar />
            <HorribleToolbar />
          </Typography>
          <HorribleButton name="Const Correctness" />
        </Box>
      </Container>
    </>
  );
}
