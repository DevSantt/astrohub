import { Reveal } from 'components/utils/reveals/Reveal'
import { ResponsiveMenu } from '../mobileMenu/MobileMenu'
import styles from './navbar.module.scss'


export const NavBar = () => {
    return (



        <nav className={styles.navBar}>

            <div className={styles.logo}>
                <img src={'./img/astrohub-logo.png'} alt="" />
            </div>

            <Reveal>
                <ResponsiveMenu>
                    <li>
                        <a href="#introduction">
                            Introduction
                        </a>
                    </li>
                    <li>History</li>
                    <li>News</li>
                    <li>APOD</li>
                    <li>Solar System</li>
                </ResponsiveMenu>


            </Reveal>
        </nav>


    )

}