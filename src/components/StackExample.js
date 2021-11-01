import React from 'react';
import './StackExample.css';
import { Button, Stack } from '@mui/material';

const StackExample = (props) => {
  return(
    <Stack spacing={2} className='stack-example'> 
      <p>
        <b>How to use the Hypergeometric Calculator:</b><br/>
        <br/>
        Suppose you have a deck of <b>52</b> playing cards.<br/>
        There are <b>13</b> cards of each suit in the deck.<br/>
        Given an opening hand of <b>7</b> cards<br/>
        What are the odds that <b>5</b> are the same suit?
      </p>
      <Button
        variant="outlined"
        className="example-button"
        onClick={props.populateExampleData}
      >
        Populate Example Data
      </Button>
    </Stack>
  )
}

export default StackExample