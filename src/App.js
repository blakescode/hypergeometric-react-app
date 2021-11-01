import './App.css';
import React, { useState } from 'react';
import StackExample from './components/StackExample';
import StackForm from './components/StackForm';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
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

  const populateExampleData = () => {
    setState({
      ...state,
      populationSize: 52,
      populationSuccesses: 13,
      sampleSize: 7,
      sampleSuccesses: 5
    })
  }

  return (
    <div className="App">
      <Header />
      <div className="Form">
        <Grid
          container 
          alignItems="center"
          justifyContent="center"
          spacing={6}
        >
          <Grid item xs={12} sm={12} md={4}>
            <StackExample populateExampleData={() => populateExampleData()} />
          </Grid>
          <Grid item xs={12} sm md={4}>
            <StackForm 
              populationSize={state.populationSize}
              populationSuccesses={state.populationSuccesses}
              sampleSize={state.sampleSize}
              sampleSuccesses={state.sampleSuccesses}
              handleFormChange={handleFormChange}
              calculateResult={() => calculateResult()}
            />
          </Grid>
          <Grid item xs={12} sm md={4}>
            { state.hasBeenCalculated &&
              <Stack spacing={2} className='stack-results'>
                <TextField
                  label={`Hypergeometric Probability: P(X = ${state.calculatedSampleSuccesses})`}
                  value={state.results.equal}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
                <TextField
                  label={`Cumulative Probability: P(X < ${state.calculatedSampleSuccesses})`}
                  value={state.results.lessThan}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
                <TextField
                  label={`Cumulative Probability: P(X ≤ ${state.calculatedSampleSuccesses})`}
                  value={state.results.lessThanOrEqual}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
                <TextField
                  label={`Cumulative Probability: P(X > ${state.calculatedSampleSuccesses})`}
                  value={state.results.greaterThan}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
                <TextField
                  label={`Cumulative Probability: P(X ≥ ${state.calculatedSampleSuccesses})`}
                  value={state.results.greaterThanOrEqual}
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="standard"
                />
              </Stack>
            }
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
