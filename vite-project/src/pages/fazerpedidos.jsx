import React , { useState} from 'react'


const Cadastro = () => {
    const [formDat,SetFormData ] = useState({
        nome:'',
        sobrenome:'',
        cpf:'',
        telefone:'',
    
    }) ;
    const [dadosCep,SetDadosCep] = useState('');
    handleSubmit = async (e) => {
     
        e.preventDefault();
        try {
            const response = await fatch(`viacep.com.br/ws/${formDat.cpf }/json/ ` );
            if(!response.ok){
               throw new Error('Erro na requisição');
            }
            const dados = await response.json();
            SetDadosCep(dados || [])
        } catch (error) {
             throw new Error('Erro na url'); 
        }

    }
  return (
    <div>
      <h2>Dolcezza</h2>
      <p>Preencha os dados abaixo para realizar sua compra</p>
      <label for="nome">Nome</label>
                <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    placeholder="Seu primeiro nome" 
                    required 
                />

                <label for="sobrenome">Sobrenome</label>
                <input 
                    type="text" 
                    id="sobrenome" 
                    name="sobrenome" 
                    placeholder="Seu sobrenome" 
                    required 
                />

                <label for="cpf">CPF</label>
                <input 
                    type="text" 
                    id="cpf" 
                    name="cpf" 
                    placeholder="000.000.000-00" 
                    required 
                    maxlength="14"
                />

                <label for="telefone">Telefone</label>
                <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    placeholder="(81) 99999-9999" 
                    required 
                    maxlength="15"
                />  
        {dadosCep.length ===0 ? (
            <p>Nenhum cep encontrado!</p>
        ) : (
        <>
            {dadosCep.map((cep)=>(
                <div>
                    <p>{cep.cep}</p>
                    <p>{cep.complimente}</p>
                    <p>{cep.bairro}</p>
                    <p>{cep.localidade}</p>
                    <p>{cep.estado}</p>
                    <p>{cep.ddd}</p>
                </div>
            )
        )}
            </>
        )}
        <button type="submit" class="btn-primary">
            Cadastrar
        </button>

        </div>
    
 
  )
}

export default Cadastro
