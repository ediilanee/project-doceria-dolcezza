import React from 'react'
import '../style/promocoes.css'

const Promocoes = () => {
  return (
    <div className="conteiner1">
      <h2> As ofertas que você estava esperando já chegaram! </h2>
      <div className="promocoes-conteiner"> 
        <div className="conteiner2">
        <img src="img/promocoes/bolofrutasvermelhas.png" alt="" className="promocoes-img"/>
        <p className="promocoes-p">Bolo de frutas vermelhas</p>
        <p className="promocoes-p" >R$ 120,50</p>
        <button className="button-p"> Adicionar </button>
      </div>
      <div className="conteiner2">
        <img src="img/promocoes/browie.png" alt="" className="promocoes-img"/>
        <p className="promocoes-p" >Browies sortidos</p>
        <p className="promocoes-p" >R$7,00</p>
        <button className="button-p" > Adicionar </button>
      </div>
      <div className="conteiner2">
        <img src="img/promocoes/Churroscomdocedeleite.png" alt=""className="promocoes-img" />
        <p className="promocoes-p" >Churros com doce de leite</p>
        <p className="promocoes-p" >R$30,00</p>
        <button className="button-p" > Adicionar </button>
      </div>
      <div className="conteiner2">    
        <img src="img/promocoes/combos3.png" alt="" className="promocoes-img" />
        <p className="promocoes-p" >Pecado perfeito </p>
        <p className="promocoes-p" >R$20,00 </p>
        <button className="button-p"  > Adicionar </button>
      </div>
     </div>
    </div>
  )
}

export default Promocoes;
