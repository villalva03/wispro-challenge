import React, { useState } from 'react'; 
import './components/login.css';
import 'bootstrap/dist/css/bootstrap.css';
import dataUsers from './userData.json'; 
import ListUser from './components/listUser';
import EditUser from './components/editUser';
import Mapa from './components/map';
import Chart from './components/chart';
import Login from './components/login';
import NavBar from './components/navBar';
import GraphicCpu from './components/graphicCpu';
import GraphicMemory from './components/graphicMemory';

function App() {

  const admin = {
    id: '1053csfa342e90a1b85ab7f5', 
    username: 'diegol@wispro.com',
    password: 'admin',
    nombre: 'Diego',
    apellido: 'Maradona', 
    email: 'diegol@wispro.com',
    dni: 36245635
  };

  const [users, setUsers] = useState(dataUsers)

  //Login
  const [isSesion, setIsSesion] = useState(false);
  
  const iniciarSesion = () => {
    setIsSesion(true);
  }

  const cerrarSesion = () => {
    setIsSesion(false);
  }
  
  //Modal Edit
  const [modalEdit, setModalEdit] = useState(false);
  const closeModalEdit = () => {setModalEdit(false)};
  const openModalEdit = () => {setModalEdit(true)};

  //Modal Charts
  const [modalCharts, setModalCharts] = useState(false);
  const closeModalCharts = () => {setModalCharts(false)};
  const openModalCharts = () => {setModalCharts(true)};
  
  //Delete User
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    setCaseType('Global');
  }

  //Edit User
  const [currentUser, setCurrentUser] = useState({
    id: null, 
    nombre: '',
    apellido: '', 
    email: '',
    dni: null, 
    domicilio: '', 
    lat: '', 
    lng: '',
    fechaIngreso: '',
    datosAcceso: []
  })

  const editRow = (user) => {
    openModalEdit();
    setCurrentUser({
      id: user.id, 
      nombre: user.nombre,
      apellido: user.apellido,
      email: user.email, 
      dni: user.dni, 
      domicilio: user.domicilio, 
      lat: user.lat, 
      lng: user.lng,
      fechaIngreso: user.fechaIngreso,
      datosAcceso: user.datosAcceso
    })
  }

  const updateUser = (id, updatedUser) => {
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    setCaseType('Global');
  }


  //map
  const [mapCenter, setMapCenter] = useState({ lat: -38.416097, lng: -63.616672 });
  const [mapZoom, setMapZoom] = useState(4);
  const [caseType, setCaseType] = useState('Global');
  const [userData, setUserData] = useState({});


  const selectUser = (user) => {
    setUserData(user);
    setMapZoom(10);
    setCaseType('Unico');
  }
  
  const chartsUser = (user) => {
    setUserData(user);
  }

  //Sort by Alphabetical
  const sortByAlpha = (typeAttribute) => {
    const newAlpha = [];
    Object.assign(newAlpha, users);

    switch(typeAttribute){
      case 'nombre':
        return(
          setUsers(newAlpha.sort((a, b) => (a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0)))
          )
      case 'apellido':
        return(
          setUsers(newAlpha.sort((a, b) => (a.apellido > b.apellido ? 1 : a.apellido < b.apellido ? -1 : 0)))
        )
      case 'email':
        return(
          setUsers(newAlpha.sort((a, b) => (a.email > b.email ? 1 : a.email < b.email ? -1 : 0)))
          )
      default:
        return(
          setUsers(newAlpha.sort((a, b) => (a.domicilio > b.domicilio ? 1 : a.domicilio < b.domicilio ? -1 : 0)))
          ) 
    }
  }

  //Sort by Number
  const sortByNumber = (typeAttribute) => {
    const newNumber = [];
    Object.assign(newNumber, users);

    switch(typeAttribute){
      case 'fechaAlta':
        return(
          setUsers(newNumber.sort((a, b) => (a.fechaIngreso > b.fechaIngreso ? -1 : a.fechaIngreso < b.fechaIngreso ? 1 : 0)))
          )
      default:
        return(
          setUsers(newNumber.sort((a, b) => (a.dni > b.dni ? -1 : a.dni < b.dni ? 1 : 0)))
          ) 
    }
  }

  const [graphic, setGraphic] = useState('cpu');

  return (
    <>
      {!isSesion ? 
        <Login iniciarSesion={iniciarSesion} admin={admin} />
      :
        <div>
          <NavBar 
            cerrarSesion={cerrarSesion}
            adminUser={admin} 
          />
            <div className="container">
              <header className="flex-r">
                <ListUser 
                  users={users} 
                  deleteUser={deleteUser} 
                  editRow={editRow} 
                  selectUser={selectUser}
                  chartsUser={chartsUser}
                  sortByAlpha={sortByAlpha}
                  sortByNumber={sortByNumber}
                  openModalCharts={openModalCharts}
                />
                {modalEdit ? 
                  <EditUser 
                    currentUser={currentUser} 
                    updateUser={updateUser} 
                    closeModalEdit={closeModalEdit}
                    modalEdit={modalEdit}
                  />
                :
                  null
                }
                
                {caseType !== 'Global' ?
                  <button type="button" className="btn btn-outline-primary shadow" onClick={()=>setCaseType('Global')}>
                    Ver todos los usuarios en el mapa
                  </button>
                :
                  null
                }
                
                <Mapa
                  users={users}
                  center={mapCenter}
                  zoom={mapZoom}
                  caseType={caseType}
                  user={userData}
                />
                  
                <Chart 
                  user={userData}
                  closeModalCharts={closeModalCharts}
                  modalCharts={modalCharts}
                />
                <div className="col-3 btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary shadow" onClick={()=>setGraphic('cpu')}>
                      Gráfico Cpu
                    </button>
                    <button type="button" className="btn btn-outline-primary shadow" onClick={()=>setGraphic('memoria')}>
                      Gráfico Memoria
                    </button>
                </div>

                { graphic === 'cpu' ? 
                  <GraphicCpu />
                : graphic === 'memoria' ?
                  <GraphicMemory />
                :
                  null      
                }
                
              </header>
            </div>  
        </div>    
      }
          
    </>
  );
}

export default App;