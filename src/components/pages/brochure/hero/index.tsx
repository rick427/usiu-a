import { Title, Text } from "@mantine/core";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles["hero"]}>
            <Title c="white" fz={45}>
                Download Brochure
            </Title>
            <Text c="white">
                Home {">"}  Brochure
            </Text>
        </section>
    )
}
