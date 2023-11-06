import { Reveal } from 'components/utils/reveals/Reveal'
import styles from './introduction.module.scss'
import { Button } from 'components/_ui/button/Button'

export const Introduction = () => {
    return (
            <Reveal>
                <div className={styles.intro}>
                    <img className={styles.bgImage} src="https://images.unsplash.com/photo-1579518788238-fb03a5b6ca92?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    <div className={styles.astroContent}>
                        <h1>What is astronomy?</h1>
                        <h2>The science of the universe</h2>
                        <p>Astronomy is the scientific study of celestial objects, such as stars, planets, galaxies, and other cosmic entities, as well as the physical processes that govern their formation, evolution, and interactions. </p>
                        <p>It relies on systematic observations and precise analyses of these phenomena, utilizing advanced instruments like telescopes and radio telescopes. </p>
                        <Button>View More</Button>
                    </div>
                </div>
            </Reveal>

    )
}