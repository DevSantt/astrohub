import styles from './about.module.scss'

export const About = () => {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
            <img className={styles.image} src="https://images.unsplash.com/photo-1505579962197-df174377e13f?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

            <div className={styles.about}>
                <h1>What is astronomy?</h1>
            </div>

            </div>
        </section>
    )
}