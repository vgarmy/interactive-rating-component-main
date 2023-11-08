import React, { useState } from "react";
import './card.css';
import StarSvg from '../../images/icon-star.svg';
import { Link } from "react-router-dom";

const Card = () => {

    const [activeCard, setActiveCard] = useState(null);

    const toggleCard = (ratingId) => {
        setActiveCard(activeCard === ratingId ? null : ratingId);
    };

    return (
        <div
            className='container' role="main">
            <div className='card__container'>
                <img src={StarSvg} alt="Star icon" />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>

                <div className='card__container_ratings'>
                    {[1, 2, 3, 4, 5].map((ratingId) => (
                        <div
                            key={ratingId}
                            className={`card ${activeCard === ratingId ? 'card__container_ratings_number_isactive' : 'card__container_ratings_number'}`}
                            onClick={() => toggleCard(ratingId)}
                        >
                            {ratingId}
                        </div>
                    ))}
                </div>

                <Link to={`/interactive-rating-component-main/thankyou/${activeCard}`}><button>Submit</button></Link>
            </div>

        </div>

    )
}

export default Card