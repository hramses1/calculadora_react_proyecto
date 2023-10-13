
import './App.css';
import {React,useState} from 'react';
import SoftDevCore from './img/logo.png'
import {Boton} from './component/Boton'
import {Pantalla} from './component/Pantalla'
import {BotonClear} from './component/BotonClear'
import {evaluate} from 'mathjs';
function App() {

  const [input, setInput]= useState('');

  const calcularResultado = () => {
    if (!isNaN(input)) {
      alert("INGRESE VALORES PARA REALIZAR CALCULOS")

  } else {
    setInput(Math.round(evaluate(input)))
  }
  };

  const agregarInput = val=> {
    setInput(input + val);
  };
  const clearBoton = ()=> (
    setInput('')
  );

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          src={SoftDevCore}
          className='logo'
          alt='Logo'
          />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>

        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>

        </div>
        <div className='fila'>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear clear={clearBoton}>Clear</BotonClear>
        </div>
      </div>

    </div>
  );
}

export default App;
