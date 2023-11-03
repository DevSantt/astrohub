import { Reveal } from 'components/utils/reveals/Reveal'
import styles from './info.module.scss'

import { PiGlobeStandThin, PiCompassToolThin, PiRocketLaunchThin, PiPlanetThin } from 'react-icons/pi'



export const Info = () => {
    const iconSize = 100

    return (

        <Reveal>

        <section className={styles.container}>
            <h2>Explore o Universo</h2>

            <div className={styles.infoContainer}>

                <div className={styles.info}>
                    <PiGlobeStandThin size={iconSize}/>
                    <h3>Publique</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

                <div className={styles.info}>
                    <PiCompassToolThin size={iconSize} />
                    <h3>Cresça</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

                <div className={styles.info}>
                    <PiRocketLaunchThin size={iconSize} />
                    <h3>Aprenda</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

                <div className={styles.info}>
                    <PiPlanetThin size={iconSize} />
                    <h3>Conecte-se</h3>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing.</span>
                </div>

            </div>
        </section>
        </Reveal>
    )
}