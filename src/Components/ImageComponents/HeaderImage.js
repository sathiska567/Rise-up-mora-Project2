import React from 'react'
import image from './assets/images/timeLineHeaderImage.png'

export default function HeaderImage(props) {
  return (
    <>
     <div className='image-div'>

      <table>
         <tr>
           <td>
           <h3 className='timeLineHeaderImage-para'>8</h3>
           </td>

           <td>
           <p className='timeLineHeaderImage-secondPara'>Monday</p>
           </td>
         </tr>
         <tr>
           <td>

           </td>

           <td>
           <p className='timeLineHeaderImage-ThirdPara'>Aug 2023</p>
           </td>
         </tr>
      </table>
        
        
        <img src={image} alt='This is the TimeLine section Header img' className='timeLineHeaderImage' />
     </div>


    
    
    
    
    </>
  )
}
