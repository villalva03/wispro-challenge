import React, { useState } from 'react';
import { Button } from 'reactstrap';
import UserEdit from './userEdit';


function UserList({ users, deleteUser, ...props }) {
    // console.log(users)
    const [modal, setModal] = useState(false);
    const openModal = () => {setModal(true)}
    const closeModal = () => {setModal(false)}
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>DNI</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {users.length > 0 ? (
                        users.map(user => (
                        <tr key={user.id}>
                            <td>{user.nombre}</td>
                            <td>{user.dni}</td>
                            <td>
                                <Button color="danger" onClick={openModal}> Editar </Button>
                                <button onClick={()=>{deleteUser(user.id)}}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                        ))
                    ):(
                        <tr>
                            <td>No users</td>
                        </tr>        
                    )}
                </tbody>
            </table>
            {modal ?
                <UserEdit 
                    closeModal={closeModal}
                    modal={modal}
                />
            :
            null
            }
            </div>
            );
        }    
    export default UserList;
        