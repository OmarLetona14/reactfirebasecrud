import React, { useEffect, useState } from 'react';
import LinkForm from './LinkForm';
import { database } from '../firebase';
import Swal from 'sweetalert2';

function Links() {

    const [users, setUsers] = useState([]);
    const addOrEditUser = async (userObject) => {
        await database.collection('users').doc().set(userObject).then((results) => {
            Swal.fire('Usuario agregado', 'El usuario se registro correctamente.', 'success');
        }).catch((errors) => {
            Swal.fire('Error', 'Ocurrio un error al agregar el usuario', 'error');
        });
    }

    const getUsers = async () => {
        database.collection("users").onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setUsers(docs);
        });
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <h1><i className="fas fa-plus-circle"></i> Agregar usuario</h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <LinkForm addOrEdit={addOrEditUser}></LinkForm>
                    </div>
                </div>
                <div className="container p-4">
                    <div className="row p-2 text-center">
                        <h1>Usuarios disponibles</h1>
                        <hr />
                    </div>
                    <div className="row p-4">
                        <div className="col-md-12">
                            <table className="table table-striped shadow-lg">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th><i class="far fa-user"></i> Nombre</th>
                                        <th><i class="far fa-envelope"></i>  Email</th>
                                        <th><i class="fas fa-phone-square"></i> Telefono</th>
                                        <th><i class="fas fa-map-marker-alt"></i> Direccion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.address}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links
