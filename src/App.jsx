import { useState, useEffect} from 'react'
import Header  from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import {generarId} from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setisValidPresupuesto]= useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(()=>{
    if(Object.keys(gastoEditar).length > 0){
      setModal(true)
  
      setTimeout(()=>{
        setAnimarModal(true)
      }, 250)
    }
  }, [gastoEditar])


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
            <ListadoGastos 
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

      {modal && <Modal gastoEditar={gastoEditar} guardarGastos={guardarGastos} setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal}/> }
    </div>
  )
}

export default App
