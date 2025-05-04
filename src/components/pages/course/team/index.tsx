import { Stack, Title, Text, Paper, Grid } from "@mantine/core";
import styles from "./team.module.scss";

import user_01 from "@/assets/user-1.jpg";
import user_02 from "@/assets/user-2.jpg";
import user_03 from "@/assets/user-3.jpg";

export default function Team() {
    return (
        <section className={styles["team"]}>
            <Title>Faculty Members</Title>

            <Grid>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Paper className={styles["team__card"]}>
                        <img src={user_01} className={styles["team__card__img"]} alt="user" />
                        <Stack>
                            <Title order={3}>Dr. Rene Albertus</Title>
                            <Title order={4}>
                                Chair of Executive Education
                            </Title>
                            <Text size="sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Veritatis ut similique, ipsum perferendis at alias. Beatae dolorem 
                                voluptatem hic aliquam. Hic porro magnam culpa veniam impedit aperiam 
                                nihil? Optio, doloribus!
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Paper className={styles["team__card"]}>
                        <img src={user_02} className={styles["team__card__img"]} alt="user" />
                        <Stack>
                            <Title order={3}>Dr. Esther Barnabas</Title>
                            <Title order={4}>
                                Head of Business Education
                            </Title>
                            <Text size="sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Veritatis ut similique, ipsum perferendis at alias. Beatae dolorem 
                                voluptatem hic aliquam. Hic porro magnam culpa veniam impedit aperiam 
                                nihil? Optio, doloribus!
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Paper className={styles["team__card"]}>
                        <img src={user_03} className={styles["team__card__img"]} alt="user" />
                        <Stack>
                            <Title order={3}>Dr. Martin Gachange</Title>
                            <Title order={4}>
                                Head of Graduate Studies
                            </Title>
                            <Text size="sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                Veritatis ut similique, ipsum perferendis at alias. Beatae dolorem 
                                voluptatem hic aliquam. Hic porro magnam culpa veniam impedit aperiam 
                                nihil? Optio, doloribus!
                            </Text>
                        </Stack>
                    </Paper>
                </Grid.Col>
            </Grid>
        </section>
    )
}
