import styles from "./heroSection.module.css"
export default function HeroSection() {
    return (
        <>
            <section className={styles.heroSection}>
                <p>Hi, I'm <strong>Daichi</strong> - a front-end developer.</p>
                <p>I like <strong>React</strong>.</p>
                <p>This website is make by React + Vite + TypeScript</p>
                <a className={styles.githubButton} href="https://github.com/accsju">My Github</a>
            </section>
        </>
    )
}