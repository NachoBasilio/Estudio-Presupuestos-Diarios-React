import React from 'react'

export default function Mensaje({children, tipo}) {
  return (
    <div className={`alerta ${tipo}`}>
        {children}
    </div>
  )
}
