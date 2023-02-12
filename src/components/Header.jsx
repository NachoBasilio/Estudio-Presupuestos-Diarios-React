import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

export const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setisValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <p>Control Presupuesto</p>
        ):(
          <NuevoPresupuesto
          setisValidPresupuesto={setisValidPresupuesto}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          ></NuevoPresupuesto>
        )}
    </header>
  )
}
