import { Route, Routes } from 'react-router-dom'
import Home from '../../views/Home'
import Lamps from '../../views/Lamps'


const Content = (props) => {
  return (
    <main className='Content'>
      <Routes>
        <Route element={<Lamps />} path="/lamps" />
        <Route element={<Home />} path="/" exact />
      </Routes>
    </main>
  )
}

export default Content;