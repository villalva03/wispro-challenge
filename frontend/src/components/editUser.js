import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const EditUser = ({ currentUser, modalEdit, closeModalEdit, updateUser, ...props}) => {

    const {register, handleSubmit, setValue, reset, formState: { errors }  } = useForm({
        defaultValues: currentUser,
    });

    setValue("nombre", currentUser.nombre);
    setValue("dni", currentUser.dni);
    setValue("apellido", currentUser.apellido);
    setValue("domicilio", currentUser.domicilio);
    setValue("fechaIngreso", currentUser.fechaIngreso);
    setValue("email", currentUser.email);

    const onSubmit = (data) => {
        data.id = currentUser.id
        updateUser(currentUser.id, data);
        closeModalEdit();
        reset();
    }

    return (
        <Modal isOpen={modalEdit}>
            <ModalHeader>Editar Usuario</ModalHeader>
            <ModalBody>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="nombre" {...register('nombre', { required: true })}
                    />
            
                    {errors.nombre && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type="text" name="apellido" {...register('apellido', { required: true })}
                    />
            
                    {errors.apellido && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>
                <div>
                    <label>Dni</label>
                    <input type="number" name="dni" {...register('dni', { required: true })}
                    />
            
                    {errors.dni && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>

                <div>
                    <label>Domicilio</label>
                    <input type="text" name="domicilio" {...register('domicilio', { required: true })}
                    />
            
                    {errors.domicilio && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>
                
                <div className='position-absolute start-50'>
                    <button className='btn btn-primary btn-lg me-4' type="submit">Editar</button>
                    <button type='button' className='btn btn-primary btn-lg' onClick={closeModalEdit}>Cancelar</button>
                </div>
            </form>
            
            </ModalBody>
        </Modal>
    );
}
 
export default EditUser;