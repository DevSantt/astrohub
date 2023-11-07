import { Reveal } from 'components/utils/reveals/Reveal'
import styles from './history.module.scss'
import { Button } from 'components/_ui/button/Button'
import { useState } from 'react'
import { Modal } from 'components/_ui/modal/Modal'



export const History = () => {
    const [isOpen, setIsOpen] = useState(false)

    const history = {
        title: "History of Astronomy",
        imgSrc: "https://www.astronomy.cafe/media/posts/7/responsive/History-low-xxl.jpg",
        modalContent: (
            <>
                <p>From the beginning of cosmos, humankind has been drawn to the mysterious allure of the night sky. The history of astronomy is a tale of relentless curiosity and unwavering determination to unlock the secrets of the universe.</p>

                <p>Ancient civilizations, such as the Babylonians and Egyptians, were among the first to observe the movements of celestial bodies. They meticulously recorded the positions of stars and planets, laying the foundation for early astronomical knowledge. In Greece, great thinkers like Thales and Pythagoras pondered the nature of the cosmos, setting the stage for the profound contributions of Aristotle and Ptolemy.</p>

                <p>The Renaissance era marked a significant turning point in the history of astronomy, as Nicolaus Copernicus proposed a heliocentric model, shifting our understanding of the solar system. This groundbreaking idea was followed by the meticulous observations of Johannes Kepler, who formulated his laws of planetary motion.</p>

                <p>The 17th century witnessed the development of the first telescopes, a crucial invention that allowed astronomers like Galileo Galilei to make revolutionary discoveries. Galileo observed the phases of Venus and the moons of Jupiter, providing compelling evidence for the heliocentric model.</p>

                <p>Isaac Newton&apos;s laws of motion and universal gravitation in the 17th century offered a unifying explanation for celestial mechanics, forever altering our comprehension of the cosmos. The subsequent centuries brought about the discovery of distant galaxies, the classification of stars, and the understanding of light as both a particle and a wave.</p>

                <p>The 20th century saw the birth of modern astronomy, as Edwin Hubble&apos;s observations revealed the expansion of the universe. The development of powerful telescopes and the advent of space exploration allowed astronomers to probe deeper into the cosmos, unveiling the secrets of black holes, neutron stars, and the cosmic microwave background radiation.</p>

                <p>Today, astronomy is a thriving field, with researchers studying exoplanets, dark matter, and dark energy, as well as unraveling the mysteries of the early universe through instruments like the Hubble Space Telescope and the Large Hadron Collider.</p>

                <p>The history of astronomy is a testament to human curiosity, resilience, and the indomitable spirit of exploration. As we continue to peer into the vast expanse of the universe, one thing remains clear: our quest to understand the cosmos will forever be an enduring journey of discovery and wonder.</p>
            </>
        )
    }

    return (
        <>
            <Reveal>
            <div className={styles.history} id='history'>
                <div className={styles.historyContent}>
                    <h1>History</h1>
                    <h2>One of the oldest sciences</h2>
                    <p>From the beginning of cosmos, humanity has been captivated by the vast and mysterious expanse of the night sky. The history of astronomy is a fascinating journey that stretches back thousands of years, as our ancestors gazed up at the celestial wonders and sought to unravel the secrets of the universe.</p>

                    <p>The history of astronomy is a testament to human curiosity, resilience, and the indomitable spirit of exploration.</p>

                    <Button onClick={() => setIsOpen(true)}> View More </Button>

                </div>
                <img className={styles.histImage} src="https://media1.giphy.com/media/MXQnyEQwBJ6eTj90L5/giphy.gif?cid=ecf05e47045av1lci4uz6xpp2iiimprk23bxogzuixl3qcy6&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Nebula gif" />
            </div>
            </Reveal>

            <Modal 
                isOpen={isOpen} 
                setIsOpen={setIsOpen}
                title={history.title}
                imgSrc={history.imgSrc}
                modalContent={history.modalContent}
                 />
        </>

    )
}