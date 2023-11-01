import { RevealRight } from 'components/utils/reveals/RevealRight'
import styles from './info.module.scss'

import { PiGlobeStandThin, PiCompassToolThin, PiRocketLaunchThin, PiPlanetThin } from 'react-icons/pi'


export const Info = () => {
    return (

        <RevealRight>

        <section className={styles.container}>
            <h2>Explore o Universo</h2>

            <div className={styles.infoContainer}>

                <div className={styles.info}>
                    <PiGlobeStandThin />
                    <h3>Publique</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

                <div className={styles.info}>
                    <PiCompassToolThin />
                    <h3>Cresça</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

                <div className={styles.info}>
                    <PiRocketLaunchThin />
                    <h3>Aprenda</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

                <div className={styles.info}>
                    <PiPlanetThin />
                    <h3>Conecte-se</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

            </div>
        </section>
        </RevealRight>
    )
}