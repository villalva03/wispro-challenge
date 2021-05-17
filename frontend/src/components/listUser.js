import React, { useState } from 'react';
import { filterName } from './util';

function ListUser({ users, deleteUser, editRow, openModalCharts, selectUser, chartsUser, sortByAlpha, sortByNumber, ...props }) {
    
    const [searchFilter, setSearchFilter] = useState('');
    const [optionSearch, setOptionSearch] = useState('');

    return (
        <>
            <div className="row col-12">
                <div className="col-3 btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary shadow" onClick={()=>setOptionSearch('filtrar')}>
                        Filtrar por
                    </button>
                    <button type="button" className="btn btn-outline-primary shadow" onClick={()=>setOptionSearch('ordenar')}>
                        Ordenar por
                    </button>
                </div>
            
            {optionSearch === 'filtrar' ?
            
                <input className='w-50 shadow-sm' type='text' placeholder="Search..." onChange={(e)=>setSearchFilter(e.target.value)}></input>
            
            : optionSearch === 'ordenar' ?
                <div className="col-12">
                    <div>Ordenar por: </div>
                    <div className="col-6 btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('nombre')}>Nombre</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('apellido')}>Apellido</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('email')}>Email</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByAlpha('domicilio')}>Domicilio</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByNumber('fechaAlta')}>Fecha</button>
                        <button type="button" className="btn btn-outline-primary shadow" onClick={()=>sortByNumber('dni')}>Dni</button>
                    </div>
                </div>
            :
                null
            }
            </div>
                
            <table>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Dni</th>
                        <th>Domicilio</th>
                        <th>Email</th>
                        <th>Fecha Alta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody className='shadow'>
                    {filterName(users, selectUser, editRow, openModalCharts, deleteUser, searchFilter, chartsUser)}
                    
                </tbody>
            </table>
        </>
        );
    }    
export default ListUser;