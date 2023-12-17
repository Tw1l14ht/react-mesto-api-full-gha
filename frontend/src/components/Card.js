import trashImg from '../images/Trash.svg'
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import React from 'react';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.owner === currentUser._id;
    const isLiked = props.likes.some(i => i === currentUser._id);
    const cardLikeButtonClassName = ( 
        `card__like-btn ${isLiked && 'card__like-btn_active'}` 
      );; 

    function handleClick() {
        props.onCardClick(props);
      }

    function handleLikeClick() {
        props.onCardLike(props);
      }

    function handleDeleteClick(){
        props.onCardDelete(props);
    }

    return (
        <div className="card">
            
            <img src={trashImg} alt="Корзина" className={`card__trash ${isOwn ? "card__trash_type_active" : ""}`} onClick={handleDeleteClick}/>
            <img className="card__image" src={props.link} alt={props.name} onClick={handleClick}/>
            <div className="card__describe">
                <h2 className="card__name">{props.name}</h2>
                <div className="card__like">
                    <button className={cardLikeButtonClassName} type ="button" onClick={handleLikeClick}></button>
                    <h3 className="card__like-counter card__like-counter_active">{props.likes.length}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;