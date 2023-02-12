import { useState } from 'react'
import { Header } from './components/Header'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setisValidPresupuesto]= useState(false)

  return (
    <div className="App">
      <Header
        isValidPresupuesto={isValidPresupuesto}
        setisValidPresupuesto={setisValidPresupuesto}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
      ></Header>
    </div>
  )
}

export default App
