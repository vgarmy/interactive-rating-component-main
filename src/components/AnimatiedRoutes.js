import React from 'react'
import Card from './card/Card'
import ThankYou from './thankyou/ThankYou'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

const AnimatiedRoutes = () => {
    
    return (
        <AnimatePresence>
            <Routes>
                <Route path="interactive-rating-component-main/" element={<Card />} />
                <Route exact path='interactive-rating-component-main/thankyou/:activeCard' element={<ThankYou />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatiedRoutes