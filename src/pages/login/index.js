import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <>
        <div className="login-body">
            <div className="login-box-main">
                <div className="login-box">
                    <h2>Login</h2>
                    <i>Faça login para continuar</i>
                    <div className="label-float">
                        <input type="text" placeholder=" "/>
                        <label>Nome de Usuário</label>
                    </div>
                    <div className="label-float">
                        <input type="password" placeholder=" " required=""/>
                        <label>Senha</label>
                    </div>
                    <Link className="btn" to="/">Entrar</Link>
                </div>
            </div>
        </div>
            </>
    )
}

export default Login;