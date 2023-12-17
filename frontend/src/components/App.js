import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer';
import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import {  Routes, Route, useNavigate, Navigate } from "react-router-dom";
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import Register from './Register.js';
import Login from './Login.js';
import ProtectedRouteElement from './ProtectedRoute.js';
import { register, authorize, checkToken } from '../utils/auth.js';
import InfoTooltip from './InfoTooltip.js';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [hederEmail, setHeaderEmail] = React.useState("");
    const [isInfoTolltipReg, setIsInfoTolltipReg] = React.useState(false);
    const [isRegPoupOpen, setRegPoupOpen] = React.useState(false);
    const navigate = useNavigate();

    const closeAllPopups = () => {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
      setSelectedCard(null);
      setRegPoupOpen(false);
    }

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const handleCardClick = (card) => {
      setSelectedCard(card);
    };

    React.useEffect(() => {
      api
      .getInitialCards()
      .then((card) => {
          setCards(card);
      })
      .catch((err) => {
          console.log(err);
      });
  }, [loggedIn]);

    React.useEffect(() => {
      api
        .getInfo()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [loggedIn]);

    function handleCardDelete(card) {
      api
        .removeCard(card._id)
        .then((newCard) => {
          const updateCards = cards.filter((c) =>
            c._id === card._id ? "" : newCard
          );
          setCards(updateCards);
        })
        .catch((err) => {
          console.log(err);
      });
    }

    function handleCardLike(card) {
      const isLiked = card.likes.some((id) => id === currentUser._id);
      if (!isLiked) {
        api
          .getLike(card._id)
          .then((newCard) => {
            setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
            );
          })
          .catch((err) => {
            console.log(err);
        });
      } else {
        api
          .removeLike(card._id)
          .then((newCard) => {
            setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
            );
          })
          .catch((err) => {
            console.log(err);
        });
      }
    }

    function handleUpdateUser(info) {
      api
        .patchUser(info)
        .then((user) => {
          setCurrentUser(user);
          closeAllPopups();
        })
        .catch((err) => {
          console.log(err);
      });
    }

    function handleUpdateAvatar(info) {
      api
        .patchAvatar(info)
        .then((avatar) => {
          setCurrentUser(avatar);
          closeAllPopups();
        })
        .catch((err) => {
          console.log(err);
      });
    }

    function handleAddPlaceSubmit(info) {
      api
        .addNewCard(info)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          closeAllPopups();
        })
        .catch((err) => {
          console.log(err);
      });
    }

    function handleRegUser(email, password) {
      register(email, password)
        .then((data) => {
          if (data) {
            setIsInfoTolltipReg(true);
            navigate("/signin", { replace: true });
          }
        })
        .catch((err) => {
          setIsInfoTolltipReg(false);
          console.log(err);
        })
        .finally(() => setRegPoupOpen(true));
    }

    function handleAuthUser(email, password) {
        authorize(email, password)
        .then((data) => {
          if (data.token) {
            setHeaderEmail(email);
            localStorage.setItem('jwt', data.token);
            setLoggedIn(true);
            navigate("/", { replace: true });
          }
        })
        .catch((err) => {
          setIsInfoTolltipReg(false);
          setRegPoupOpen(true);
          console.log(err);
        });
    }

    React.useEffect(() => {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        checkToken(jwt)
          .then((data) => {
            if (data) {
              setLoggedIn(true);
              setHeaderEmail(data.email);
              navigate("/", { replace: true });
            }
          })
          .catch((err) => console.log(err));
      }
    }, [loggedIn]);
   
    function handleSingOut() {
      localStorage.removeItem("jwt");
      setHeaderEmail("");
      setLoggedIn(false);
      navigate("/singin", { replace: true });
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header onSignOut={handleSingOut} headerEmail={hederEmail} />
        <Routes>
          <Route path="*" element={loggedIn ? <Navigate to="/" replace /> : <Navigate to="/signin" replace />} />
          <Route path="/" element={<ProtectedRouteElement element={Main} 
            loggedIn={loggedIn} 
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            cardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            cards = {cards}/>} 
          />
          <Route path="/signup" element={<Register onRegister={handleRegUser} loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login onLogin={handleAuthUser} loggedIn={loggedIn}/>} />
        </Routes>
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
    
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm
          title={'Вы уверены?'}
          name={'trash'}
          btnText={'Да'}
        />

        <ImagePopup
          isOpen={selectedCard}
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <InfoTooltip
            name={"registration"}
            onClose={closeAllPopups}
            isRegistration={isInfoTolltipReg}
            isRegPoupOpen={isRegPoupOpen}
          />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;