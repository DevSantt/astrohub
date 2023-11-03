import style from "./button.module.scss"

interface Props {
    url: string,
    children: string,
    color?: string,
    bgColor?: string
}

export const Button = ({ url, children, color, bgColor }: Props) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <button className={style.button} style={{ color: color, backgroundColor: bgColor }}>{children}</button>
        </a>
    )
}