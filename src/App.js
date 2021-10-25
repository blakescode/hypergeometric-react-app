import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip'
import { calculate } from './services/calculator';
import CodeIcon from '@mui/icons-material/Code';

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
      <div className="Header">
        <h1>
          Hypergeometric Calculator
          <Tooltip title="View Code on Github">
            <Button 
              variant="link"
              color="default"
              className="header-button"
              startIcon={<CodeIcon />}
              href="https://github.com/blakescode/hypergeometric-react-app"
              target="_blank"
            >
            </Button>
          </Tooltip>
        </h1>
      </div>
      <div className="Form">
        <Grid
          container 
          alignItems="center"
          justifyContent="center"
          spacing={6}
        >
          <Grid item xs={12} sm={12} md>
            <Stack spacing={2} className='stack-example'> 
              <p className="example">
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
                onClick={populateExampleData}
              >
                Populate Example Data
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} sm md>
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
          </Grid>
          <Grid item xs={12} sm md="auto">
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
