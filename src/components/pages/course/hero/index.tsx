import { Title, Text } from "@mantine/core";
import { useParams } from "react-router";

import styles from "./hero.module.scss";

export default function Hero() {
    const { slug, courseId } = useParams();
    return (
        <section className={styles["hero"]}>
            <Title c="white" fz={45}>
                {courseId}
            </Title>
            <Text c="white">
                home {">"}  academics {">"} {slug} {">"} {courseId}
            </Text>
        </section>
    )
}
