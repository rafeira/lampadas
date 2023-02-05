import './Lamp.css'

const Lamp = (props) => {
  return (
    <div className="Lamp">
      <img src={props.src} />
    </div>
  );
} 

export default Lamp;