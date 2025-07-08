
import './App.css'
import Heading from "./Compunent/Heading"
import MainBlance from "./Compunent/MainBlance";
import AddCost from "./Compunent/AddCost";
import TransactionList from "./Compunent/Transaction";
import { useState } from 'react';
import AddAmoun from "./Compunent/AddAmoun"
function App() {

 
  const [transactions, setTransection]=useState([])

  const addTransaction = (transaction)=>{
    setTransection([...transactions,transaction])
  };

  const calcolateBlance =()=>{
    return transactions.reduce((acc,transaction) => acc + transaction.amount,0)
  };

  const calculateIncome = ()=>{
    return transactions
    .filter((transaction)=>transaction.amount>0)
    .reduce((acc,transaction) => acc + transaction.amount,0)
  };

  const calculatExpensive = ()=>{
    return transactions
    .filter((transaction)=>transaction.amount <0)
    .reduce((acc,transaction)=>acc+transaction.amount,0)
  }

  return (
    <>
   <Heading />
   <MainBlance blance={calcolateBlance()} />
   <AddCost income ={calculateIncome()} expense ={calculatExpensive()} />
   <TransactionList transactions ={transactions} />
   <AddAmoun addTransaction ={addTransaction} />
    </>
  )
}

export default App
