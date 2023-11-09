import style from "./button.module.scss"

interface Props {
    children: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    link?: string
}

export const Button = ({ children, onClick, link}: Props) => {

    return (
    <>
    <a href={link} target='_blank'>
     <button className={style.button} onClick={onClick}>{children}</button>
    </a>
    </>
    )
}