import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function Register() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const api = axios.create({
        baseURL: 'http://localhost:3000/',
    });

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async () => {
    try {
      preventDefault();
      const response = await api.post (
        `/user/auth/register`,
        {
            name,
            email,
            password,
        }
      );
      console.log('Resposta da API:', response.data);
    } catch (err) {}
  };

  return (
    <>
      <form className="registerform" onSubmit={handleForm}>
        <div className="row g-3 align-items-center">
          <div className="mb-3">
            <label htmlFor="InputNome" className="form-label">
              Nome
            </label>
            <input
                type="text"
                className="form-control"
                id="InputName"
                placeholder="Digite seu nome"
                required
                value={name}
                onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputEmail" className="form-label">
              E-mail
            </label>
            <input
                type="text"
                className="form-control"
                id="InputEmail"
                placeholder="Digite seu e-mail"
                aria-describedby="E-mailHelpInline"
                required
                value={email}
                onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputIdade" className="form-label">
              Data de Nascimento
            </label>
            <input
              type="date"
              className="form-control"
              id="InputDataNascimento"
              placeholder="Digite sua data de nascimento"
            />
          </div>
        </div>
        <div></div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              Senha
            </label>
          </div>
          <div>
            <input
                type="password"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="Precisa ter de 8-20 caracteres."
                required
                value={password}
                onChange={(e) => {
                setPassword(e.target.value, "password");
              }}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="inputPasswordCadastro" className="col-form-label">
              Confirmação de senha
            </label>
          </div>
          <div>
            <input
                type="password"
                id="inputPasswordCadastro"
                className="form-control"
                aria-describedby="passwordHelpInline"
                placeholder="As senhas precisam ser exatamente iguais."
                required
                value={password}
                onChange={(e) => {
                setPassword(e.target.value, "password");
              }}
            />
          </div>
        </div>

        <br />

        <Link
          className="btn btn-success w-100 h-25"
          to="/Home"
          type="submit"
          onChange={handleFormEdit}
        >
          Concluir
        </Link>

        <br />
      </form>
    </>
  );
}
