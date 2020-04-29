import React, {Fragment} from 'react'
import NavBar from '../../../extras/navBar'
import MostrarClientes from './datosCliente'

const ClientesACargo = () => {

    return(
        <Fragment>
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
                </tr>
            </thead>
            <tbody>
                <MostrarClientes/>
            </tbody>
        </table>
        </Fragment>
    )

}
export default ClientesACargo