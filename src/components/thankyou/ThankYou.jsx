import React from 'react'
import IllustrationThankYou from '../../images/illustration-thank-you.svg';
import './thankyou.css'
import { useParams } from 'react-router-dom';
import { motion } from "framer-motion";


const ThankYou = () => {

  const { activeCard } = useParams();

  return (
    <motion.div
      initial={{ width: "100vw", x: "100vw" }}
      animate={{ width: "100vw", x: 0 }}
      transition={{ origin: .1 }}
      exit={{ x: window.innerWidth }}
      className='container' role="main">
      <div className='thankyou_container'>
        <img src={IllustrationThankYou} alt="Star icon" />
        <p className='thankyou_container_grading'>You selected {activeCard} out of 5</p>
        <h2>Thank You!</h2>
        <p>Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </motion.div>
  )
}

export default ThankYou