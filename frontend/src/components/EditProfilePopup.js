import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const currentUser = React.useContext(CurrentUserContext);
    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [isOpen, currentUser]);
    

    function handleChangeName(evt) {
        setName(evt.target.value);
      }

      function handleChangeDescription(evt) {
        setDescription(evt.target.value);
      }

      function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
          name,
          about: description,
        });
      }

    return(
        <PopupWithForm
            title={'Редактировать профиль'}
            name={'profile'}
            btnText={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <input required minLength="2" maxLength="40" type="text" name="inputName" className="popup__input popup__input_date_name" id="inpName" placeholder="Имя" onChange={handleChangeName} value={name || ''} />
                <span className="popup__input-error inpName-error"></span>
            </label>
            <label className="popup__field">
                <input required minLength="2" maxLength="200" type="text" name="inputDescribe" className="popup__input popup__input_date_describe" id="inpDescribe" placeholder="О себе" onChange={handleChangeDescription} value={description || ''}/>
                <span className="popup__input-error inpDescribe-error"></span>
            </label>

        </PopupWithForm>
    );
}

export default EditProfilePopup;