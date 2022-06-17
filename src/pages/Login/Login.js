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
        <div className="register">
            <div className="register-title">
                <h1>Cadastro</h1>
                <p>
                    Cadastre-se para ter acesso ao sistema.
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
                
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn" disable>Aguarde...</button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}
export default Login