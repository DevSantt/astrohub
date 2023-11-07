import React, { useEffect } from 'react'
import { newsApi } from 'services/api/apisRequest'

export const News = () => {
    useEffect(() => {
        newsApi
            .get('').then(res => console.log(res.data.articles))
    }, [])

    return(
        <></>
    )
}