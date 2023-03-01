//import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedbackStats() {
  // calling this feedback below from the global feedback context , so we dont need feedback property or any proptyes to be declared in this page, since it is being called from the FeedackContext page
  const {feedback} = useContext(FeedbackContext)

 // Calculate ratings average
    //using the reduce function, you can google it to know more...
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    },0) / feedback.length


// So this is to fix the no. of digits after decimal (toFixed) + now we dont need a whole number with a decimal .0 eg: 8.0 or 9.0(trailing zeros), so we use the regular expression used.
average = average.toFixed(1).replace(/[.,]0$/, '')
    console.log(average)
    
// isNaN is used so that when there are no ratings , the result should show 0 and not NaN/Null 
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>

      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

{/* below was used before  a feedback context was made

FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired,
}
*/}

export default FeedbackStats
