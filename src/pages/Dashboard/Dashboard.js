import React from "react";
import './Dashboard.css';

// Componentes
import Card from '../../components/Card/Card';
function Dashboard(){
    

    const filmDesc = "Insira sua review sobre o novo filme que assistiu.";
    return (
        <div className="dashboard">
           <Card iconName="bi bi-film" title="Novo filme" btnName="Cadastrar" desc={filmDesc} />
        </div>
    )
}
export default Dashboard