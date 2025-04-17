import styles from "./menu.module.css"
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div className={styles.menuContainer}>
            <div className={styles.pageLinks}>
                <h2>page guide</h2>
                <Link to="/KaiCode/about" className={styles.pageLink}>About</Link>
                <Link to="/KaiCode/blog" className={styles.pageLink}>Blog</Link>
                <Link to="/KaiCode/portfolio" className={styles.pageLink}>Portfolio</Link>
                <hr/>
            </div>
            <div className={styles.externalLinks}>
                <a href="https://github.com/accsju">Github</a>
            </div>
        </div>
    )
}