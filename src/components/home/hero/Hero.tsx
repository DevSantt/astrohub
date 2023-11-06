import React from 'react'
import styles from './hero.module.scss'
import { Reveal } from 'components/utils/reveals/Reveal'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <Reveal>
                <div className={styles.content} >
                    <h1>Explore <br /> Astronomy</h1>
                    <img src="./img/moon.png" alt="crescent moon" />
                </div>
            </Reveal>

             
        </section>
    )
}