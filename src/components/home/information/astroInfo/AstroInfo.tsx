import { Reveal } from 'components/utils/reveals/Reveal'
import styles from './about.module.scss'
import { Button } from 'components/_ui/button/Button'

export const AstroInfo = () => {
    return (
        <section className={styles.container}>
                <Reveal>
            <div className={styles.content}>
                    <img className={styles.image} src="https://images.unsplash.com/photo-1505579962197-df174377e13f?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    <div className={styles.about}>
                        <h1>O que é astronomia?</h1>
                        <h2>Um Amanhecer De Descobertas</h2>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus eligendi quae nihil perferendis voluptatum mollitia sapiente quo deleniti quibusdam? Laboriosam a laudantium, quaerat ad voluptatibus facilis asperiores labore at recusandae omnis eius optio minima itaque, quibusdam repellat beatae ipsa incidunt soluta quis illum quasi doloremque quos corporis impedit. Libero, beatae.</span>
                        <Button url='/'>Learn More</Button>
                    </div>

            </div>
                </Reveal>
        </section>
    )
}