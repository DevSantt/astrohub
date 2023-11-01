import React from 'react'
import styles from './hero.module.scss'
import { Info } from './info/info'
import { RevealRight } from 'components/utils/reveals/RevealRight'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <RevealRight>
                <div className={styles.content} >
                    <h1>Explore <br /> Astronomy</h1>
                    <img src="./img/moon.png" alt="crescent moon" />
                </div>
            </RevealRight>
            <Info />

            {/* <img src="https://kitpro.site/astron/wp-content/uploads/sites/146/2023/02/the-moon-2021-08-26-16-29-10-utc-copy.jpg" alt="" /> */}
        </section>
    )
}