import React from 'react';
import { useState, useEffect } from 'react';
import './input.css';

export default function App() {
  const [advice, setAdvice] = useState({ id: '', advice: '' });
  const [initial, setInitial] = useState(false);
  // useEffect(()=>{

  //   fetch("https://api.adviceslip.com/advice")
  //     .then(res=> res.json())
  //     .then(data=> setAdvice(data.slip))
  // },[])

  function handleChange() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));

    setInitial(true);
  }
  return (
    <div className="main">
      {initial ? (
        <div>
          <h1 className="header"> ADVICE #{advice.id}</h1>
          <h1 className="advice">"{advice.advice}"</h1>
          <div className="underline">
            <div className="line"></div>
            <img className="line-img" src="pattern-divider-desktop.svg" />
            <div className="line"></div>
          </div>
        </div>
      ) : (
        []
      )}

      <br />
      {initial == false ? (
        <button className="get-btn" onClick={handleChange}>
          GET ADVICE
        </button>
      ) : (
        <button className="advice-btn" onClick={handleChange}>
          <img src="icon-dice.svg" />
        </button>
      )}
    </div>
  );
}
