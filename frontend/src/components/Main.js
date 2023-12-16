import React from 'react';
import plus from '../images/plus.svg';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, cardClick, onCardLike, cards, onCardDelete}) {
    const currentUser = React.useContext(CurrentUserContext);

    return(
        <main className="content">
          <section className="profile">
              <div className="profile__change" onClick={onEditAvatar}></div>
              <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
              <div className="profile__info">
                  <div className="profile__edit">
                      <h1 className="profile__name">{currentUser.name}</h1>
                      <button type ="button" className="profile__edit-button" onClick={onEditProfile}></button>
                  </div>
                  <p className="profile__description">{currentUser.about}</p>
              </div>
              <button type ="button" className="profile__add-button" onClick={onAddPlace}>
                  <img className="profile__add-button-plus" src={plus} alt = "Плюс"/>
              </button>
          </section>

          <section className="cards">
          {cards.map((card) => (
            <Card {...card} key={card._id}  onCardClick={cardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
          ))}
          </section>
          
      </main>
    );
}


export default Main;