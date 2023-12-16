import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}){
    const [name, setName] = React.useState("");
    const [link, setLink] = React.useState("");

    function handleNameChange(evt) {
        setName(evt.target.value);
      }

      function handleLinkChange(evt) {
        setLink(evt.target.value);
      }

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace({ 
            name: name,
            link: link,
         });
      }

      React.useEffect(() => {
        setName("");
        setLink("");
      }, [isOpen]);

    return(
    <PopupWithForm
        title={'Новое место'}
        name={'place'}
        btnText={'Создать'}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
    >
        <label className="popup__field">
            <input onChange={handleNameChange} value={name || ''} minLength="2" maxLength="30" required type="text" name="inputPlace" className="popup__input popup__input_date_place" id="name" placeholder="Название"/>
            <span className="popup__input-error name-error"></span>
            </label>
        <label className="popup__field">
            <input onChange={handleLinkChange} value={link || ''} required type="url" name="inputSrc" className="popup__input popup__input_date_src" id="link" placeholder="Ссылка на картинку"/>
            <span className="popup__input-error link-error"></span>
        </label> 
    </PopupWithForm>
    );
}

export default AddPlacePopup;