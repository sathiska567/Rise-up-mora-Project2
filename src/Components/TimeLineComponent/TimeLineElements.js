import React from 'react'
import './TimeLine.css'

export default function TimeLineElements(props) {
  return (
    <>

     <div>
     <div className='timeline'>
       <div className='timeline__component'>
          <div className='timeline__date timeline__date--right'></div>        
        </div> 

        <div className='timeline_middle'>
          <div className='timeline__point'></div>  
        </div>  

        <div className='timeline__component timeline__component--bg'>
          <h2 className='timeline__title'> {props.date}</h2> 
          <p className='timeline__paragraph'>{props.description}</p>           
        </div> 


       </div>
     </div>
    
    
    
    
    
    </>
  )
}
