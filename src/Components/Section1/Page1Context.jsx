import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Context = ( props) => {
    
  return (
    <div className='py-3 px-18 h-[85vh] gap-10 w-full flex justify-between items-center'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Context