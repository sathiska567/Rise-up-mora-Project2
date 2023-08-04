import React from 'react'
import './TimeLine.css'


import timeLineElements from './TimeLineElements'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import "react-vertical-timeline-component/style.min.css"


export default function TimeLine() {
  
  return (

    <>

     
      <div>
        <h1 className='Time-Line-header'>Time Line</h1>
 
         <VerticalTimeline className='VerticalTimeline'>
           {
            timeLineElements.map(element => {

                return (
                     <VerticalTimelineElement
                       className='VerticalTimelineElement'
                       key={element.key}
                       iconClassName='icon'
                     >

                    <div className='vertical-timeline-elements-div'>

                    <h5 className="verticale-timeline-elements-subtitle">{element.date}</h5>
                      
                      <p id="description">{element.description}</p>
                      
                    </div>
                            
                     </VerticalTimelineElement>
                )
            })
           }
         </VerticalTimeline>

         
      </div>

    </>

  )
}
