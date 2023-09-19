import { Link } from 'react-router-dom';

export function ForgetPassword() {

  return (
    <>
      <form className="forgetform">
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">
            Coloque seu e-mail para recuperar sua senha.
          </label>
          <br />
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite seu e-mail"
          />
        </div>
        <br />
        <div className="grid text-center div3">
          <a
            className="btn btn-success w-50 h-25"
            role="button"
            aria-disabled="true"
            href="#"
          >
            Recuperar!
          </a>
          <Link to="/" className="btn btn-primary w-50 h-25">
            Voltar
          </Link>
        </div>
      </form>
    </>
  );
}
