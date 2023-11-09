import React, { useEffect, useState } from 'react'


import { newsApi } from 'services/api/apisRequest'

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
        newsApi
            .get('')
            .then(res => {
                let data = res.data.articles.filter((articles: any) => (articles.author !== null))
                setNews(data)
                console.log(data)
            })
            .catch(err => console.error("Ops! Something is wrong: " + err))
    }
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
                                <img className={styles.image} src={item.urlToImage} alt="" />
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