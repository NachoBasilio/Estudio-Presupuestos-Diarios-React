import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'


export default function Header({setGastos, presupuesto, setPresupuesto, isValidPresupuesto, setisValidPresupuesto, gastos}){
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto
          gastos={gastos}
          presupuesto={presupuesto}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setisValidPresupuesto={setisValidPresupuesto}
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
