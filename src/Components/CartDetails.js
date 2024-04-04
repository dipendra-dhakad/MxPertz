import React from 'react'

const CartDetails = () => {
  return (
    // <div className='flex m-2 '>
    //   <h1 className='font-bold'>Science Fiction Stories</h1>
    //   <div className='flex justify-between'>
    //   <button>Clear All </button>
    //   <button>Completed</button>
    //   <button>In Progess</button>
    //   <button>New</button>
    //   </div>
    // </div>
    <div className='flex m-2'>
  <h1 className='font-bold flex-grow '>Science Fiction Stories</h1>

<div className='flex justify-evenly'>
  <button className='ml-auto mr-2 border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>Clear All</button>
  <button className='mr-2 border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>Completed</button>
  <button className='mr-2 border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>In Progress</button>
  <button className='border border-gray-500 px-4 py-2 bg-green-100 rounded-md'>New</button>
</div>

</div>

  )
}

export default CartDetails
