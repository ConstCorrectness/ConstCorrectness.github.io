import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete'

export default function HorribleButton(props: {name: string}) {
  return (
    <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }}>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        {props.name}😨
      </Button>
    </Typography>
  );
}

