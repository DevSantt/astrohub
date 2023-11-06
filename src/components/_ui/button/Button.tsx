import { useState } from 'react'
import style from "./button.module.scss"
import { Modal } from 'components/_ui/modal/Modal'

interface Props {
    children: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({  children, onClick}: Props) => {
    const [openModal, setOpenModal] = useState(false)

    return (
    <>
     <button className={style.button} onClick={() => setOpenModal(true)}>{children}</button>
        <Modal isOpen={openModal} setModalOpen={()=> setOpenModal(!openModal)}>
            <p>Modal</p>
        </Modal>
    </>
    )
}