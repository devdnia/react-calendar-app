
 import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore, useForm } from '../../hooks';
import './loginPage.css';

 const logingFormFields ={
    loginEmail: '',
    loginPassword: '',
 }

 const resgisterFormFields ={
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
 }

export const LoginPage = () => {

    const { startLogin, errorMessage, startRegister } = useAuthStore()

    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm( logingFormFields );
    const { registerName, registerEmail, registerPassword, registerPassword2, onInputChange: onRegisterChange } = useForm( resgisterFormFields );

    const loginSubmit = (e) => {
        e.preventDefault();
        startLogin({email: loginEmail, password: loginPassword});
    }

    const registerSubmit = (e) => {
        e.preventDefault();

        if(registerPassword !== registerPassword2){
            Swal.fire({
                title: 'Error en el registro',
                text: 'Las contraseñas no coinciden',
                icon: 'error',
            })
        }


        if( registerName.length <= 1){
            Swal.fire({
                title: 'Error en el registro',
                text: 'El nombre es muy corto',
                icon: 'error',
            })
        }

        startRegister({name: registerName, email: registerEmail, password: registerPassword, password2: registerPassword2});

    }

    useEffect(() => {
        if ( errorMessage !== undefined ){
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }

    }, [errorMessage])
    

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={registerName}
                                onChange={onRegisterChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={onRegisterChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={onRegisterChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}