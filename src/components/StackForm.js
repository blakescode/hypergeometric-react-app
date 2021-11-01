import React from 'react';
import { Button, Stack, TextField } from '@mui/material';

const StackForm = ({populationSize, populationSuccesses, sampleSize, sampleSuccesses, handleFormChange, calculateResult}) => {
  return (
    <Stack spacing={2} className='stack-form'>
      <TextField 
        id="populationSize"
        name="populationSize"
        label="Population Size"
        variant="outlined"
        value={populationSize}
        onChange={handleFormChange}
      />
      <TextField 
        id="populationSuccesses"
        name="populationSuccesses"
        label="Population Successes"
        variant="outlined"
        value={populationSuccesses}
        onChange={handleFormChange}
      />
      <TextField 
        id="sampleSize"
        name="sampleSize"
        label="Sample Size"
        variant="outlined"
        value={sampleSize}
        onChange={handleFormChange}
      />
      <TextField 
        id="sampleSuccesses"
        name="sampleSuccesses"
        label="Sample Successes"
        variant="outlined"
        value={sampleSuccesses}
        onChange={handleFormChange}
      />
      <Button
        variant="contained"
        onClick={calculateResult}
      >
        Calculate
      </Button>
    </Stack>
  )
}

export default StackForm