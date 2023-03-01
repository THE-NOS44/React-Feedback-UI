import { useState, useContext, useEffect } from "react"
import RatingSelect from "./RatingSelect"
import Card from "./shared/Card"
import Button from "./shared/Button"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = ({ target: { value } }) => { // <--  gets the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
      } else if (value.trim().length < 10) { // <-- checks for less than 10
        setMessage('Text must be at least 10 characters')
        setBtnDisabled(true)
      } else {
        setMessage(null)
        setBtnDisabled(false)
      }
      setText(value)
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text, 
        rating,
      }

      if(feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }
      else {
      //handleAdd(newFeedback) --> this was changed to below line after we added context
      addFeedback(newFeedback)
    }
      // the below is to reset the set to empty after a new feed is submitted
      setBtnDisabled(true) // 👈   this line to reset disabled
      setRating(10) //👈  this line to set rating back to 10
      setText('')
      
    }
  }

  return (
    <Card>
      <form onSubmit = {handleSubmit}>
          <h2>How would you rate your service with us ?</h2>
          
          <RatingSelect select={setRating} selected={rating} />


          <div className="input-group">
              <input onChange={handleTextChange} 
                     type="text" 
                     placeholder="Write a review"
                     value={text} 
                     />
              <Button type='submit' 
                      version='primary' 
                      isDisabled={btnDisabled}>
                      Send
                      </Button>
          </div>

              {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
