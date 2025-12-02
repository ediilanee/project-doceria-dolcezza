import React from 'react'
import { Link } from 'react-router-dom';
import '../style/rolagem.css'

const Rolagem = () => {
  return (
    <div >
      <h2>Explore nossos produtos</h2>
      <div>  <Link to="tudo">
         <img src="img/todososprodutos/capaprodutosl.png" alt="" />
         <p>Todos os produtos</p>  </Link>
      </div>

      <div> <Link to="bolos">
        <img src="img/bolos/bolotortalimao.png" alt="" />
        <p>Bolos</p>   </Link>
      </div>

      <div> <Link to="cupcakes">
         <img src="img/cupcakes/prestigio.png" alt="" />
         <p>Cupcakes</p>   </Link>
      </div>
      
      <div> <Link to="trufas">
        <img src="img/trufas/trufasmorango.png" alt="" />
        <p>Trufas</p>   </Link>
      </div>
    </div>
  )
}

export default Rolagem;
