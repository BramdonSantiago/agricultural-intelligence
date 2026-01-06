import styles from "./NewsItem.module.css"

export function NewsItem({ title, date, image, category }) {
    const categoryClassMap = {
        Precio: styles.price,
        Sanidad: styles.health,
        Comercio: styles.trade,
    };
    return(
        <div className={styles.newsItem} style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255), rgba(255,255,255, 0.95), rgba(255,255,255, 0.1)), url('${image}')` }}>
            <span className={`${styles.categoryNewsItem} ${categoryClassMap[category]}`}>{category}</span>
            <h3 className={styles.titleNewsItem}>{title}</h3>
            <p className={styles.timeNewsItem}>{date}</p>
        </div>
    )
}