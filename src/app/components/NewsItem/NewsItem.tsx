import styles from "./NewsItem.module.css"

export function NewsItem() {
    return(
        <div className={styles.newsItem} style={{ backgroundImage: "linear-gradient(to right, rgba(255,255,255), rgba(255,255,255, 0.95), rgba(255,255,255, 0.1)), url('assets/img/news-1.jpg')" }}>
            <span className={`${styles.categoryNewsItem} ${styles.price}`}>Precio</span>
            <h3 className={styles.titleNewsItem}>Sube el costo del huevo en el mercado</h3>
            <p className={styles.timeNewsItem}>Hace 2 horas</p>
        </div>
    )
}