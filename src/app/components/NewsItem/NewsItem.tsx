import styles from "./NewsItem.module.css"

export function NewsItem() {
    return(
        <div className={styles.newsItem}>
            <span className={styles.categoryNewsItem}>Precio</span>
            <h3 className={styles.titleNewsItem}>Sube el costo del huevo en el mercado</h3>
            <p className={styles.timeNewsItem}>Hace 2 horas</p>
        </div>
    )
}