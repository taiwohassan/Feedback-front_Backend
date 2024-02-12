
import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import Card from "./shared/Card"
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItems({item}) {
  const {deleteFeedback,editFeedback}=useContext(FeedbackContext)
    
    return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={()=>deleteFeedback(item.id)} className='close'>
        <FaTimes/>
        </button>
        <button onClick={()=>editFeedback(item)} className="edit">
         <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
       
    </Card>
  )
}

FeedbackItems.propTypes={
  item:PropTypes.object.isRequired,
}

export default FeedbackItems
