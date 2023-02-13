import { useState } from 'react'
import Header  from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setisValidPresupuesto]= useState(false)
  const [modal, setModal] = useState(false)


  const handleNuevoGasto = () =>{
    console.log("Bueeenas buenas")
    setModal(true)
  }

  return (
    <div className="App">
      <Header
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      ></Header>
      {
        isValidPresupuesto && (
          <div className='nuevo-gasto'>
          <img 
          src={IconoNuevoGasto} alt="icono nuevo gasto"
          onClick={handleNuevoGasto}
          />
          </div>
      )}

      {modal && <Modal setModal={setModal}/> }
    </div>
  )
}

export default App
