import { useState } from 'react'
import style from "./button.module.scss"
import { Modal } from 'components/_ui/modal/Modal'

interface Props {
    children: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, onClick}: Props) => {

    return (
    <>
     <button className={style.button} onClick={onClick}>{children}</button>
    </>
    )
}