import { Link } from 'react-router-dom';
import { useState } from 'react'

export function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        date: ''
    })

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name]: event.target.value
        })
    }

    const handleForm = async (event) => {
        
        try {
            event.preventDefault()
            const response = await fetch(`/api/user/cadastro`, {
                 method: 'POST', 
                 body: JSON.stringify(formData)
            })
            const json = await response.json()
            console.log(response.status)
            console.log(json)
        } catch (err) {
            
        }
    }

    return (
        <>
            <form className="registerform">
            <div className="row g-3 align-items-center">
                <div className="mb-3">
                    <label htmlFor="InputNome" className="form-label">Nome</label>
                    <input type="text" className="form-control" id="InputEmail" placeholder="Digite seu nome" required value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label">E-mail</label>
                    <input type="text" className="form-control" id="InputEmail" placeholder="Digite seu e-mail"
                        aria-describedby="E-mailHelpInline" required value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputIdade" className="form-label">Data de Nascimento</label>
                    <input type="date" className="form-control" id="InputDataNascimento"
                        placeholder="Digite sua data de nascimento" required value={formData.date}/>
                </div>
            </div>
            <div></div>
            <div className="row g-3 align-items-center">
                <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Senha</label>
                </div>
                <div>
                    <input type="password" id="inputPassword6" className="form-control"
                        aria-describedby="passwordHelpInline" placeholder="Precisa ter de 8-20 caracteres." required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
                </div>
                <div className="col-auto">
                    <label htmlFor="inputPasswordCadastro" className="col-form-label">Confirmação de senha</label>
                </div>
                <div>
                    <input type="password" id="inputPasswordCadastro" className="form-control"
                        aria-describedby="passwordHelpInline" placeholder="As senhas precisam ser exatamente iguais." required value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
                </div>
            </div>


            <br />

                <Link className="btn btn-success w-100 h-25" to="/Home" >
                    Concluir
                </Link>

            <br />

        </form>
        </>
    )
}