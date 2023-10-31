import styles from './navbar.module.scss'

import { motion } from 'framer-motion'

export const NavBar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.navBar}>

            <div className={styles.logo}>
                <img src={'./img/astrohub-logo.png'} alt="" />
            </div>

            <ul className={styles.navList}>
                <li>Início</li>
                <li>Sobre</li>
                <li>APOD</li>
                <li>Galeria</li>
                <li>Loja</li>
            </ul>
        </motion.nav>

    )

}