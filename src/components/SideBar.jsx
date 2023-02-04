import Menu from './layouts/Menu'
import './SideBar.css'
const SideBar = (props) => {
  return (
    <div className="SideBar">
      <Menu link={'/lamps'} label={'Lamps'}></Menu>
      <Menu link={'/'} label={'Home'}></Menu>
    </div>
  );
}

export default SideBar;