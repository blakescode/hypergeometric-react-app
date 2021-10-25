import './Probability.css';

const Probability = (label, value) => {
  return (
    <div className='prob-display'>
      <h4 className='prob-label'>{label}</h4>
      <p className='prob-value'>{value}</p>
    </div>
  )
}

export default Probability