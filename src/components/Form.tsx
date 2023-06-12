const formulario = () => {
return (
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
    <button>Cancelar</button>
  </form>
);
}

export default formulario;