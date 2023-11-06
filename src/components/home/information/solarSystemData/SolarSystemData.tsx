import { useState, useEffect } from 'react'

import styles from './solarSystemData.module.scss'

import { solarSystemApi } from 'services/api/apisRequest'
import { AxiosResponse } from 'axios'
import { Reveal } from 'components/utils/reveals/Reveal'

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
        getSolarSystemData()
    }, [])

    const getSolarSystemData = () => {
        solarSystemApi
            .get('/knowncount')
            .then((res: AxiosResponse) => {
                setKnownCount({
                    planets: res.data.knowncount[0].knownCount,
                    moons: res.data.knowncount[4].knownCount,
                    asteroids: res.data.knowncount[2].knownCount,
                    comets: res.data.knowncount[3].knownCount,
                    dwarfPlanets: res.data.knowncount[1].knownCount
                })
            })
    }

    let spaceData = [
        { name: 'Planets', knowCount: knownCount.planets },
        { name: 'Moons', knowCount: knownCount.moons },
        { name: 'Asteroids', knowCount: formatValue(knownCount.asteroids) },
        { name: 'Comets', knowCount: formatValue(knownCount.comets) },
        { name: 'Dwarf Planets', knowCount: knownCount.dwarfPlanets }
    ]

    return (
        <div className={styles.container} title='main'>
            <h1 className={styles.title}>Solar System In Numbers</h1>

            <div className={styles.countersContainer}>
                {
                    spaceData.map((item, index) => {
                        return (
                            <Reveal key={index}>
                                <div  className={styles.counter}>
                                    <h2>{item.knowCount}</h2>
                                    <h3>{item.name}</h3>
                                </div>
                            </Reveal>
                        )
                    })
                }
            </div>
        </div >
    )
}