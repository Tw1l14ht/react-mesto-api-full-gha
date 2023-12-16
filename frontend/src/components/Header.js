import React from 'react';
import headLogo from '../images/logo_white.svg';
import {Routes, Route, Link} from 'react-router-dom';

function Header({ onSignOut, headerEmail }){
    return(
        <header className="header">
          <img className = "header__logo" src={headLogo} alt="Логотип место"/>
          <Routes>
            <Route path="/signin" element={<Link to="/signup" className="header__link">
                Регистрация
              </Link>}/>

            <Route path="/signup" element={<Link to="/signin" className="header__link">
                Войти
              </Link>}
            />

            <Route path="/" element=
              {<div className="header__profile-info">
                <p className="header__email">{headerEmail}</p>
                <Link to="/signin" className="header__link header__link_exit" onClick={onSignOut}>Выйти</Link>
              </div>}
            />
          </Routes>
        </header>
    );
}

export default Header;