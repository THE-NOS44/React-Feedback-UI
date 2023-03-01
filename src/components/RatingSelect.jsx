import {useState, useContext, useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({select}) {

  const[selected, setSelected] = useState(5)

  const {feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleChange = (e) => { 

    // below here, the '+' is used to convert the type of value below from string to number
      setSelected(+e.currentTarget.value)
      select(+e.currentTarget.value)
  }


  // used iteration to get a list of numbers
  return (
    <ul className='rating'>
     {/* the below line 'from' function has 2 arguments , first will create a array of length 10 which will be having undefined elements */ }
     {/* the second argument is the Array.map function where the underscore means we dont need any element so we kept _ as the place holder and the next is the index value which we'll use for our ratings tab */}
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}


export default RatingSelect
