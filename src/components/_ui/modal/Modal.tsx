import { Button } from '../button/Button'
import styles from './modal.module.scss'

interface Props {
    isOpen: boolean,
    children: JSX.Element,
    setModalOpen: React.MouseEventHandler
}

export const Modal = ({ isOpen, children, setModalOpen }: Props) => {

    if (isOpen) {
        return (
            <div className={styles.background}>
                <div className={styles.modal}>
                    <div>
                    {children}
                    </div>
                    <button onClick={setModalOpen}>Fechar</button>
                </div>
            </div>
        )

    }


}