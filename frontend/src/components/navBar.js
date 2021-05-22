import React from 'react';
import logo from '../logo.png';

function NavBar({ adminUser, cerrarSesion, ...props }) {
    return( 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-4 sticky-top">
            <div className="container-fluid">
            <img src={logo} alt='logo' width='60'/>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <h5 className="navbar-nav mx-auto mb-2 mb-lg-0 text-white me-3 mt-1">Administrador: {adminUser.nombre} {adminUser.apellido}</h5>

                <form className="d-flex">
                    <button onClick={()=>cerrarSesion()} className="btn btn-primary">Cerar Sesión</button>
                </form>
                </div>
            </div>
        </nav>       
    )
}

export default NavBar;