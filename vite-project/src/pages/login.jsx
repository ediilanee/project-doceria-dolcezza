import React from 'react'

const Login = () => {
  return (
    <div>
        <h2>Dolcezza</h2>
        <button>Criar Conta</button>
        <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="seu.email@exemplo.com" 
            required 
        />
       

        
        <label for="password">Sua Senha</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="Mínimo 6 caracteres" 
            required
        />
        <button >Continuar</button>
    </div>
  )
}

export default Login
