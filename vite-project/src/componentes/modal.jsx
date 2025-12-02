import React, { useEffect, useState } from 'react';
import '../style/modal.css';

const Modal = ({ isOpen, onClose, cepEscolhido }) => {
  const [dadosCep, setDadosCep] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen || !cepEscolhido) return;

    const buscarCep = async () => {
      try {
        setError(null);
        setDadosCep(null);

        const response = await fetch(`https://viacep.com.br/ws/${cepEscolhido}/json/`);
        if (!response.ok) {
          throw new Error('Erro ao buscar o CEP');
        }

        const dados = await response.json();

        if (dados.erro) {
          throw new Error('CEP não encontrado');
        }

        setDadosCep(dados);
      } catch (err) {
        setError(err.message);
      }
    };

    buscarCep();
  }, [isOpen, cepEscolhido]);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button onClick={onClose}>Fechar</button>

        {error && <p className="error">{error}</p>}

        {dadosCep && (
          <div className="cep-info">
            <h3>CEP: {dadosCep.cep}</h3>
            <p><strong>Logradouro:</strong> {dadosCep.logradouro}</p>
            <p><strong>Bairro:</strong> {dadosCep.bairro}</p>
            <p><strong>Cidade:</strong> {dadosCep.localidade}</p>
            <p><strong>Estado:</strong> {dadosCep.uf}</p>
          </div>
        )}
      </div>
    </div>
  );
};



export default Modal;
