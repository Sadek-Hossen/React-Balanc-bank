import React from 'react'

function TransactionList({transactions}) {
  return (
    <>
    
    <ul className='grid gap-y-2  w-[80%] mx-auto'>
       {transactions.map((transaction)=>(
        <li  className={transaction.amount >0 ? "bg-green-300" : "bg-amber-500"}>
         {transaction.text}
         <span className="float-right">{transaction.amount}</span>

        </li>
       ))}
    

    </ul>
    </>
  )
}

export default TransactionList
