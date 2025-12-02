import React, { useEffect, useState } from 'react';
import Modal from '../componentes/modal.jsx';

const Cadastro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formDat, setFormDat] = useState({
    nome: '',
    sobrenome: '',
    cpf: '',
    telefone: '',
    cep: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDat({
      ...formDat,
      [name]: value,
    });
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

        const response = await fetch('link do backend', {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDat),
        });
        if(response.ok){
            const data = await response.json();
            console.log("Pedido feito fornecedor");
        } else {
            const data = await response.json();
            console.log("Pedido não cadastrado");
        }
        } catch(error) {
            console.error('Erro na requisição:', error)
        }
    }

  // Abrir modal poha
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fechar modal poha
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Dolcezza</h2>
      <p>Preencha os dados abaixo para realizar sua compra</p>

      <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        id="nome"
        name="nome"
        placeholder="Seu primeiro nome"
        required
        value={formDat.nome}
        onChange={handleChange}
      />

      <label htmlFor="sobrenome">Sobrenome</label>
      <input
        type="text"
        id="sobrenome"
        name="sobrenome"
        placeholder="Seu sobrenome"
        required
        value={formDat.sobrenome}
        onChange={handleChange}
      />

      <label htmlFor="cpf">CPF</label>
      <input
        type="text"
        id="cpf"
        name="cpf"
        placeholder="000.000.000-00"
        required
        maxLength="14"
        value={formDat.cpf}
        onChange={handleChange}
      />

      <label htmlFor="telefone">Telefone</label>
      <input
        type="tel"
        id="telefone"
        name="telefone"
        placeholder="(81) 99999-9999"
        required
        maxLength="15"
        value={formDat.telefone}
        onChange={handleChange}
      />

      <label htmlFor="cep">CEP</label>
      <input
        type="text"
        id="cep"
        name="cep"
        placeholder="Digite o CEP"
        required
        maxLength="9"
        value={formDat.cep}
        onChange={handleChange}
      />

      <button onClick={openModal}>Consultar CEP</button>

      <button type="submit" className="btn-primary">
        Cadastrar
      </button>
      </form>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        cepEscolhido={formDat.cep}
      />
    </div>
  );
}
export default Cadastro;