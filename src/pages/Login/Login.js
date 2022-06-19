import React from "react";
import './Login.css';

// Hooks
import {useEffect, useState} from 'react';
import { useAuthentication } from "../../hooks/useAuthentication";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const {login, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        };


        const res = await login(user);

        console.log(res);
    }

    useEffect(() => {
        if(authError){
            setError(authError);
        }
    }, [authError])


    return(
        <div className="login-container">
            <div className="login-image">
                <img src="../../../imgs/login.png" />
            </div>
            <div className="login">
                <div className="login-title">
                    <h1>Login</h1>
                    <p>
                        Insira seu e-mail e sua senha para acessar o sistema.
                    </p>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Email:</span>
                        <input 
                            type="email"
                            name="email"
                            required
                            placeholder="Insira o seu e-mail."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input 
                            type="password"
                            name="password"
                            required
                            placeholder="Insira a sua senha."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    
                    {!loading && <button className="btn">Entrar</button>}
                    {loading && <button className="btn" disable="true"><div className="loader"></div></button>}
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
        
    )
}
export default Login