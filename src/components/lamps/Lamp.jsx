import './Lamp.css'

import bulbOff from '../../images/light_bulb_off.jpg'
import bulbOn from '../../images/light_bulb_on.jpg'
import brokenBulb from '../../images/broken_light_bulb.jpg'
import { useState } from 'react'

const Lamp = () => {
  const [src, setSrc] = useState(bulbOff)

  const brokeBulb = () => {
    setSrc(brokenBulb)
  }
  const turnOn = () => {
    if (src != brokenBulb)
      setSrc(bulbOn)
  }
  const turnOff = () => {
    if (src != brokenBulb)
      setSrc(bulbOff)
  }
  return (
    <div className="Lamp">
      <img src={src} onClick={brokeBulb} onMouseOut={turnOff} onMouseOver={turnOn} />
    </div>
  );
}

export default Lamp;