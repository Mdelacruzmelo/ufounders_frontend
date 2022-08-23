import { useState } from 'react'
import Icons from '../Icons/Icons'
import styles from './style.module.scss'
import { FaListUl } from 'react-icons/fa'
import logo from 'src/images/logo.png'

const Sidebar = () => {

    const [openedSidebar, setOpenedSidebar] = useState(false)
    const [activePage, setActivePage] = useState(1)
    console.log('~ setOpenedSidebar', setOpenedSidebar)

    return (
        <aside className={`${styles.sidebar} ${openedSidebar ? styles.opened : ''}`}>

            <div>
                <div className={styles.menu}>
                    <FaListUl />
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
            </div>

            <nav>
                <ul>
                    <li className={`${activePage === 1 ? styles.active : ''}`}>
                        <Icons type={1} />
                        <div>Clients</div>
                    </li>
                    <li className={`${activePage === 2 ? styles.active : ''}`}>
                        <Icons type={2} />
                        <div>Learning</div>
                    </li>
                    <li className={`${activePage === 3 ? styles.active : ''}`}>
                        <Icons type={3} />
                        <div>VIP</div>
                    </li>
                    <li className={`${activePage === 4 ? styles.active : ''}`}>
                        <Icons type={4} />
                        <div>Graph</div>
                    </li>
                    <li className={`${activePage === 5 ? styles.active : ''}`}>
                        <Icons type={5} />
                        <div>Vouchers</div>
                    </li>
                    <li className={`${activePage === 6 ? styles.active : ''}`}>
                        <Icons type={6} />
                        <div>FAQ</div>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar