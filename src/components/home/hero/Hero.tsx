import React from 'react'
import styles from './hero.module.scss'
import { motion } from 'framer-motion'

export const Hero = () => {
    return (
        <main  className={styles.content} title='main'>
            <motion.div 
            initial={{x: '100%', opacity: 0}}
            animate={{x: 0, opacity: 100}}
            transition={{duration: 1, delay: 0.5}}
            className={styles.container} >
                <h1>Explore <br/> Astronomy</h1>
                <img src="./img/moon.png" alt="" />
            </motion.div>
        </main>
    )
}