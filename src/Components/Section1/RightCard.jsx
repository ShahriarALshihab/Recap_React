import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className='h-full w-80 overflow-hidden rounded-4xl shrink-0 relative'>
        <img className='w-full h-full object-cover' src={props.img} alt="" />
        <div className='absolute inset-0 bg-black/20'></div>
        <RightCardContent id={props.idx} tag={props.tag} color={props.color}/>
    </div>
  )
}

export default RightCard