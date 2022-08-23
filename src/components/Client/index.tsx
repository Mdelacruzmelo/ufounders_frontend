import React from 'react'
import { Client } from 'src/constants/types'
import FadeIn from 'react-fade-in'
import { Icons } from 'src/components'
import styles from './style.module.scss'
import { AiOutlineEllipsis } from 'react-icons/ai'

interface Props {
    client: Client
}

const ClientComponent = ({ client }: Props) => {

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
                    <div className={styles.actions}>
                        <AiOutlineEllipsis style={{ fontSize: '2rem' }} />
                    </div>
                </div>


            </div> </FadeIn>
    )
}

export default ClientComponent