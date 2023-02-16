import {useEffect} from 'react'
import Gasto from './Gasto'

export default function ListadoGastos({gastos}) {


    return (
        
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? "Gastos" : "No hay gastos aun"}</h2>

            {gastos.map(gasto =>(
                <Gasto 
                gasto={gasto}
                key={gasto.id}/>
            ))}
        </div>
    )
}
