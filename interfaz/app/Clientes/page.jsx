import React from 'react'

export default async function Api() {
    // Esta es la parte donde se conectara con la API
    const respuesta = await fetch('http://127.0.0.1:8000/api/cliente/')
    const datos = await respuesta.json()
    
  // Se puede usar Axios o fetch para hacer la petición

  return (
    <>
        {datos.map(dato=>(
        <div key={dato.cedula}>
            <h1>{dato.nombre} </h1>
            <h1>{dato.apellido} </h1>
            <h1>{dato.telefono} </h1>
            <h1>{dato.correo} </h1>
                 
        </div>

    ))}
    </>

  )
}


