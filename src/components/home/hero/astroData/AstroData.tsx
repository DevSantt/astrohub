import { useState, useEffect } from 'react'

import styles from './astrodata.module.scss'

import { solarSystemApi } from '@/services/api/apisRequest'
import { Reveal } from '@/components/utils/Reveal'

export const formatValue = (value: number) => {
    return value.toLocaleString('pt-BR')
}

export const SolarSystemData = () => {
    interface spaceData {
        planets: number,
        moons: number, 
        asteroids: number,
        comets: number, 
        dwarfPlanets: number
    }
    const [knownCount, setKnownCount] = useState<spaceData>({
        planets: 0,
        moons: 0,
        asteroids: 0,
        comets: 0,
        dwarfPlanets: 0,
    })
    useEffect(() => {
        solarSystemApi
        .get('/knowncount')
        .then((res) => {
            setKnownCount({
                planets: res.data.knowncount[0].knownCount,
                moons: res.data.knowncount[4].knownCount,
                asteroids: res.data.knowncount[2].knownCount,
                comets: res.data.knowncount[3].knownCount,
                dwarfPlanets: res.data.knowncount[1].knownCount
            })
        })
    }, [])

    let spaceData = [
        { name: 'Planetas', knowCount: knownCount.planets },
        { name: 'Luas', knowCount: knownCount.moons },
        { name: 'Asteróides', knowCount: formatValue(knownCount.asteroids) },
        { name: 'Cometas', knowCount: formatValue(knownCount.comets) },
        { name: 'Anões', knowCount: knownCount.dwarfPlanets }
    ]

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Sistema Solar</h1>

            <div className={styles.countersContainer}>
                {
                    spaceData.map((item, index) => {
                        return (

                        <Reveal key={index}>

                            <div className={styles.counter}>
                                <h2>{item.knowCount}</h2>
                                <h3>{item.name}</h3>
                            </div>
                        </Reveal>
                        )
                    })
                }
            </div>
        </div>
    )
}