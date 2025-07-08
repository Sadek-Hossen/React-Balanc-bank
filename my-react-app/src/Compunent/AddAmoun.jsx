import React, { useState } from 'react'

function AddAmoun({addTransaction}) {

  const [text,setText]= useState("");
  const [amount, setamount]= useState(0);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(text ==="" || amount === 0 )
return
  addTransaction({id:Math.random(),text,amount:+amount});
setText("")
setamount(0)  }
  return (
    <>
     
     <div>
     <form className='flex flex-col items-center gap-2 justify-center ' onSubmit={handleSubmit}>
      <input  value={text} type="text" placeholder='please add deltails' className='px-2 py-2 rounded border ' onChange={(e)=>setText(e.target.value)} />
      <input value={amount} type="number" placeholder='please add deltails' className='px-2 py-2 rounded border' onChange={(e)=>setamount(e.target.value)}/>
      <button type='submit' className='bg-green-400 px-2 py-2 border rounded text-white '>  submit</button>

     </form>


     </div>
    
    </>
  )
}

export default AddAmoun
