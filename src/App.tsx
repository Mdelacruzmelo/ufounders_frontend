import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Clients from './pages/Clients'
import Login from './pages/Login'

const App = () => useRoutes([
  { path: '/', element: <Clients /> },
  { path: '/login', element: <Login /> }
])

const Wrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Wrapper;
