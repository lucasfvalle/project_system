import React from 'react';

function Home(){
    function exibe(){
        return alert("Teste!");
    }
    return(
        <div className="home">
            <div className="card">
                <h2>Home Page</h2>
                <p>
                    Lorem Ipsum.
                </p>
                <button onClick={exibe}>Botão</button>
            </div>
            
        </div>
    )
}
export default Home;