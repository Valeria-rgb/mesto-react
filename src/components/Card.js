import React from "react";

function Card({ card, onCardClick }) {
    function handleCardClick() {
        onCardClick(card)
    }
    return (
        <li className="card">
            <img className="card__photo" src={card.link} alt={card.name} onClick={handleCardClick}/>
            <button className="card__trash" aria-label="trash"/>
            <div className="card__info">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__likes">
                    <button className="card__like" aria-label="like"/>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}
export default Card;