import React, { useEffect } from 'react'
import { MdClose } from "react-icons/md";
import { motion } from 'framer-motion';

import styles from './modal.module.scss'


interface Props {
    isOpen: boolean,
    setIsOpen: Function,
    title: string,
    imgSrc: string,
    modalContent: JSX.Element
}

export const Modal = ({
    modalContent,
    setIsOpen,
    imgSrc,
    isOpen,
    title
}: Props) => {

    useEffect(() => {
        const body = document.querySelector("body");

        if (isOpen) {
            body!.style.overflowY = "hidden";
        } else {
            body!.style.overflowY = "scroll";
        }
    }, [isOpen])


    const content = (
        <div className={styles.modal} onClick={() => setIsOpen(false)}>
            <button className={styles.closeModalBtn}>
                <MdClose />
            </button>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={(e) => e.stopPropagation()}
                className={styles.modalCard}
            >
                <img
                    className={styles.modalImage}
                    src={imgSrc}
                    alt={`Image of astronomy ${title}`}
                />

                <div className={styles.modalContent}>
                    <h2>{title}</h2>
                    <div className={styles.suppliedContent}>{modalContent}</div>
                </div>
            </motion.div>

        </div>
    )


    if (isOpen) return content;


}