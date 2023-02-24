import { useState, useEffect} from 'react'
import Header  from './components/Header'
import Filtro  from './components/Filtro'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import {generarId} from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem('gastos')) ?? []
  )
  const [isValidPresupuesto, setisValidPresupuesto]= useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState("")
  const [gastosFiltrados, setGastosFiltrados] = useState([])


  useEffect(()=>{
    if(filtro){
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  },[filtro])


  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
  
      setTimeout(()=>{
        setAnimarModal(true)
      }, 250)
    }
  }, [gastoEditar])

  useEffect(()=>{
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  },[presupuesto])

  useEffect(()=>{
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? 0)
  },[gastos])

  useEffect(()=>{
    const gastosLS = JSON.parse(localStorage.getItem('gastos')) ?? []
    if(gastosLS.length > 0){
      setGastos(gastosLS)
    }
  },[])

  useEffect(()=>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS > 0){
      setisValidPresupuesto(true)
    }
  },[])

  const handleNuevoGasto = () =>{
    setModal(true)
    setGastoEditar({})

    setTimeout(()=>{
      setAnimarModal(true)
    }, 250)
  }

  const eliminarGasto = (id)=>{
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  const guardarGastos = (gasto) => {
    
    if(gasto.id){
      const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)

    }else{
      gasto.fecha = Date.now()
      gasto.id = generarId(generarId)
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
  }, 400);

  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      ></Header>
      {

        isValidPresupuesto && (
          <>
          <main>
            <Filtro
            filtro={filtro}
            setFiltro={setFiltro}
            ></Filtro>
            <ListadoGastos 
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
              eliminarGasto={eliminarGasto}
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            ></ListadoGastos>
          </main>
            <div className='nuevo-gasto'>
            <img 
            src={IconoNuevoGasto} alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
            />
            </div>
          </>
      )}

      {modal && <Modal  setGastoEditar={setGastoEditar} gastoEditar={gastoEditar} guardarGastos={guardarGastos} setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal}/> }
    </div>
  )
}

export default App
