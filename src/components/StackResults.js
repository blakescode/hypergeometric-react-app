import React from 'react';
import './StackResults.css'
import { Stack, TextField } from '@mui/material';

const StackResults = ({calculatedSampleSuccesses, results}) => {
  return(
    <Stack spacing={2} className='stack-results'>
      <TextField
        label={`Hypergeometric Probability: P(X = ${calculatedSampleSuccesses})`}
        value={results.equal}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        label={`Cumulative Probability: P(X < ${calculatedSampleSuccesses})`}
        value={results.lessThan}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        label={`Cumulative Probability: P(X ≤ ${calculatedSampleSuccesses})`}
        value={results.lessThanOrEqual}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        label={`Cumulative Probability: P(X > ${calculatedSampleSuccesses})`}
        value={results.greaterThan}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
      <TextField
        label={`Cumulative Probability: P(X ≥ ${calculatedSampleSuccesses})`}
        value={results.greaterThanOrEqual}
        InputProps={{
          readOnly: true,
        }}
        variant="standard"
      />
    </Stack>
  )
}

export default StackResults