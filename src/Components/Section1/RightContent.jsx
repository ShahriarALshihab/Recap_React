/* eslint-disable no-unused-vars */
import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right-content" className='h-full w-4/6 p-6 flex flex-nowrap gap-5 overflow-x-scroll '>
       {props.users.map((element, idx)=>( 
        <RightCard key={idx} idx={idx} img={element.img} tag={element.tag} color={element.color}/>
       ))}
    </div>
  )
}

export default RightContent