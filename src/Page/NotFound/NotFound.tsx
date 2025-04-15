import styles from "./NotFound.module.css"

export default function NotFound() {

    return (
        <>  
            <main className={styles.notFoundContainer}>
                <div>
                    <h1 className={styles.notFound}>404 NotFound</h1>
                    <p className={styles.notFoundMessage}>The requested URL was not found on this server.</p>
                </div>
            </main>
        </>
    )
}