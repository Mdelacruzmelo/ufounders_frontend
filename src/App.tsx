import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Clients from './pages/Clients'

const App = () => useRoutes([
  { path: '/', element: <Clients /> }
])

const Wrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Wrapper;
