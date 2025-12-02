// Inicio.jsx
import React from 'react';
import '../style/inicio.css'; // O CSS está aqui!
import { GiSugarCane, GiEyedropper } from "react-icons/gi";
import { LuCandy } from "react-icons/lu";

const Inicio = () => {
  return (
    <div className="conteiner-inicio">
      
      <div className="inicio-conteudo"> {/* Container para o texto e os destaques */}
        
        <p className="inicio-texto"> 
          Delícias de verdade, feitas com ingredientes de origem selecionada, propósito de levar alegria e transparência em cada detalhe. Todos os produtos são: Elaborados diariamente com menos açúcar e sem conservantes, para que você sinta o sabor puro e caseiro de um doce feito com o coração. 
        </p>

        {/* Container para os 3 DESTAQUES ALINHADOS HORIZONTALMENTE */}
        <div className="inicio-destaques-wrapper"> 
          
          <div className="destaque-item">
            <GiSugarCane className="inicio-icons"/>
            <p className="p-texto">Menos Açúcar </p>
          </div>

          <div className="destaque-item">
            <GiEyedropper className="inicio-icons" />
            <p className="p-texto">Sem conservantes </p>
          </div>
          
          <div className="destaque-item">
            <LuCandy className="inicio-icons" />
            <p className="p-texto">Sabor puro e caseiro </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inicio;