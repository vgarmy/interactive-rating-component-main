import React from 'react'
import IllustrationThankYou from '../../images/illustration-thank-you.svg';
import './thankyou.css'
import { useParams } from 'react-router-dom';


const ThankYou = () => {

  const { activeCard } = useParams();

  return (
    <div className='container' role="main">
    <div className='thankyou_container'>
        <img src={IllustrationThankYou} alt="Star icon" />
        <p className='thankyou_container_grading'>You selected {activeCard} out of 5</p>
        <h2>Thank You!</h2>
        <p>Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
             

    </div>
</div>
  )
}

export default ThankYou