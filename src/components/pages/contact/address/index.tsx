import { Grid, Title, Text, Paper } from "@mantine/core";

import styles from "./address.module.scss";

export default function Address() {
    return (
        <section className={styles["address"]}>
            <Title fw={600} ta="center">Other Campus Contacts</Title>
            <Grid>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Paper>
                        <Title>Kenya</Title>
                        <Text></Text>
                    </Paper>
                </Grid.Col>
            </Grid>
        </section>
    )
}
