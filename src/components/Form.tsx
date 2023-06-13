import React, { useState } from 'react';

function Formulario() {
  const [ShowButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleCadastrarSenha = () => {
    setShowButton(false);
    setShowForm(true);
  };

  const handleCancelar = () => {
    setShowButton(true);
    setShowForm(false);
  };

  return (
    <div>
      {ShowButton && (
        <button onClick={ handleCadastrarSenha }>Cadastrar nova senha</button>
      )}

      {showForm ? (
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
