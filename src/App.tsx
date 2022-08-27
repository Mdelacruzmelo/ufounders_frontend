import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Auth from './components/Auth'
import Clients from './pages/Clients'
import Login from './pages/Login'

const App: React.FunctionComponent = () => useRoutes([
  { path: '/', element: <Auth><Clients /></Auth> },
  { path: '/login', element: <Login /> }
])

const Wrapper: React.FunctionComponent = () => {
  return (
    <Router>
      <App />
      <ToastContainer newestOnTop={true} />
    </Router>
  )
}

export default Wrapper
