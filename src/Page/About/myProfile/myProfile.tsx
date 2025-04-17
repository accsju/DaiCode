import styles from "./myProfile.module.css"

export default function myProfile() {
    return (
        <section className={styles.myProfileContainer}>
            <div className={styles.myProfile}>
                <div className={styles.data}>
                    <div className={styles.selfIntroduction}>
                        <h1>Self introduction.</h1>
                        <p>I'm from Tara Town, Saga Prefecture.
                            I'm not employed at the moment.
                            I'm 24 years old,born on May 15.My Blood type is B
                            My hobbies are programming(mainly JavaScript) and going for walks.
                        </p>
                        <hr/>
                    </div>
                    <div className={styles.interests}>
                        <h2>What interests you.</h2>
                        <ul>
                            <li>Rocket</li>
                            <li>JavaScript</li>
                            <li>Math</li>
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className={styles.Categories}>
                    <div>
                        <h2>Like drinks</h2>
                        <ul>
                            <li>Hot water</li>
                            <li>Orange juice</li>
                            <li>Apple juice</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Like foods</h2>
                        <ul>
                            <li>White rice</li>
                            <li>Mackerel</li>
                            <li>Miso soup</li>
                            <li>Salad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}