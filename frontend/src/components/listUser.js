import React, { useState } from 'react';
import { filterName, table } from './util';

function ListUser({ users, deleteUser, editRow, openModalCharts, selectUser, chartsUser, sortByAlpha, sortByNumber, ...props }) {
    
    const [searchFilter, setSearchFilter] = useState('');
    const [optionFilter, setOptionFilter] = useState(false);

    return (
        <>
            <div className="row col-12">            
            { !optionFilter ?
                <div className="col-2 btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary shadow" onClick={()=>{setOptionFilter(true); setOptionFilter(true)}}>
                        Filtrar
                    </button>
                </div>
            :
                <div className="row">
                <div className="col-2 btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary shadow" onClick={()=>{setOptionFilter(false); setSearchFilter('')}}>Borrar Filtro</button>
                </div>
            
                <input className='col-2 w-50 shadow-sm form-control' type='text' placeholder="Search..." onChange={(e)=>setSearchFilter(e.target.value)}></input>
                </div>
            }
                <div className="col-12 mt-3 mb-3">
                    <div className="mb-2">Ordenar por: </div>
                    <div className="col-6 btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('nombre')}>Nombre</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('apellido')}>Apellido</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('email')}>Email</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('domicilio')}>Domicilio</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByNumber('fechaAlta')}>Fecha</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByNumber('dni')}>Dni</button>
                    </div>
                </div>
            
            </div>

            <div className="table-responsive-md table-responsive-lg table-responsive-sm">    
                <table className="table table-striped mt-3">
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Dni</th>
                            <th scope="col">Domicilio</th>
                            <th scope="col">Email</th>
                            <th scope="col">Fecha Alta</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='shadow'>
                        
                        {optionFilter === true ? 
                            filterName(users, selectUser, editRow, openModalCharts, deleteUser, searchFilter, chartsUser)
                        :
                            table(users, selectUser, editRow, openModalCharts, deleteUser, chartsUser)
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
        );
    }    
export default ListUser;