import { useAppDispatch } from 'src/hooks/redux'
import FadeIn from 'react-fade-in'
import { AiOutlineEllipsis } from 'react-icons/ai'
import { Icons } from 'src/components'
import styles from './style.module.scss'
import { Client } from 'src/constants/types'
import { clientsApi } from 'src/pages/Clients/api'
import { setClientDetails } from 'src/pages/Clients/slice';
import { toogleVisible } from 'src/components/Modal/slice';

interface Props { client: Client }

const ClientComponent = ({ client }: Props) => {

    const dispatch = useAppDispatch()
    const requestDetails = async (id: string) => {
        const { data } = await dispatch(clientsApi.endpoints.getClientDetails.initiate(id))
        dispatch(setClientDetails(data))
        dispatch(toogleVisible(true))
    }

    return (
        <FadeIn>

            <div className={styles.client}>

                <div className={styles.left}>

                    {/* Ticket image */}
                    <div className={`${styles.imageContainer} ${client.present ? styles.present : ''}`}>
                        <Icons type={7} />
                    </div>

                    {/* User name */}
                    <div className={styles.userName}>
                        <div>
                            {`${client.firstName} ${client.lastName}`}
                        </div>
                        <div>
                            {client.present ? "Ha entrado" : "No ha entrado"}
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={styles.verticalDivisor} />

                    {/* Ticket ID */}
                    <div className={styles.ticketId}>
                        <div>ID</div>
                        <div>{client._id}</div>
                    </div>

                    {/* Divisor */}
                    <div className={styles.verticalDivisor} />

                    {/* Ticket Number */}
                    <div className={styles.ticketNumber}>
                        <div>Nº de ticket</div>
                        <div>{client.ticket}</div>
                    </div>
                </div>


                <div className={styles.right}>
                    <div
                        className={styles.actions}
                        onClick={() => { requestDetails(client._id) }}>
                        <AiOutlineEllipsis style={{ fontSize: '2rem' }} />
                    </div>
                </div>


            </div> </FadeIn>
    )
}

export default ClientComponent