import { useState } from 'react'
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



  const handleNuevoGasto = () =>{
    setModal(true)

    setTimeout(()=>{
      setAnimarModal(true)
    }, 250)
  }

  const guardarGastos = (gasto) => {
    gasto.id = generarId(generarId)
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])
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
            <ListadoGastos gastos={gastos}></ListadoGastos>
          </main>
            <div className='nuevo-gasto'>
            <img 
            src={IconoNuevoGasto} alt="icono nuevo gasto"
            onClick={handleNuevoGasto}
            />
            </div>
          </>
      )}

      {modal && <Modal guardarGastos={guardarGastos} setModal={setModal} animarModal={animarModal} setAnimarModal={setAnimarModal}/> }
    </div>
  )
}

export default App
