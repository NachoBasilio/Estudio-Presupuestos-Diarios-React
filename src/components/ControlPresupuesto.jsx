import {useEffect, useState} from 'react'

export default function ControlPresupuesto({presupuesto, gastos}) {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, actual)=> actual.cantidad + total,0)
        const totalDisponible = presupuesto - totalGastado

        setDisponible(totalDisponible)
        setGastado(totalGastado)
    }, [gastos])

    const formatearDinero = (numero)=>{
        return numero.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }


    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Grafica aqui</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupesto:</span>  {formatearDinero(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formatearDinero(disponible)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearDinero(gastado)}
                </p>
            </div>
        </div>
  )
}
