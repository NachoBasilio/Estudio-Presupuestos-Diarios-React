import React from 'react'

export default function NuevoPresupuesto() {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className="formulario"action="">
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                    type="text" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                />
                <input type="submit" value="Añadir" />
            </div>
        </form>
    </div>
  )
}
