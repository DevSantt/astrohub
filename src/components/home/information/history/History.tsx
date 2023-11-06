import { Reveal } from 'components/utils/reveals/Reveal'
import styles from './history.module.scss'
import { Button } from 'components/_ui/button/Button'

export const History = () => {
    return (
        <>
            <Reveal>
            <div className={styles.history}>
                <div className={styles.historyContent}>
                    <h1>History</h1>
                    <h2>One of the oldest sciences</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique molestias iusto repellendus quas quos quia mollitia expedita assumenda, vero eligendi nesciunt. Voluptatibus vel soluta distinctio adipisci, possimus ipsa exercitationem sapiente.</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eos!</p>

                    <Button> View More </Button>

                </div>
                <img className={styles.histImage} src="https://media1.giphy.com/media/MXQnyEQwBJ6eTj90L5/giphy.gif?cid=ecf05e47045av1lci4uz6xpp2iiimprk23bxogzuixl3qcy6&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Nebula gif" />
            </div>
            </Reveal>
        </>

    )
}