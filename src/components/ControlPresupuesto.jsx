import {useEffect, useState} from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function ControlPresupuesto({presupuesto, gastos}) {
    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(()=>{
        const totalGastado = gastos.reduce((total, actual)=> actual.cantidad + total,0)
        const totalDisponible = presupuesto - totalGastado

        const porcentajeGastado = (((presupuesto - totalDisponible)/presupuesto)*100).toFixed(2)
        setPorcentaje(porcentajeGastado)

        setTimeout(() => {
            setDisponible(totalDisponible) 
        }, 1000);
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
                <CircularProgressbar
                style={buildStyles({
                    pathColor: '#3B82F6',
                    trailColor: '#F5F5F5',
                    textColor: '#3B82F6'
                })}
                value={porcentaje}
                text={`${porcentaje} Gastado`}
                ></CircularProgressbar>
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
