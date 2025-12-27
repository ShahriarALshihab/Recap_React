import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-18 py-8 mt-5'>
        <h4 className='bg-black px-4 rounded-full text-gray-300 font-semibold py-2'>Target Audience</h4>
          <div>
            <button className='bg-gray-100 px-3 py-1 rounded-full uppercase font-semibold tracking-wider text-sm'>Digital Banking Platform</button>
          </div>
    </div>
  )
}

export default Navbar