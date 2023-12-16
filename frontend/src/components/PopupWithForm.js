import React from 'react';
import closeIcon from '../images/CloseIcon.svg';

function PopupWithForm({ title, name, children, isOpen, onClose, btnText, onSubmit }) {
    return (
        <div className={`popup  ${isOpen ? 'popup_opened' : ''}`} id={`popup__${name}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" id={`${name}__close`} onClick={onClose}><img className="popup__img-x" src={closeIcon} alt="Крестик" /></button>
                <div className="popup__content">
                    <h2 className="popup__head-name">{title}</h2>
                    <form onSubmit={onSubmit} className="popup__form" name={`${name}_form`} id={`${name}_form`}>
                        <fieldset className="popup__set">
                            {children}
                            <button type="submit" id={`popup__${name}-btn`} className="popup__button-save">{btnText}</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PopupWithForm;