import { useState, useEffect } from 'react'

import styles from './astrodata.module.scss'

import { solarSystemApi } from '@/services/api/apisRequest'

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
        <div>
            <h1>Sistema Solar em Números</h1>

            <div>
                {
                    spaceData.map((item, index) => {
                        return (
                            <div key={index}>
                                <h2>{item.knowCount}</h2>
                                <h3>{item.name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}