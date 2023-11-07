import React from 'react';
import { Link } from "react-router-dom";
import './card.css';
import StarSvg from '../../images/icon-star.svg';

const Card = (props) => {
    return (
        <div className='container' role="main">
            <div className='card__container'>
                <img src={StarSvg} alt="Star icon" />
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support request. All feedback is appreciated
                    to help us improve our offering!</p>
                <div className='card__container_ratings'>
                    <div className='card__container_ratings_number'
                    onClick={() => props.setRating(1)}>
                        <p>1</p>
                    </div>
                    <div className='card__container_ratings_number '
                    onClick={() => props.setRating(2)}>
                        <p>2</p>
                    </div>
                    <div className='card__container_ratings_number '
                    onClick={() => props.setRating(3)}>
                        <p>3</p>
                    </div>
                    <div className='card__container_ratings_number '
                    onClick={() => props.setRating(4)}
                    >
                        <p>4</p>
                    </div>
                    <div className='card__container_ratings_number '
                    onClick={() => props.setRating(5)}>
                        <p>5</p>
                    </div>
                </div>
                <Link to={props.rating === null ? "/" : "/ThankYou"}>
                <button>
                 Submit</button></Link>
            </div>
        </div>
    )
}

export default Card