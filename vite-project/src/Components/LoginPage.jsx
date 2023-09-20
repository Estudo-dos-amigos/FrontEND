import { Link, useNavigate } from "react-router-dom";
import { Header } from "./Header";
import axios from "axios";
import { useState } from "react";


export function LoginPage() {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: values.email,
      password: values.password,
    }

    axios
      .post("http://localhost:3000/user/auth/login", userData)
      .then((res) => {
        if (res.status === 200) {
          console.log("Logado com sucesso!!");
          console.log("Dados da resposta:", res.data);
          navigate("/Home");
        } else {
          console.log("erro na solicitação:", res.status);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="logo-primos">
        <Header />
      </div>
      <div className="loginform">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              name="password"
              placeholder="Digite a senha"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="div2  w-100 p-0">
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
              />
              <label className="form-check-label" htmlFor="rememberCheck">
                Lembrar-me
              </label>
            </div>
            <Link className="link-opacity-100" to="/ForgetPassword">
              Esqueci minha senha
            </Link>
          </div>

          <br />
          <div className="div1">
            <Link className="btn btn-primary w-100" onClick={handleSubmit}>
              Entrar
            </Link>
          </div>
          <div className="registerButton">
            Ainda não tem uma senha?
            <Link className="text-success" to="/Register">
              Registre-se!
            </Link>
          </div>
          <br />
        </form>
      </div>
    </>
  );
}
