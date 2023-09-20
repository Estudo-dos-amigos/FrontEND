import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();



  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    }

    axios
  .post("http://localhost:3000/user/auth/register", userData)
  .then((res) => {
    if (res.status === 200 || res.status === 201) {
      console.log("Registro com sucesso!!");
      console.log("Dados da resposta:", res.data);
      navigate("/Home");
    }
  })
  .catch((err) => {
    console.log("Erro na solicitação:", err);
  });

};

  return (
    <>
      <form className="registerform" onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="mb-3">
            <label htmlFor="InputNome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="InputName"
              name="name"
              placeholder="Digite seu nome"
              required
              onChange={handleChange}
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
              name="email"
              placeholder="Digite seu e-mail"
              aria-describedby="E-mailHelpInline"
              onChange={handleChange}
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
              name="password"
              aria-describedby="passwordHelpInline"
              placeholder="Precisa ter de 8-20 caracteres."
              onChange={handleChange}
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
            />
          </div>
        </div>

        <br />
        <Link className="btn btn-success w-100 h-25" to="/Home" type="submit" onClick={handleSubmit}>
          Concluir
        </Link>

        <br />
      </form>
    </>
  );
}
