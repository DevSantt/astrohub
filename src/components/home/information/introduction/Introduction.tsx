import { Reveal } from 'components/utils/reveals/Reveal'
import styles from './introduction.module.scss'
import { Button } from 'components/_ui/button/Button'
import { useState } from 'react'
import { Modal } from 'components/_ui/modal/Modal'

export const Introduction = () => {
    const introduction = {
        title: "What Is Astronomy?",
        imgSrc: "https://images.unsplash.com/photo-1517976384346-3136801d605d?q=80&w=1412&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        modalContent: (
            <>
                <p>Astronomy is the scientific study of celestial objects such as stars, planets, galaxies, and the universe as a whole. It is a branch of science that seeks to understand the origins, evolution, and properties of these objects through observation and analysis.</p>

                <p>One of the fundamental principles of astronomy is the use of telescopes and other instruments to collect and analyze electromagnetic radiation from space. This data provides valuable insights into the nature of celestial bodies. For example, the Hubble Space Telescope has captured stunning images of distant galaxies, allowing astronomers to study their composition, motion, and history.</p>

                <p>The field of astronomy has made significant contributions to our understanding of the universe's vastness. The estimated number of galaxies in the observable universe is around 2 trillion, each containing billions or even trillions of stars. This vastness has led to the realization that the universe is approximately 13.8 billion years old, based on the observed cosmic microwave background radiation.</p>

                <p>Astronomers also study the life cycles of stars. For instance, our sun, a G-type main-sequence star, is about 4.6 billion years old and is expected to continue shining for several billion more years before evolving into a red giant and eventually collapsing into a white dwarf. This knowledge helps us understand the fate of stars throughout the universe.</p>

                <p>In summary, astronomy is a scientific discipline that explores the mysteries of the universe by observing and analyzing celestial objects and their properties. Through the use of advanced instruments and technology, astronomers continue to unveil the secrets of the cosmos, expanding our knowledge of the vast and complex universe we inhabit.</p>

            </>
        )
    }

    const [isOpen, setIsOpen] = useState(false)


return (
    <>
    <Reveal>
        <div className={styles.intro}>
            <img className={styles.bgImage} src="https://images.unsplash.com/photo-1579518788238-fb03a5b6ca92?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={styles.astroContent}>
                <h1>What is astronomy?</h1>
                <h2>The science of the universe</h2>
                <p>Astronomy is the scientific study of celestial objects, such as stars, planets, galaxies, and other cosmic entities, as well as the physical processes that govern their formation, evolution, and interactions. </p>
                <p>It relies on systematic observations and precise analyses of these phenomena, utilizing advanced instruments like telescopes and radio telescopes. </p>
                <Button onClick={() => setIsOpen(true)}>View More</Button>
            </div>
        </div>
    </Reveal>

    <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={introduction.title}
        imgSrc={introduction.imgSrc}
        modalContent={introduction.modalContent}
    />
    </>

)
}