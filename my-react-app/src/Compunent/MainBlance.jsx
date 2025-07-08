import React from 'react'

function MainBlance({blance}) {
  return (
    <>
    
    <div className='text-center mt-3'>
        <h1 className='font-semibold'>Your Blacne</h1>
        <p>{blance}</p>
    </div>
    </>
  )
}

export default MainBlance
