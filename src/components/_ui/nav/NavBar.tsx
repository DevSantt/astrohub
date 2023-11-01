import { RevealRight } from 'components/utils/reveals/RevealRight'
import { ResponsiveMenu } from '../mobileMenu/MobileMenu'
import styles from './navbar.module.scss'


export const NavBar = () => {
    return (



        <nav className={styles.navBar}>

            <div className={styles.logo}>
                <img src={'./img/astrohub-logo.png'} alt="" />
            </div>

            <RevealRight>
                <ResponsiveMenu>
                    <li>Início</li>
                    <li>Sobre</li>
                    <li>APOD</li>
                    <li>Galeria</li>
                    <li>Loja</li>
                </ResponsiveMenu>
            </RevealRight>
        </nav>


    )

}