import { combinations } from 'mathjs';

export const calculate = (state) => {
  // const probabilities = new Map()
  // this.sampleSize = state.sampleSize;
  // this.sampleSuccesses = state.sampleSuccesses;
  // this.probabilities.clear();
  // for (let i = 0; i <= state.sampleSize; i++ ) {
  //   state.sampleSuccesses = i;
  //   this.probabilities.set(i, hypergeometricProbability(state));
  // }
  // return {
  //   equal: probabilities.get(this.sampleSuccesses) * 100,
  //   lessThan: this.hyperLessThan(),
  //   lessThanOrEqual: this.hyperLessThanOrEqual(),
  //   greaterThan: this.hyperGreaterThan(),
  //   greaterThanOrEqual: this.hyperGreaterThanOrEqual()
  // }
  return {
    equal: hypergeometricProbability(state),
    lessThan: '',
    lessThanOrEqual: '',
    greaterThan: '',
    greaterThanOrEqual: '',
  }
}

const hypergeometricProbability = (state) => {
  const kCx = combinations(state.populationSuccesses, state.sampleSuccesses);
  const NkCnx = combinations((state.populationSize - state.populationSuccesses), (state.sampleSize - state.sampleSuccesses));
  const NCn = combinations(state.populationSize, state.sampleSize);

  return (kCx * NkCnx) / NCn;
}