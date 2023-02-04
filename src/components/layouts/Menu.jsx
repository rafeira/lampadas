import { Link } from "react-router-dom";
import './Menu.css'
const Menu = (props) => {
  return (
    <div className="Menu">

      <Link to={props.link}>{props.label}</Link>
    </div>
  );
}

export default Menu;