import BarLoader from 'react-spinners/BarLoader'
import '../Clients.scss'

const Loading: React.FunctionComponent = () => {
  return (

        <div className="centered">
            <BarLoader color="#000000" loading={true} width={200} />
        </div>

  )
}

export default Loading
