
import React, {Fragment} from 'react'
import NavBar from '../../../extras/navBar'
import TablaSucursales from './tablaSucursales'


const Sucursales = () => {

    return(
        <Fragment>
        <NavBar/>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CIUDAD</th>
                    <th scope="col">DIRECCION</th>
                    <th scope="col">TEL</th>
                    <th scope="col">CORREO</th>
                </tr>
            </thead>
            <tbody>
                <TablaSucursales/>
            </tbody>
        </table>
        </Fragment>
    )

}
export default Sucursales
