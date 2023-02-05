import { useState } from 'react';
import Lamp from '../components/lamps/Lamp';
import './Lamps.css'
const Lamps = (props) => {
  const [lamps, setLamps] = useState([])

  const onAddButtonPressed = () => setLamps(() => [...lamps, <Lamp/>])

  return (
    <div className='Lamps'>
      <div className="lamps-container">
        <div className='add-button' onClick={onAddButtonPressed}>+</div>
        {lamps}
      </div>
    </div>
  );

}

export default Lamps;