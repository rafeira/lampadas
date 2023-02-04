import './App.css';
import SideBar from './components/SideBar'
import Content from './components/layouts/Content'
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <SideBar></SideBar>
        <Content></Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
