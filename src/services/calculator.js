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

  return {
    equal: probabilities.get(state.sampleSuccesses).toFixed(6),
    lessThan: lessThan(state),
    lessThanOrEqual: lessThanOrEqual(state),
    greaterThan: greaterThan(state),
    greaterThanOrEqual: greaterThanOrEqual(state),
  }
}

const hypergeometricProbability = (state) => {
    /*
      from https://stattrek.com/probability-distributions/hypergeometric.aspx?tutorial=prob
      Suppose a population consists of N items, k of which are successes. 
      And a random sample drawn from that population consists of n items, x of which are successes.
      Then the hypergeometric probability is:
      h(x; N, n, k) = [ kCx ] [ (N-k)C(n-x) ] / [ NCn ]
      h(x; N, n, k) = sample * extra / population

      N = PopulationSize
      k = PopulationSuccesses
      n = SampleSize
      x = SampleSuccesses
    */
  const kCx = combinations(state.populationSuccesses, state.sampleSuccesses);
  const NkCnx = combinations((state.populationSize - state.populationSuccesses), (state.sampleSize - state.sampleSuccesses));
  const NCn = combinations(state.populationSize, state.sampleSize);

  return (kCx * NkCnx) / NCn;
}

const cumulativeProbability = (start, end) => {
  let result = 0
  for (let i = start; i <= end; i++) {
    result += probabilities.get(i)
  }
  return result.toFixed(6)
}

const lessThan = (state) => {
  return cumulativeProbability(0, state.sampleSuccesses - 1)
}

const lessThanOrEqual = (state) => {
  return cumulativeProbability(0, state.sampleSuccesses)
}

const greaterThan = (state) => {
  return cumulativeProbability(state.sampleSuccesses + 1, state.sampleSize)
}

const greaterThanOrEqual = (state) => {
  return cumulativeProbability(state.sampleSuccesses, state.sampleSize)
}
