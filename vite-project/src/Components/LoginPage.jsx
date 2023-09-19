import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <>
      <form className="loginform">
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
        <div className="div2">
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
        </div>

        <br />
        <div className="div1">
          <button type="submit" className="btn btn-primary">
            Entrar
          </button>
          <Link className="btn btn-success" to="/Register">
            Registrar-se
          </Link>
        </div>
        <br />
        <p>
          <Link className="link-opacity-100 f" to="/ForgetPassword">
            Esqueci minha senha
          </Link>
        </p>
      </form>
    </>
  );
}
