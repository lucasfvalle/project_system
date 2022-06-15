import React from "react";
import './Dashboard.css';

// Componentes
import Card from '../../components/Card/Card';
function Dashboard(){
    const userDesc = "Cadastre um novo usuário para operar o sistema.";
    const productDesc ="Insira um novo produto na base de dados do sistema.";
    const sellDesc = "Clique para iniciar uma nova venda no sistema."
    const clientDesc ="Clique para adicionar um novo cliente a base de dados do sistema.";
    return(
        <div className="dashboard">
           <Card iconName="bi bi-person-plus-fill" title="Novo Usuário" btnName="Cadastrar" desc={userDesc} />
           <Card iconName="bi bi-people-fill" title="Novo Cliente" btnName="Adicionar" desc={clientDesc} />
           <Card iconName="bi bi-box2-fill" title="Novo Produto" btnName="Adicionar" desc={productDesc} />
           <Card iconName="bi bi-cash-stack" title="Nova Venda" btnName="Venda" desc={sellDesc} />
           
        </div>
    )
}
export default Dashboard