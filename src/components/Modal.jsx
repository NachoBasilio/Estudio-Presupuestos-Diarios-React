import React from 'react'
import CerrarBtn from '../img/cerrar.svg'

export default function Modal({setModal}) {
    const ocultarModal = ()=>{
        setModal(false)
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
        </div>
  )
}
