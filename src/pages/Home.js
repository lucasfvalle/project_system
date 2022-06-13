import React from 'react';
import './Home.css'

function Home(){
    function exibe(){
        return alert("Teste!");
    }
    return(
        <div className="home">
            <div className="card">
                <i className="bi bi-wallet-fill"></i>
                <h2>Home Page</h2>
                <p>
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem.
                </p>
                <button onClick={exibe}>Botão</button>
            </div>
            <div className="card">
                <i className="bi bi-wallet-fill"></i>
                <h2>Home Page</h2>
                <p>
                Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem.
                </p>
                <button onClick={exibe}>Botão</button>
            </div>
            <div className="card">
                <i className="bi bi-wallet-fill"></i>
                <h2>Home Page</h2>
                <p>
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.
                    Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem.
                </p>
                <button onClick={exibe}>Botão</button>
            </div>
            
        </div>
    )
}
export default Home;