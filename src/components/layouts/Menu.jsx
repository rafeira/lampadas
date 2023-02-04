import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <Link to={props.link}></Link>
  );
}

export default Menu;