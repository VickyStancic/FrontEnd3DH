import React from 'react'
import Item from './Item'
import Data from './data.json';

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({contador}) {
  return (
    <div className='container'>
      {
        Data.map( item => 
          <Item 
            key={item.id}
            nombre = {item.producto.nombre}
            descripcion = {item.producto.descripcion}
            imagen = {item.producto.imagen}
            stock = {item.stock}
            contador = {contador}
          />
        )   
      }
    </div>
  )
}