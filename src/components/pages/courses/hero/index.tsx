import { Title, Text } from "@mantine/core";
import { useParams } from "react-router";

import styles from "./hero.module.scss";

export default function Hero() {
    const { slug } = useParams();
    return (
        <section className={styles["hero"]}>
            <Title c="white" fz={45}>
                {slug}
            </Title>
            <Text c="white">
                Home {">"}  Academics {">"} {slug}
            </Text>
        </section>
    )
}
