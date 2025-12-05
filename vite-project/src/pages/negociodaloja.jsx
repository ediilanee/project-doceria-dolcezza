import React from 'react'
import { CiCreditCard1 } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import '../style/negociodaloja.css'


const Negociodaloja = () => {
  return (
    <div className="conteiner" >
      <div className="card-principal"> 
        <CiHome className="destaque-icon"  />
        <p className="texto">Entrega à domicílio</p>
        <p className="texto"> Entregamos na sua porta.</p>
      </div>
      
      <div className="card-principal"> 
        <CiInstagram  className="destaque-icon" />
        <p className="texto"> Promoçoes</p>
        <p className="texto"> Siga-nos nas Redes.</p>
      </div>
 
      <div className="card-principal"> 
        <CiCreditCard1 className="destaque-icon" />
        <p className="texto">Pagamento seguro</p>
        <p className="texto">Pagamento 100% Seguro.</p>
      </div>
    </div>
  )
}

export default Negociodaloja;
