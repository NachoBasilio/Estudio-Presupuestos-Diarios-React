import React from 'react'

export default function Gasto({gasto}) {
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>

            <div className='descripcion-gasto'>
                <p className='categoria'>
                    {gasto.categoria}
                </p>
            </div>
        </div>
    </div>
  )
}
