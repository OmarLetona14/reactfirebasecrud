import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function LinkForm() {
    return (
        <div>
            <form>
                <div className="row p-4 g-3">
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i className="fas fa-user"></i> Nombre de usuario</label>
                        <input type="text" name="name" id="name" className="form-control rounded shadow-lg" placeholder="Nombre de usuario" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i class="fas fa-envelope"></i> Correo electronico</label>
                        <input type="email" name="email" id="email" className="form-control rounded shadow-lg" placeholder="Correo electronico" />
                    </div>
                </div>
                <div className="row p-4 g-3">
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i className="fas fa-phone"></i> Telefono</label>
                        <input type="number" name="phonenumber" id="phonenumber" className="form-control rounded shadow-lg" placeholder="Telefono" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i className="fas fa-map-marker-alt"></i> Direccion</label>
                        <textarea className="form-control rounded shadow-lg" name="direccion" id="direccion" cols="5" rows="5"
                            placeholder="Direccion"></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LinkForm
