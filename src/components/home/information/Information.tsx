import { Introduction } from "./introduction/Introduction";
import styles from './information.module.scss'
import { History } from "./history/History";

export const Information = () => {
  return (
    <section className={styles.container} id="introduction">
      <Introduction />
      <History />
    </section>
  )
}