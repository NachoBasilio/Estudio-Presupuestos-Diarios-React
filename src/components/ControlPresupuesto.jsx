import React from 'react'

export default function ControlPresupuesto({presupuesto}) {
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
                    <span>Disponible:</span> {formatearDinero(0)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearDinero(0)}
                </p>
            </div>
        </div>
  )
}
