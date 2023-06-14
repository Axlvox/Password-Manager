import React, { useState } from 'react';

function Formulario() {
  const [showForm, setShowForm] = useState(false);
  const [nameService, setNameService] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [url, setURL] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [saved, setSaved] = useState<{ name: string, login: string,
    password: string, url: string }[]>([]);

  const clear = () => {
    setNameService('');
    setLogin('');
    setPassword('');
    setURL('');
    setValidPassword(false);
  };

  const handleCadastrarSenha = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);

    const newSaved = {
      name: nameService,
      login,
      password,
      url,
    };

    setSaved([...saved, newSaved]);
    clear();
  };

  const handleCancelar = () => {
    setShowForm(false);
    clear();
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    setValidPassword(passwordRegex.test(password));
  };

  const passwordMessage = () => (
    <span>
      {password.length < 8 ? (
        <div className="invalid-password-check">
          Possuir 8 ou mais caracteres
        </div>
      ) : (
        <div className="valid-password-check">
          Possuir 8 ou mais caracteres
        </div>
      )}

      {password.length >= 8 && password.length <= 16 ? (
        <div className="valid-password-check">
          Possuir até 16 caracteres
        </div>
      ) : (
        <div className="invalid-password-check">
          Possuir até 16 caracteres
        </div>
      )}

      {/[a-zA-Z]/.test(password) && /\d/.test(password) ? (
        <div className="valid-password-check">
          Possuir letras e números
        </div>
      ) : (
        <div className="invalid-password-check">
          Possuir letras e números
        </div>
      )}

      {/[!@#$%^&*]/.test(password) ? (
        <div className="valid-password-check">
          Possuir algum caractere especial
        </div>
      ) : (
        <div className="invalid-password-check">
          Possuir algum caractere especial
        </div>
      )}
    </span>
  );


  const handleRm = (index: number) => {
    const updatedSaved = [...saved];
    updatedSaved.splice(index, 1);
    setSaved(updatedSaved);
  };


  return (
    <div>
      {!showForm && (
        <button onClick={ () => setShowForm(true) }>
          Cadastrar nova senha
        </button>
      )}

      {showForm && (
        <form onSubmit={ handleCadastrarSenha }>
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
            <input
              type="text"
              placeholder="URL"
              value={ url }
              onChange={ (e) => setURL(e.target.value) }
            />
          </label>
          <button
            type="submit"
            disabled={
              !nameService
              || !login
              || !validPassword
              || password.length < 8
              || password.length > 16
            }
          >
            Cadastrar
          </button>
          <button type="button" onClick={ handleCancelar }>
            Cancelar
          </button>
          {passwordMessage()}
        </form>
      )}

      {saved.length > 0 && (
        <div>
          {saved.map((service, index) => (
            <div key={ index }>
              <p>
                Nome do serviço:
                {' '}
                <a href={ service.url }>{service.name}</a>
              </p>
              <p>
                Login:
                <span>
                {service.login}
                </span>
              </p>
              <p>
                Senha:
                <span>
                {service.password}
                </span>
              </p>
              
              <button
                type="button"
                data-testid="remove-btn"
                onClick={() => handleRm(index)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}

      {!showForm && saved.length === 0 && <p>Nenhuma senha cadastrada</p>}
    </div>
  );
}

export default Formulario;
