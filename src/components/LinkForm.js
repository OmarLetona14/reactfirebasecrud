import React,{useState} from 'react'
import Swal from 'sweetalert2'


function LinkForm(props) {
    const userValues = {
        name:'',
        email:'',
        phone:'',
        address:''
    };
    const [values, setValues] = useState(userValues);

    const handleInputChange = e =>{
        const {name, value} = e.target;
        setValues({...values, [name]: value});
        
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        props.addOrEdit();
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'success'
        )
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row p-4 g-3">
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i className="fas fa-user"></i> Nombre de usuario</label>
                        <input onChange={handleInputChange} type="text" name="name" id="name" className="form-control rounded shadow-lg" placeholder="Nombre de usuario" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i className="fas fa-envelope"></i> Correo electronico</label>
                        <input onChange={handleInputChange} type="email" name="email" id="email" className="form-control rounded shadow-lg" placeholder="Correo electronico" />
                    </div>
                </div>
                <div className="row p-4 g-3">
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i className="fas fa-phone"></i> Telefono</label>
                        <input onChange={handleInputChange} type="number" name="phone" id="phone" className="form-control rounded shadow-lg" placeholder="Telefono" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-control rounded shadow-lg"><i className="fas fa-map-marker-alt"></i> Direccion</label>
                        <textarea onChange={handleInputChange} className="form-control rounded shadow-lg" name="address" id="address" cols="5" rows="5"
                            placeholder="Direccion"></textarea>
                    </div>
                </div>
                <div className="row p-4 g-3">
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary btn-block w-100 rounded-pill"> Save <i className="far fa-check-circle"></i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LinkForm
