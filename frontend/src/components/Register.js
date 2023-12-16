import React from "react";
import { Link } from "react-router-dom";


function Register({onRegister }){
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleEmailChange(evt) {
        setEmail(evt.target.value);
    }
    function handlePasswordChange(evt) {
        setPassword(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(email, password);
    }

return (
    <form className=" auth auth__form" noValidate name="register" onSubmit={handleSubmit}>
        <h2 className="auth__title">Регистрация</h2>
        <input value={email} onChange={handleEmailChange} id="email" name="email" type="email" placeholder="Email" className="auth__input"  />

        <input onChange={handlePasswordChange} value={password} id="passw" name="passw" type="password" placeholder="Пароль" className="auth__input" />
        <button type="submit" className="auth__btn">
        Зарегистрироваться
        </button>
        <Link to="/signin" className="auth__link">
          Уже зарегистрированы? Войти
        </Link>
    </form>
    );
}

export default Register;