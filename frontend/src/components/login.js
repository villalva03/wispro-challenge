import React, { useState } from 'react';
import logo from '../logo.png';

function Login({ iniciarSesion, admin, ...props }) {

    const [adminUsername, setAdminUsername] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [alertError, setAlertError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (admin.username === adminUsername && admin.password === adminPassword) {
            iniciarSesion();
        }else{
            mostrarError();
        }
    }

    const mostrarError = () => {
        setAlertError(true)
        setTimeout(() => {ocultarError()}, 3500);
    }

    const ocultarError = () => {
        setAlertError(false)
    }

    return(        
        <div className="container text-white w-50 mt-5 rounded shadow-lg border">
            <div className="row align-items-stretch">
                <div className="col d-none d-lg-block rounded-start pt-5">
                    <img src={logo} alt='logo' width='450'/>
                </div>
                <div className="col logo p-5 rounded-end">
                    <h2 className="fw-bold text-center text-white py-4 ">Iniciar Sesión</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="emailAddress" className="form-label">Ingresar Email</label>
                            <input type="email" id="emailAddress" className="form-control" onChange={(e)=>setAdminUsername(e.target.value)} required autoFocus></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Ingresar Contraseña</label>
                                <input type="password" id="password" className="form-control" onChange={(e)=>setAdminPassword(e.target.value)} required></input>
                        </div>
                        <div className="d-grid mb-4">            
                            <button type="submit" value="submit" className="btn btn-dark">Iniciar Sesión</button>
                        </div>
                        { alertError ? 
            
                            <div className="alert alert-danger text-center" role="alert">
                                <h6><span>¡Error!</span> Usuario y/o contraseña incorrectos.</h6>
                            </div>
                        :
                            null
                        }

                      </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login;