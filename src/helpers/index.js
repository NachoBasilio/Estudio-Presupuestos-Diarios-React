export const generarId = () =>{
    const random = Math.random().toString(23).substring(2)+Date.now().toString(32)
    return random
}

export const formatearFecha = (fecha)=>{
    const fechaNueva = new Date(fecha)
    const opciones ={
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return fechaNueva.toLocaleDateString('es-ES', opciones)
}