import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { calculate } from './services/calculator';

function App() {
  const results = {
    equal: '',
    lessThan: '',
    lessThanOrEqual: '',
    greaterThan: '',
    greaterThanOrEqual: ''
  }

  const [state, setState] = useState({
    populationSize: '',
    populationSuccesses: '',
    sampleSize: '',
    sampleSuccesses: '',
    results: results
  })

  const handleFormChange = (event) => {
    const updatedValue = event.target.value;
    setState({
      ...state,
      [event.target.name]: updatedValue
    });
  }

  const calculateResult = () => {
    state.results = calculate(state);
    console.log("equal prob = ", state.results.equal);
  }

  return (
    <div className="App">
      <div className="Header">
        <h1>Hypergeometric Calculator</h1>
      </div>
      <div className="Form">
        <Stack spacing={2} className='stack-form'>
          <TextField 
            id="populationSize"
            name="populationSize"
            label="Population Size"
            variant="outlined"
            value={state.populationSize}
            onChange={handleFormChange}
          />
          <TextField 
            id="populationSuccesses"
            name="populationSuccesses"
            label="Population Successes"
            variant="outlined"
            value={state.populationSuccesses}
            onChange={handleFormChange}
          />
          <TextField 
            id="sampleSize"
            name="sampleSize"
            label="Sample Size"
            variant="outlined"
            value={state.sampleSize}
            onChange={handleFormChange}
          />
          <TextField 
            id="sampleSuccesses"
            name="sampleSuccesses"
            label="Sample Successes"
            variant="outlined"
            value={state.sampleSuccesses}
            onChange={handleFormChange}
          />
          <Button
            variant="contained"
            onClick={calculateResult}
          >
            Calculate
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
