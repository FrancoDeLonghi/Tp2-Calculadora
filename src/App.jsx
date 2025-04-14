import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

import Display from './components/Display';
import Teclado from './components/Teclado';
import Memoria from './components/Memoria';

function App() {
  const [valorDisplay, setValorDisplay] = useState("");
  const [memoria, setMemoria] = useState("");

  return (
    <div className="contenedor">
      <div className="pad">
        <Display valor={valorDisplay} />
        <Teclado 
          valorDisplay={valorDisplay} 
          setValorDisplay={setValorDisplay} 
          setMemoria={setMemoria}
        />
        <Memoria memoria={memoria} setValorDisplay={setValorDisplay} />
      </div>
    </div>
  );
}

export default App;
