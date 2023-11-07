import React from 'react';
import './card.css';
import StarSvg from '../../images/icon-star.svg';
import {Link} from "react-router-dom";

const Card = () => {
    return (
        <div className='container' role="main">
            <div className='card__container'>
                <img src={StarSvg} alt="Star icon" />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
                <div className='card__container_ratings'>
                    <div className='card__container_ratings_number'
                    >
                        <p>1</p>
                    </div>
                    <div className='card__container_ratings_number '
                    >
                        <p>2</p>
                    </div>
                    <div className='card__container_ratings_number '
                   >
                        <p>3</p>
                    </div>
                    <div className='card__container_ratings_number '
                    
                    >
                        <p>4</p>
                    </div>
                    <div className='card__container_ratings_number '
                    >
                        <p>5</p>
                    </div>
                </div>
                
                <Link to="/interactive-rating-component-main/thankyou"> <button>Submit</button>
                 </Link>
            </div>
        </div>
    )
}

export default Card