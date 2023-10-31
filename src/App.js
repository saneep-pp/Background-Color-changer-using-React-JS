
import { useState } from 'react';
import './App.css';

function App() {


const [color,setColor] = useState('#fff');

const changeBgColor = (color) => {
  setColor(color);
};
  return (
    <div className="App">
      <header className="App-header">
       <h1 style={{color:color}}>Color Changer</h1>
      </header>
      <h2 className='subHead'>Select the Color</h2>
      <hr/>
      <div className='main' style={{backgroundColor:color}}>
        <div className='colors'>
        <div className='color red'onClick={()=>changeBgColor('red')}>Red</div>
        <div className='color green' onClick={()=>changeBgColor('green')}>Green</div>
        <div className='color blue' onClick={()=>changeBgColor('blue')}>Blue</div>
        <div className='color violet' onClick={()=>changeBgColor('violet')}>Violet</div>
        <div className='color grey' onClick={()=>changeBgColor('grey')}>Grey</div>
        <div className='color yellow' onClick={()=>changeBgColor('yellow')}>Yellow</div>
        <div className='color orange' onClick={()=>changeBgColor('orange')}>Orange</div>
        <div className='color purple' onClick={()=>changeBgColor('purple')}>Purple</div>
        <div className='color magenta' onClick={()=>changeBgColor('magenta')}>Magenta</div>
        <div className='color palegreen' onClick={()=>changeBgColor('palegreen')}>Pale Green</div>
        <div className='color maroon' onClick={()=>changeBgColor('maroon')}>Maroon</div>
        <div className='color skyblue' onClick={()=>changeBgColor('skyblue')}>Skyblue</div>
        <div className='color brown' onClick={()=>changeBgColor('brown')}>Brown</div>
        <div className='color silver' onClick={()=>changeBgColor('silver')}>Silver</div>
        <div className='color gold' onClick={()=>changeBgColor('gold')}>Gold</div>
        <div className='color aqua' onClick={()=>changeBgColor('aqua')}>Aqua</div>
        <div className='color pink' onClick={()=>changeBgColor('pink')}>Pink</div>
        <div className='color yellowGreen' onClick={()=>changeBgColor('yellowGreen')}>Yellow Green</div>
        </div>
      </div>
    </div>
  );
}

export default App;
