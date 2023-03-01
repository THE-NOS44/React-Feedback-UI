import { createContext, useEffect, useState } from 'react'
//import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])  

    // Fetch Feedback (the line below with const part is using the FETCH API , and its sysntax)
    const fetchFeedback = async () => {
        const response = await fetch(`/feedback?_sort=id&_order=desc`)
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }


    // Add Feeback
    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        // newFeedback.id = uuidv4()
        //below we input the new feedback at the start of a new array followed by the older feedbacks, and using it as the new state
        setFeedback([data, ...feedback])
    }

    // Delete Feedback
    const deleteFeedback = async (id) => {
        if(window.confirm('Are you sure you want to delete?'))
        { 
        await fetch(`/feedback/${id}`, {method: 'DELETE'})
        setFeedback(feedback.filter((item) => item.id !== id)) }
    }

    // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

        setFeedback(feedback.map((item) => (item.id === id ? data : item)))
    
        setFeedbackEdit({
            item: {},
            edit: false,
          })
    }

   
    

    // this will set items to be updated through edit. 
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback,
        
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext