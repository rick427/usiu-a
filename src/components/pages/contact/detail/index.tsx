import { Grid, Title, Text, Paper } from "@mantine/core";
import { LiaMap, LiaClockSolid, LiaPhoneSolid } from "react-icons/lia";

import styles from "./detail.module.scss";
import { primary } from "@/constants/colors";

export default function Detail() {
    return (
        <section className={styles["detail"]}>
            <Title ta="center" fw={600}>
                General Contact Information
            </Title>

            <Grid>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Paper className={styles["detail__paper"]}>
                        <LiaMap color={primary[8]} size={50} />

                        <Text ta="center" size="lg" fw={600}>
                            USIU Road, Off Thika Road (Exit 7), P. O. 
                            Box 14634 - 00800, Nairobi, Kenya.
                        </Text>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Paper className={styles["detail__paper"]}>
                        <LiaPhoneSolid color={primary[8]} size={50} />

                        <Text ta="center" size="lg" fw={600}>
                            +254 730 116 000 /290 /291
                        </Text>
                    </Paper>
                </Grid.Col>
                <Grid.Col span={{base: 12, md: 4}}>
                    <Paper className={styles["detail__paper"]}>
                        <LiaClockSolid color={primary[8]} size={50} />

                        <Text ta="center" size="lg" fw={600}>
                            Mon-Fri: 9AM - 5PM
                        </Text>
                    </Paper>
                </Grid.Col>
            </Grid>
        </section>
    )
}
