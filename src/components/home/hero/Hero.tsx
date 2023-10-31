import React from 'react'
import styles from './hero.module.scss'
import { motion } from 'framer-motion'
import { SolarSystemData } from './astroData/AstroData'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={styles.content} >

                <h1>Explore <br /> Astronomy</h1>
                <img src="./img/moon.png" alt="" />
            </motion.div>

            <SolarSystemData />
            {/* <img src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/the-moon-2021-08-26-16-29-10-utc-copy.jpg" alt="" /> */}
        </section>
    )
}