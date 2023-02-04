import { BrowserRouter, Route } from 'react-router-dom'
import Home from '../../views/Home'
import Lamps from '../../views/Lamps'


const Content = (props) => {
  return (
    <main className='Content'>
      <BrowserRouter>
        <Route component = { Lamps }  path="/lamps" />
        <Route component = { Home }  path="/" exact />
      </BrowserRouter>
    </main>
  )
}

export default Content;