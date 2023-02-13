import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

export default function Modal({setModal, animarModal, setAnimarModal}) {
    const ocultarModal = ()=>{
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 400);
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img 
                src={CerrarBtn} 
                alt="Boton para cerrar" 
                onClick={ocultarModal}
                />
            </div>
            <form action="" className={`formulario ${animarModal ? 'animar' : 'cerrar' }`}>
                <legend>Nuevo Gasto</legend>
            </form>
        </div>
  )
}
