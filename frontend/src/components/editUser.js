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
            
            <form className="row col-12" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-6 mb-3">
                    <label>Nombre</label>
                    <input className="form-control" type="text" name="nombre" {...register('nombre', { required: true })}
                    />
            
                    {errors.nombre && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>
                <div className="col-6 mb-3">
                    <label>Apellido</label>
                    <input className="form-control" type="text" name="apellido" {...register('apellido', { required: true })}
                    />
            
                    {errors.apellido && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>
                <div className="col-6 mb-3">
                    <label>Dni</label>
                    <input className="form-control" type="number" name="dni" {...register('dni', { required: true })}
                    />
            
                    {errors.dni && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>

                <div className="col-6 mb-3">
                    <label>Domicilio</label>
                    <input className="form-control" type="text" name="domicilio" {...register('domicilio', { required: true })}
                    />
            
                    {errors.domicilio && (<span className='text-danger'>Este campo es requerido</span>)}
                </div>
                
                <div>
                    <button type='button' className='btn btn-primary btn-lg mt-4 float-end' onClick={closeModalEdit}>Cancelar</button>
                    <button className='btn btn-primary btn-lg mt-4 me-3 float-end' type="submit">Editar</button>
                </div>
            </form>
            
            </ModalBody>
        </Modal>
    );
}
 
export default EditUser;