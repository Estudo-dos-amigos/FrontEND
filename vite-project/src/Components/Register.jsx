import { Link } from 'react-router-dom';

export function Register() {

    return (
        <>
            <form className="loginform">
            <div className="row g-3 align-items-center">
                <div className="mb-3">
                    <label htmlFor="InputNome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="InputEmail" placeholder="Digite seu nome" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">E-mail</label>
                    <input type="text" className="form-control" id="InputEmail" placeholder="Digite seu e-mail"
                        aria-describedby="E-mailHelpInline" />
                </div>
                <div className="mb-3">
                    <label htmlFor="InputIdade" className="form-label">Data de Nascimento</label>
                    <input type="date" className="form-control" id="InputDataNascimento"
                        placeholder="Digite sua data de nascimento" />
                </div>
            </div>
            <div></div>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Senha</label>
                </div>
                <div>
                    <input type="password" id="inputPassword6" className="form-control"
                        aria-describedby="passwordHelpInline" placeholder="Precisa ter de 8-20 caracteres." />
                </div>
                <div className="col-auto">
                    <label htmlFor="inputPasswordCadastro" className="col-form-label">Confirmação de senha</label>
                </div>
                <div>
                    <input type="password" id="inputPasswordCadastro" className="form-control"
                        aria-describedby="passwordHelpInline" placeholder="As senhas precisam ser exatamente iguais." />
                </div>
            </div>


            <br />

                <a className="btn btn-success" role="button" aria-disabled="true" href="./index.html" >Concluir</a>

            <br />

        </form>
        </>
    )
}