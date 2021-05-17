import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from 'reactstrap';

function UserEdit({ user, modal, closeModal, ...props }) {

    // const [modal, setModal] = useState(false);
    // const toggle = () => setModal(!modal);

    // const [currentUser, setCurrentUser] = useState({
    //     id: null,
    //     nombre: '',
    //     dni: null
    //   });
    
    //   useEffect((user) => {
    //     setCurrentUser({
    //       id: user.id, 
    //       nombre: user.nombre,
    //       dni: user.dni
    //     })
    //   },[])            <Button color="danger" onClick={toggle}> Editar </Button>


    //   console.log(currentUser)
    
    return (
        <>
            <Modal isOpen={modal}>
                <ModalHeader>Editar Usuario</ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label for="userNombre">Nombre</Label>
                        <Input type="text" id="userNombre" value=''/>
                    </FormGroup> 
                    <FormGroup>
                        <Label for="pass">Contrasena</Label>
                        <Input type="text" id="pass" />
                    </FormGroup> 
                </ModalBody>
                <ModalFooter>
                <Button color="primary" >Guardar</Button>{' '}
                <Button color="secondary" onClick={closeModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </>
    );
    }    
export default UserEdit;