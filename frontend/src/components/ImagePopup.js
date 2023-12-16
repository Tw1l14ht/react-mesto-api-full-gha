import React from 'react';
import closeIcon from '../images/CloseIcon.svg';

function ImagePopup(props) {
    return (
        <div className={`popup popup_place_image ${props.card ? "popup_opened" : ""}`} id="popup__image">
            <div className="popup__items">
                <button className="popup__close popup__close_place_card" type="button" onClick={props.onClose}>
                    <img className="popup__img-x" src={closeIcon} alt="Крестик" />
                </button>
                <img className="popup__card-image" src={props.card ? props.card.link : ""} alt={props.card ? props.card.name : ""} />
                <h2 className="popup__describe">{props.card ? props.card.name : ""}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;