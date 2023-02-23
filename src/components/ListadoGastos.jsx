import {useEffect} from 'react'
import Gasto from './Gasto'

export default function ListadoGastos({gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados}) {


    return (
        
        <div className='listado-gastos contenedor'>


            {
                filtro ? (
                    <>
                     <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos En Esta Categoria'}</h2>
                        {gastosFiltrados.map(gasto =>(
                            <Gasto 
                            eliminarGasto={eliminarGasto}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            key={gasto.id}
                            />)
                        )}
                </>
                ):
                (
                    <>
                        <h2>{gastos.length ? "Gastos" : "No hay gastos aun"}</h2>
                        {gastos.map(gasto =>(
                            <Gasto 
                            eliminarGasto={eliminarGasto}
                            gasto={gasto}
                            setGastoEditar={setGastoEditar}
                            key={gasto.id}/>
                        ))}
                    </>
                )
            }

        </div>
    )
}
