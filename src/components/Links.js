import React from 'react';
import LinkForm from './LinkForm'

function Links() {

    const addUser = () => {
        console.log('Added user');
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row text-center">
                    <h1><i className="fas fa-plus-circle"></i> Agregar usuario</h1>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <LinkForm addOrEdit={addUser}></LinkForm>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Links
