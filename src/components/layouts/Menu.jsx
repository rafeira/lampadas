import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div className="Menu">

      <Link to={props.link}>{props.label}</Link>
    </div>
  );
}

export default Menu;