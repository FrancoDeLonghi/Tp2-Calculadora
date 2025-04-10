import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Boton from './components/boton'


function App() {

  function manejarclickn(e) {
    const Boton = e.target
    console.log(Boton.textContent)
    let display=document.getElementById("display")
    display.value = display.value + Boton.textContent

  }

  const calcular =() => {
    let display=document.getElementById("display")
    display.value=eval(display.value)
  }

  const clear = () =>{
    let display=document.getElementById("display")
    display.value=""
  }

  return(
    <div className='contenedor'>
      <div className='pad'>
        
        <input className='display' type="text" id="display" />

        <Boton 
        texto="1" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="2" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="3" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="+" 
        operacion={manejarclickn}
        tipo="operacion"
        />

       <Boton 
        texto="4" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="5" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="6" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="-" 
        operacion={manejarclickn}
        tipo="operacion"
        />

        <Boton 
        texto="7" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="8" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="9" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="*" 
        operacion={manejarclickn}
        tipo="operacion"
        />

        <Boton 
        texto="=" 
        operacion={calcular}
        tipo="normal"
        />

        <Boton 
        texto="0" 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="." 
        operacion={manejarclickn}
        tipo="normal"
        />

        <Boton 
        texto="/" 
        operacion={manejarclickn}
        tipo="operacion"
        />

        <Boton 
        texto="Clear" 
        operacion={clear}
        tipo="clear"
        />

      </div>
    </div>
  )
  
}

export default App
