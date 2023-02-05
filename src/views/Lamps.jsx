import Lamp from '../components/lamps/Lamp';
import './Lamps.css'
import bulbOff from '../images/light_bulb_off.jpg'
import { useEffect, useState } from 'react';
const Lamps = (props) => {
  const [lamps, setLamps] = useState([])

  function onAddButtonPressed() {
    console.log('entrou')
    const oldarray = lamps; 
    setLamps(() => [...oldarray, bulbOff])
  }
  return (
    <div className='Lamps'>
      <div className="lamps-container">
        <div className='add-button' onClick={onAddButtonPressed}>+</div>
        {lamps.map((e) => <Lamp src={e}></Lamp>)}
      </div>
    </div>
  );

}

export default Lamps;