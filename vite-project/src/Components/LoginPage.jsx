import { Link } from "react-router-dom";
import { Header } from "./Header";

export function LoginPage() {
  return (
    <>
      <div className="logo-primos">
        <Header />
      </div>
      <div className="loginform">
        <form>
          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              placeholder="Digite seu e-mail"
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
              placeholder="Digite a senha"
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
            <Link to="/Home" className="btn btn-primary w-100">
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
