//import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
//import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutIconLink from './components/AboutIconLink'
import AboutPage from './pages/AboutPage'
import {FeedbackProvider} from './context/FeedbackContext'

function App() {

    {/* Below functions were moved to the CONTEXT file and now are being fetched directly by the files from the FeedbackContext

    const [feedback, setFeedback] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        //below we input the new feedback at the start of a new array followed by the older feedbacks, and using it as the new state
        setFeedback([newFeedback, ...feedback])
    }

    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?'))
        {
        setFeedback(feedback.filter((item) => item.id !== id)) }
    }
*/}

    return(
        <FeedbackProvider>
        <Router>
            <Header />
            <div className="container">
            <Routes>
                <Route exact path='/'
                       element ={
                    <>     
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                    </> 
                    } 
                ></Route>
                <Route path='/about' element={<AboutPage />} />  
            </Routes>
        <AboutIconLink />
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App