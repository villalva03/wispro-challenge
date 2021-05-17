import React from 'react';
import { Marker, Popup } from 'react-leaflet';

//Map Global
export const userMapGlobal = (users) =>( 
    users.map((user) => (
    <div key={user.id}>
        <Marker position={[user.lat, user.lng]}>
            <Popup position={[user.lat, user.lng]} >
                <div className='mb-1 mt-1'>Usuario: {user.nombre} {user.apellido}</div>
                <div className='mb-1'>Dni: {user.dni}</div>
                <div className='mb-1'>Fecha Alta: {user.fechaIngreso}</div>
                <div className='mb-1'>Email: {user.email}</div>
                <div className='mb-1'>Domicilio: {user.domicilio}</div>
            </Popup>
        </Marker>
    </div>
)));

//Map user
export const userMap = (user) =>(
    <div key={user.id}>
        <Marker position={[user.lat, user.lng]} >
            <Popup position={[user.lat, user.lng]} >
            <div className='mb-1 mt-1'>Usuario: {user.nombre} {user.apellido}</div>
            <div className='mb-1'>Dni: {user.dni}</div>
            <div className='mb-1'>Fecha Alta: {user.fechaIngreso}</div>
            <div className='mb-1'>Email: {user.email}</div>
            <div className='mb-1'>Domicilio: {user.domicilio}</div>
            </Popup>
        </Marker>
    </div>
)

//Filter Nombre
export const filterName = (users, selectUser, editRow, openModalCharts, deleteUser, searchFilter, chartsUser) => (
    users.length > 0 ? (
        users.filter((user) => {
            if (searchFilter === ''){
                return user
            } else {
                return (user.nombre.toLowerCase().includes(searchFilter.toLowerCase()))
            }
            }).map(user => { return (
                <tr key={user.id}>
                    <td onClick={()=>selectUser(user)}>{user.nombre}</td>
                    <td onClick={()=>selectUser(user)}>{user.apellido}</td>
                    <td onClick={()=>selectUser(user)}>{user.dni}</td>
                    <td onClick={()=>selectUser(user)}>{user.domicilio}</td>
                    <td onClick={()=>selectUser(user)}>{user.email}</td>
                    <td onClick={()=>selectUser(user)}>{user.fechaIngreso}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn btn-outline-primary shadow" onClick={()=>{editRow(user)}}>Editar</button>
                            <button type="button" className="btn btn-outline-primary shadow" onClick={()=>{deleteUser(user.id)}}>Elminar</button>
                            <button onClick={()=>{chartsUser(user); openModalCharts()}} type="button" className="btn btn-outline-primary shadow">Grafico</button>
                        </div>
                    </td>
                </tr>
            )})
    ):(
                <tr>
                    <td>No users</td>
                </tr>        
    )
)