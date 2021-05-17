import React from 'react';
import logo from '../logo.png';

function NavBar({ adminUser, cerrarSesion, ...props }) {
    return( 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-5 sticky-top">
            <div className="container-fluid">
            <img src={logo} alt='logo' width='60'/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <form className="d-flex justify-content-end">
                    <h5 className="text-white me-3 mt-1">Administrador: {adminUser.nombre} {adminUser.apellido}</h5>
                    <button onClick={()=>cerrarSesion()} className="btn btn-primary">Cerar Sesión</button>
                </form>
            </div>
        </nav>       
    )
}

export default NavBar;