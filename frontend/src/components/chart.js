import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Chart({ user, closeModalCharts, modalCharts, ...props }) {
    const data = user.datosAcceso;
    return(

        <Modal size='lg' isOpen={modalCharts}>
            <ModalHeader>Gráfico Accesos {user.nombre} {user.apellido}</ModalHeader>
            <ModalBody>
                <AreaChart
                    width={750}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ModalBody>
            <ModalFooter>
                    <button type='button' className='btn btn-primary btn-lg' onClick={closeModalCharts}>Salir</button>
            </ModalFooter>
        </Modal>

    )
}

export default Chart;