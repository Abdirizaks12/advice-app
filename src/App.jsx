import React from 'react'
import { useState, useEffect} from 'react'

export default function App() {
  const[advice, setAdvice]= useState({id:"", advice:""})
  // useEffect(()=>{

  //   fetch("https://api.adviceslip.com/advice")
  //     .then(res=> res.json())
  //     .then(data=> setAdvice(data.slip))
  // },[])

   function handleChange(){
    fetch("https://api.adviceslip.com/advice")
      .then(res=> res.json())
      .then(data=> setAdvice(data.slip))
   }
  return (


    <div>
      <h1> ADVICE #{advice.id}</h1>
      <h1>"{advice.advice}"</h1>

      <button onClick={handleChange}>next advice</button>

    </div>
  )
}
