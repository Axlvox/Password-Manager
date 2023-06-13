import React, { useState } from 'react';

function Formulario() {
  const [showButton, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [nameService, setNameService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const handleCadastrarSenha = () => {
    setShowButton(false);
    setShowForm(true);
  };

  const handleCancelar = () => {
    setShowButton(true);
    setShowForm(false);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    setValidPassword(passwordRegex.test(password));
  };

  return (
    <div>
      {showButton && (
        <button onClick={ handleCadastrarSenha }>Cadastrar nova senha</button>
      )}

      {showForm && (
        <form>
          <label>
            Nome do serviço:
            <input
              type="text"
              placeholder="Nome do Serviço"
              value={ nameService }
              onChange={ (e) => setNameService(e.target.value) }
            />
          </label>
          <label>
            Login:
            <input
              type="text"
              placeholder="Login"
              value={ login }
              onChange={ (e) => setLogin(e.target.value) }
            />
          </label>
          <label>
            Senha:
            <input
              type="password"
              placeholder="Senha"
              value={ password }
              onChange={ (e) => {
                setPassword(e.target.value);
                validatePassword();
              } }
            />
          </label>
          <label>
            URL:
            <input type="text" placeholder="URL" />
          </label>
          <button disabled={ !nameService || !login || !validPassword }>
            Cadastrar
          </button>
          <button onClick={ handleCancelar }>Cancelar</button>
        </form>
      )}
    </div>
  );
}

export default Formulario;
