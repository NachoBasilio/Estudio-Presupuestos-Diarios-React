import {useState, useEffect} from 'react'

export default function Filtro({filtro, setFiltro}) {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label htmlFor="">Filtrar Gastos</label>
                <select
                value={filtro}
                onChange={e=>{
                    setFiltro(e.target.value)
                }}
                >
                    <option value="" selected>-- Sin filtro --</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Casa">Casa</option>
                    <option value="Ocio">Ocio</option>
                    <option value="Gastos">Gastos varios</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>
    </div>
  )
}
