import React, {Fragment} from 'react'
import NavBar from '../../../extras/navBar'
import TablaClientes from './tablaClientes'


const Clientes = () => {

    return(
        <Fragment>
        <NavBar/>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">USUARIO</th>
                    <th scope="col">ROL</th>
                    <th scope="col">NOMBRE</th>
                    <th scope="col">APELLIDO</th>
                    <th scope="col">DNI</th>
                    <th scope="col">FECHA NAC</th>
                    <th scope="col">TEL</th>
                    <th scope="col">MAIL</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <TablaClientes/>
            </tbody>
        </table>
        </Fragment>
    )

}
export default Clientes