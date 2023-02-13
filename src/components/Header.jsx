import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


export const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setisValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto
          presupuesto={presupuesto}
          ></ControlPresupuesto>
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
