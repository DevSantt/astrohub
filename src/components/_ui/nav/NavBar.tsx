import { ResponsiveMenu } from '../mobileMenu/MobileMenu'
import styles from './navbar.module.scss'

import { motion } from 'framer-motion'

export const NavBar = () => {
    return (

        <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}>

        <nav className={styles.navBar}>

            <div className={styles.logo}>
                <img src={'./img/astrohub-logo.png'} alt="" />
            </div>

            <ResponsiveMenu>
                <li>Início</li>
                <li>Sobre</li>
                <li>APOD</li>
                <li>Galeria</li>
                <li>Loja</li>
            </ResponsiveMenu>
        </nav>
        </motion.header>

    )

}