import { React, useState, useEffect } from 'react'
import dice from '../images/icon-dice.svg'
import underline from '../images/pattern-divider-desktop.svg'
import mobileUnderline from '../images/pattern-divider-mobile.svg'
const Advice = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [advices, setAdvices] = useState({})
  const newAdvice = () => {
    setIsLoading(true)
    fetch("https://api.adviceslip.com/advice?t=" + Math.random())
      .then(response => response.json())
      .then(data => { setAdvices(advice => advice = data); setIsLoading(false) })
  }

  useEffect(() => {
    newAdvice()
  }, [])

  return (
    <div className="advice-container">
      <div className='advices'>
      {isLoading && <div className='loading'>
        <h1>Loading...</h1>
      </div>}
      {!isLoading && <div className='advice'>
        <h4>{`ADVICE #${advices?.slip?.id}`} </h4>
        <h3>{advices?.slip?.advice}</h3>
        <img className='underline' src={window.innerWidth <= 412 ? mobileUnderline : underline} alt="underline" />
        <button className='btn' onClick={newAdvice}> <img src={dice} alt="dice" className='btn-diceimg'/> </button>
      </div>}
      </div>
    </div>


  )
}

export default Advice
