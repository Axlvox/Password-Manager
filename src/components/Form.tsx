import React, { useState } from 'react';

function Formulario() {
  const [mostrarBotao, setMostrarBotao] = useState(true);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleCadastrarSenha = () => {
    setMostrarBotao(false);
    setMostrarFormulario(true);
  };

  const handleCancelar = () => {
    setMostrarBotao(true);
    setMostrarFormulario(false);
  };

  return (
    <div>
      {mostrarBotao && (
        <button onClick={ handleCadastrarSenha }>Cadastrar nova senha</button>
      )}

      {mostrarFormulario ? (
        <form>
          <label>
            Nome do serviço:
            <input type="text" placeholder="Nome do Serviço" />
          </label>
          <label>
            Login:
            <input type="text" placeholder="Login" />
          </label>
          <label>
            Senha:
            <input type="password" placeholder="Senha" />
          </label>
          <label>
            URL:
            <input type="text" placeholder="URL" />
          </label>
          <button>Cadastrar</button>
          <button onClick={ handleCancelar }>Cancelar</button>
        </form>
      ) : null}
    </div>
  );
}

export default Formulario;
