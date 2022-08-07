import { React, useState } from 'react'
import dice from '../images/icon-dice.svg'
import underline from '../images/pattern-divider-desktop.svg'
import mobileUnderline from '../images/pattern-divider-mobile.svg'
import GetYourAdvice from './GetYourAdvice'

const Advice = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [advices, setAdvices] = useState(null)

  const newAdvice = () => {
    setIsLoading(true)
    fetch("https://api.adviceslip.com/advice?t=" + Math.random())
      .then(response => response.json())
      .then(data => { setAdvices(advice => advice = data); setIsLoading(false) })
  }

  return (
    <div className="advice-container">
      <div className='advices'>
        {!advices && !isLoading && <GetYourAdvice />}
        {isLoading && <div className='loading'>
          <h1>Loading...</h1>
        </div>}
        {!isLoading && advices && <div className='advice'>
          <h4>{`ADVICE #${advices?.slip?.id}`} </h4>
          <h3>{advices?.slip?.advice}</h3>
          <img className='underline' src={window.innerWidth <= 412 ? mobileUnderline : underline} alt="underline" />
        </div>}
        <button className='btn' onClick={newAdvice}> <img src={dice} alt="dice" className='btn-diceimg' /> </button>
      </div>
    </div>


  )
}

export default Advice