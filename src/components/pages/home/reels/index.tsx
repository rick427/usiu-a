import { Text } from "@mantine/core";
import { LuAsterisk } from "react-icons/lu";

import styles from "./reels.module.scss";

const items = [
    "Anthropology",
    "Applied Mathematics",
    "Biomedical Engineering",
    "Astrophysics",
    "Biochemistry",
    "Computer Science",
];

export default function Reels() {
    const doubled = [...items, ...items];

    return (
        <section className={styles["reels"]}>
            <div className={`${styles.reels__row} ${styles.reels__top}`}>
                {doubled.map((label, idx) => (
                    <div id={`top-${idx}`} className={styles["reels__item"]}>
                        <LuAsterisk size={40} />
                        <Text ff="heading" fw={500} fz={30}>{label}</Text>
                    </div>
                ))}
            </div>

            {/* <div className={`${styles.reels__row} ${styles.reels__bottom}`}>
                {doubled.map((label, idx) => (
                    <div id={`top-${idx}`} className={styles["reels__item"]}>
                        <LuAsterisk size={40} />
                        <Text fw={600} fz={30}>{label}</Text>
                    </div>
                ))}
            </div> */}
        </section>
    )
}
