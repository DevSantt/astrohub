import React, { useEffect, useState } from 'react'
import { Button } from 'components/_ui/button/Button';


import { NewsApi } from 'services/api/apisRequest'

import { register } from 'swiper/element/bundle'
register();

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/bundle';
import styles from './news.module.scss'

export const News = () => {
    const [news, setNews] = useState<any[]>([])
    useEffect(() => {
        getNews()
    }, [])
    const getNews = () => {
        NewsApi
            .get('/')
            .then(res => setNews(res.data))
    }
    console.log(news)
    return (
        <section className={styles.container}>
            <h1 className={styles.title}> Featured News </h1>
            <Swiper
                modules={[ Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{delay: 5000, disableOnInteraction: true}}
                className={styles.swiper}
            >
                {
                    news.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={styles.swiperSlide}>
                                <img className={styles.image} src={item.imageUrl} alt="" />
                                <div className={styles.info}>
                                    <h2>{item.title}</h2>
                                    <h3>{item.author}</h3>
                                    <Button link={item.url}>Learn More</Button>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}