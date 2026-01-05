import styles from "./KPICard.module.css"

export function KPICard() {
    return(
        <div className={styles.KPI}>
            <h3 className={styles.titleKPI}>Precio del huevo</h3>
            <p className={styles.valueKPI}>$45.00 MXN <span>kg</span></p>
            <p className={styles.indicatorKPI}><span className={`${styles.percentageKPI} ${styles.positive}`}><span className={styles.triangle}></span> 1.2% </span> esta semana</p>
        </div>
    )
}