import { combinations } from 'mathjs';

const probabilities = new Map()

export const calculate = (state) => {
  // map probabilities for each integer value 0 -> sampleSize for use in cumulative probabilities
  probabilities.clear()
  for (let i = 0; i <= state.sampleSize; i++) {
    const updatedState = {
      ...state,
      sampleSuccesses: i
    }
    probabilities.set(i, hypergeometricProbability(updatedState))
  }
  // return {
  //   equal: probabilities.get(this.sampleSuccesses) * 100,
  //   lessThan: this.hyperLessThan(),
  //   lessThanOrEqual: this.hyperLessThanOrEqual(),
  //   greaterThan: this.hyperGreaterThan(),
  //   greaterThanOrEqual: this.hyperGreaterThanOrEqual()
  // }
  return {
    equal: hypergeometricProbability(state),
    lessThan: hyperLessThan(state),
    lessThanOrEqual: hyperLessThanOrEqual(state),
    greaterThan: hyperGreaterThan(state),
    greaterThanOrEqual: hyperGreaterThanOrEqual(state),
  }
}

const hypergeometricProbability = (state) => {
  console.log("state => ", state)
  const kCx = combinations(state.populationSuccesses, state.sampleSuccesses);
  const NkCnx = combinations((state.populationSize - state.populationSuccesses), (state.sampleSize - state.sampleSuccesses));
  const NCn = combinations(state.populationSize, state.sampleSize);

  return (kCx * NkCnx) / NCn;
}

const hyperLessThan = (state) => {
  let result = 0;
  for (let i = 0; i < state.sampleSuccesses; i++ ) {
    result += probabilities.get(i);
  }
  return result * 100;
}

const hyperLessThanOrEqual = (state) => {
  let result = 0;
  for (let i = 0; i <= state.sampleSuccesses; i++ ) {
    result += probabilities.get(i);
  }
  return result * 100;
}

const hyperGreaterThan = (state) => {
  let result = 0;
  for (let i = (state.sampleSuccesses + 1); i <= state.sampleSize; i++ ) {
    result += probabilities.get(i);
  }
  return result * 100;
}

const hyperGreaterThanOrEqual = (state) => {
  let result = 0;
  for (let i = state.sampleSuccesses; i <= state.sampleSize; i++ ) {
    result += probabilities.get(i);
  }
  return result * 100;
}