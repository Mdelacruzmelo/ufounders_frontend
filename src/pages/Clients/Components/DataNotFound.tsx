import { FaRegFolderOpen } from 'react-icons/fa'
import '../Clients.scss'

const DataNotFound: React.FunctionComponent = () => {
  return (

        <div className="centered">
            <h1>
                <FaRegFolderOpen />
            </h1>
            <div>
                Data not found
            </div>
        </div>

  )
}

export default DataNotFound
