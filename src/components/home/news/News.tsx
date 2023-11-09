import React, { useEffect, useState } from 'react'


import { NewsApi, newsApi } from 'services/api/apisRequest'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle'
register();

import 'swiper/css/bundle';
import styles from './news.module.scss'
import { Button } from 'components/_ui/button/Button';

export const News = () => {
    const [news, setNews] = useState<any[]>([])
    useEffect(() => {
        getNews()
    }, [])
    const getNews = () => {
        NewsApi
            .get('')
            .then(res => setNews(res.data.data))
    }

    console.log(news)
    return (
        <section className={styles.container}>
            <h1 className={styles.title}> Featured News </h1>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation
                autoplay={{ delay: 5000, disableOnInteraction: true }}
                className={styles.swiper}
                loop={true}
            >
                {
                    news.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className={styles.swiperSlide}>
                                <img className={styles.image} src={item.image_url} alt="" />
                                <div className={styles.info}>
                                    <h2>{item.title}</h2>
                                    <h3>{item.description}</h3>
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