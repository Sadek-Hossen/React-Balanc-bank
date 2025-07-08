import React from 'react'

function AddCost({income,expense}) {
  return (
    <>
    <div className='flex justify-around '>
        <div className='mt-3 text-green-400'>
            <h1 className='font-bold '>Income</h1>
            <p>{income}</p>

        </div>
        <div className='mt-3 text-red-400'>
            <h1 className='font-bold '>Expensive</h1>
            <p>{expense}</p>

        </div>

    </div>
    
    
    </>
  )
}

export default AddCost
