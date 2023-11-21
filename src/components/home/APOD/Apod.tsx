import React, {useState, useEffect} from 'react'
import { MdArrowForward } from 'react-icons/md'
import styles from './apod.module.scss'
import axios from 'axios'

interface ApodStateProps{
    title: string,
    image: string,
    desc: string,
    date: string
}

export const Apod = () => {
    const [apod, setApod] = useState<ApodStateProps>({
        title: '',
        image: '',
        desc: '',
        date: ''
    })
    useEffect(() => {
        getApod()
    }, [])
    const getApod = () => {
        axios
            .get('https://api.nasa.gov/planetary/apod?api_key=kCDPBDY253qaSpQenPVbVfJfmir99QH4saWUvYCb')
            .then(res => setApod({
                title: res.data.title,
                image: res.data.hdurl,
                desc: res.data.explanation,
                date: res.data.date
            }))
    }
    return (
        <section className={styles.container} id='apod'>
            <div className={styles.content}>
                <span className={styles.span}>today</span>
                <h1 className={styles.title}>Picture of The Day</h1>
                <h2 className={styles.podTitle}>{apod.title}</h2>
                <p className={styles.podDesc}>{apod.desc}</p>
                <a href="https://www.nasa.gov/image-of-the-day/" target='_blank'>Browse image archive <span className={styles.icon}>
                    <MdArrowForward />
                </span>
                </a>
            </div>
            <img src={apod.image} alt=""  className={styles.apodImage}/>
        </section>
    )
}