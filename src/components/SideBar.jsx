import Menu from './layouts/Menu'
import './SideBar.css'
const SideBar = (props) => {
  return (
    <div className="SideBar">
      <Menu link={'/'} label={'Home'}></Menu>
      <div className="menu-divider"></div>
      <Menu link={'/lamps'} label={'Lamps'}></Menu>
    </div>
  );
}

export default SideBar;