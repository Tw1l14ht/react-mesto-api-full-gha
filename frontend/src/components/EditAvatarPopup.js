import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}){
    const ref = React.useRef();

    function handleSubmit(evt) {
      evt.preventDefault();
      onUpdateAvatar({ avatar: ref.current.value });
    }
    React.useEffect(() => {
      ref.current.value = '';
    }, [isOpen]);
    return(
        <PopupWithForm
            title={'Обновить автар'}
            name={'avatar'}
            btnText={'Сохранить'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <label className="popup__field">
                <input required type="url" name="inputSrc" className="popup__input popup__input_date_imgLink" id="avatarSrc" placeholder="Ссылка на картинку" ref={ref}/>
                <span className="popup__input-error avatarSrc-error"></span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;