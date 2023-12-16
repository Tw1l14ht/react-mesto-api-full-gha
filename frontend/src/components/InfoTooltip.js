import closeIcon from '../images/CloseIcon.svg';


function InfoTooltip({name , onClose, isRegPoupOpen, isRegistration}){
    return(
        <div className={`popup  ${isRegPoupOpen ? 'popup_opened' : ''}`} id = {`popup__${name}`}>
            <div className="popup__container">
              <button type ="button" className="popup__close" id={`${name}__close`} onClick={onClose}><img className="popup__img-x" src={closeIcon} alt="Крестик"/></button>
              <div className="popup__content">
                <div className={`popup__registration ${isRegistration ? "popup__registration_type_ok" : "popup__registration_type_no"}`}></div>
                <h2 className="popup__description"> {isRegistration ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте еще раз."}</h2>
                </div>
            </div>
        </div>
    );
}

export default InfoTooltip;