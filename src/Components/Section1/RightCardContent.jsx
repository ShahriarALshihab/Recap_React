import React from 'react'

const RightCardContent = (props) => {
  return (
        <div className='absolute top-0 left-0 p-10 h-full w-full flex flex-col justify-between'>
           <h2 className=' bg-white h-10 w-10 flex justify-center items-center font-semibold rounded-full'>{props.id+1}</h2>
            <div className='text-white p-3 '>
                <p className='text-xl mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dignissimos ratione cumque? Suscipit, odit neque.</p>
               <div className='flex justify-between '>
                 <button style={{backgroundColor: props.color}} className=' text-white font-semibold px-5 py-1 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor: props.color}} className=' text-white font-semibold px-4 py-3 rounded-full'><i className="ri-arrow-right-line"></i></button>
               </div>
            </div>
            
        </div>
  )
}

export default RightCardContent