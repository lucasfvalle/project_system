import React from "react";
import './Register.css';

// Hooks
import {useEffect, useState} from 'react';
import { useAuthentication } from "../../hooks/useAuthentication";

function Register(){
    const [displayName,setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [error, setError] = useState("")

    const {createUser, error: authError, loading} = useAuthentication();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password
        };

        if(password !== confirmPassword){
            setError("As senhas não conferem!");
            return;
        }

        const res = await createUser(user);

        console.log(res);
    }

    useEffect(() => {
        if(authError){
            setError(authError);
        }
    })


    return(
        <div className="register-container">
            <div className="register-image">
                <img src="../../../imgs/account.png" alt="Crie sua conta."/>
            </div>
            <div className="register">
            <div className="register-title">
                <h1>Cadastro</h1>
                <p>
                    Cadastre-se para ter acesso ao sistema.
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input 
                        type="text"
                        name="displayName"
                        required
                        placeholder="Insira o seu nome."
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
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
                <label>
                    <span>Confirme sua senha:</span>
                    <input 
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme a sua senha."
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn" disable="true"><div className="loader"></div></button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
        </div>
        
    )
}
export default Register