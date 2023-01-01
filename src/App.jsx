import React from 'react';
import { useState, useEffect } from 'react';
import './input.css';

export default function App() {
  const [advice, setAdvice] = useState({ id: '', advice: '' });
  // useEffect(()=>{

  //   fetch("https://api.adviceslip.com/advice")
  //     .then(res=> res.json())
  //     .then(data=> setAdvice(data.slip))
  // },[])

  function handleChange() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));
  }
  return (
    <div className="main">
      <h1 className="header"> ADVICE #{advice.id}</h1>
      <h1 className="advice">"{advice.advice}"</h1>

      <button className="advice-btn" onClick={handleChange}>
        next advice
      </button>
    </div>
  );
}
