import React from "react";


function Login({onLogin }){
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
        onLogin(email, password);
    }
    
    return (
        <form onSubmit={handleSubmit} className=" auth auth__form" noValidate name="login">
            <h2 className="auth__title">Вход</h2>
            <input onChange={handleEmailChange} value={email} id="email" name="email" type="email" placeholder="Email" className="auth__input"  />
    
            <input onChange={handlePasswordChange} value={password} id="passw" name="passw" type="password" placeholder="Пароль" className="auth__input" />
            <button type="submit" className="auth__btn">
            Войти
            </button>
        </form>
  );
}

export default Login;