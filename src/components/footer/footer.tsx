import styles from "./footer.module.css"
export default function Footer() {
    return (
        <footer className={styles.globalFooter}>
            <p>©2025-Dai Code</p>
            <p>last update <time dateTime="2025-04-15">April 13, 2025</time>.</p>
        </footer>
    )
}