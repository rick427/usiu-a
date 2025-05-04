import { Grid, Group, Divider, Title, Text } from "@mantine/core";
import styles from "./about.module.scss";

export default function About() {
    return (
        <section className={styles["about"]}>
            <Grid>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Title fw={600}>Our Programmes</Title>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 8}}>
                    <Group align="center">
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cupiditate nobis repellat aut commodi omnis rem nemo blanditiis, itaque sint, facilis maiores eos et in illo! Incidunt enim possimus iure, vitae neque natus voluptatum consectetur ad? Nemo, quam hic? Reiciendis.
                        </Text>
                    </Group>
                </Grid.Col>
            </Grid>
            
            <Divider />

            <div className={styles["about__bg"]}>
                <Title c="white">
                    2025 Academic Session Started!
                </Title>
            </div>
        </section>
    )
}
