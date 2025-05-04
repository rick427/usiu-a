import { Grid, Group, Divider, Title, Text } from "@mantine/core";
import styles from "./about.module.scss";

export default function About() {
    return (
        <section className={styles["about"]}>
            <Grid>
                <Grid.Col span={{base: 12, md: 5}}>
                    <Title fw={600}>
                        The Accounting program offers a 
                        Masters of Science in Accounting.
                    </Title>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 7}}>
                    <Group align="center">
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus 
                            cupiditate nobis repellat aut commodi omnis rem nemo blanditiis, itaque sint, 
                            facilis maiores eos et in illo! Incidunt enim possimus iure, vitae neque 
                            natus voluptatum consectetur ad? Nemo, quam hic? Reiciendis. Lorem ipsum, dolor 
                            sit amet consectetur adipisicing elit. Nobis doloribus aspernatur cumque 
                            asperiores accusamus eveniet dolorem ab blanditiis optio.
                        </Text>
                    </Group>
                </Grid.Col>
            </Grid>
            
            <Divider />
        </section>
    )
}
