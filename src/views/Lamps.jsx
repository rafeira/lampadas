import Lamp from '../components/lamps/Lamp';
import './Lamps.css'
import bulbOff from '../images/light_bulb_off.jpg'
const Lamps = (props) => {
  return (
    <div className='Lamps'>
      <div className="lamps-container">
        <div className='add-button'>+</div>

        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>
        <Lamp src={bulbOff}/>

      </div>
    </div>
  );
}

export default Lamps;