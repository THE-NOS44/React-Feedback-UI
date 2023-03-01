// import {useState} from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
     //component state
  //const[rating, setRating] = useState(7)
 // const[text, setText] = useState('This is the default text set by the State')
    
const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimes color='purple' />
        </button>
        <button 
            className="edit"
            onClick = {() => editFeedback(item)}>
            <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired
        })
    )
}

export default FeedbackItem
