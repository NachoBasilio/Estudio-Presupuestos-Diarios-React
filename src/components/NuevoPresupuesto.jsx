import React, { useState } from 'react'
import Mensaje from './Mensaje'

export default function NuevoPresupuesto({presupuesto, setPresupuesto, setisValidPresupuesto}) {
  const [mensaje, setMensaje] = useState('')

  const handlePresupuesto = (e)=>{
    e.preventDefault()
    if((!presupuesto) || Number(presupuesto) < 0){
      setMensaje('No es un presupuesto valido')
      setisValidPresupuesto(false)
      return
    }
    setMensaje('')
    setisValidPresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className="formulario"action="">
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input 
                    type="number" 
                    className='nuevo-presupuesto'
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={e=> setPresupuesto(Number(e.target.value))}
                />
                <input type="submit" value="Añadir" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </div>
        </form>
    </div>
  )
}
