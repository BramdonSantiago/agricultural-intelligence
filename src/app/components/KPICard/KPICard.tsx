import styles from "./KPICard.module.css"

export function KPICard({ title, value, unit, indicator, variation }) {
    const indicatorClassMap = {
        positive: styles.positive,
        negative: styles.negative,
        neutral: styles.neutral,
    };
    return (
        <div className={styles.KPI}>
            <h3 className={styles.titleKPI}>{title}</h3>
            <p className={styles.valueKPI}>{value} <span>{unit}</span></p>
            <p className={styles.indicatorKPI}><span className={`${styles.percentageKPI} ${indicatorClassMap[indicator]}`}><span className={styles.triangle}></span>{variation}</span> esta semana</p>
        </div>
    )
}