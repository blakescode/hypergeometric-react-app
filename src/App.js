import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { calculate } from './services/calculator';
import Probability from './components/Probability';

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
    calculatedSampleSuccesses: '',
    hasBeenCalculated: false,
    results: results
  })

  const handleFormChange = (event) => {
    const updatedValue = parseInt(event.target.value)
    setState({
      ...state,
      [event.target.name]: isNaN(updatedValue) ? '' : updatedValue
    })
  }

  const calculateResult = () => {
    const results = calculate(state)
    setState({
      ...state,
      results: results,
      calculatedSampleSuccesses: state.sampleSuccesses,
      hasBeenCalculated: true,
    })
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
        { state.hasBeenCalculated &&
          <Stack spacing={2} className='stack-results'>
            {/* <Probability 
              label={`Hypergeometric Probability: P(X = ${state.calculatedSampleSuccesses})`.toString()}
              value={state.results.equal}
            />
            <Probability 
              label={`Cumulative Probability: P(X < ${state.calculatedSampleSuccesses})`.toString()}
              value={state.results.lessThan}
            />
            <Probability 
              label={`Cumulative Probability: P(X ≤ ${state.calculatedSampleSuccesses})`.toString()}
              value={state.results.lessThanOrEqual}
            />
            <Probability 
              label={`Cumulative Probability: P(X > ${state.calculatedSampleSuccesses})`.toString()}
              value={state.results.greaterThan}
            />
            <Probability 
              label={`Cumulative Probability: P(X ≥ ${state.calculatedSampleSuccesses})`.toString()}
              value={state.results.greaterThanOrEqual}
            /> */}
            <TextField
              label={`Hypergeometric Probability: P(X = ${state.calculatedSampleSuccesses})`}
              defaultValue={state.results.equal}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label={`Cumulative Probability: P(X < ${state.calculatedSampleSuccesses})`}
              defaultValue={state.results.lessThan}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label={`Cumulative Probability: P(X ≤ ${state.calculatedSampleSuccesses})`}
              defaultValue={state.results.lessThanOrEqual}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label={`Cumulative Probability: P(X > ${state.calculatedSampleSuccesses})`}
              defaultValue={state.results.greaterThan}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              label={`Cumulative Probability: P(X ≥ ${state.calculatedSampleSuccesses})`}
              defaultValue={state.results.greaterThanOrEqual}
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
          </Stack>
        }
      </div>
    </div>
  );
}

export default App;
