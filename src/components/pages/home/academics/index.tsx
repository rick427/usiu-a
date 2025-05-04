import { Grid, Button, Divider, Group, Paper, Stack, Title, Text } from "@mantine/core";
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from "react-router";

import styles from "./academics.module.scss";
import { courses } from "@/constants/courses";

export default function Academics() {
    const navigate = useNavigate();

    return (
        <section className={styles["acads"]}>
            <Title tt="capitalize" ta="center">
                Academics & Programmes
            </Title>

            <Grid gutter={0}>
                {courses.map((course, idx) => {
                    const isEven = idx%2 !== 0;
                    const paperElColor = isEven ? "primary.0" : "dark";
                    const paperBtnColor = isEven ? "white" : "primary.8";
                    const paperStyleName = isEven ? "acads__card" : "acads__paper";
                    return (
                        <Grid.Col span={{base: 12, md: 4}}>
                            <Paper className={styles[paperStyleName]}>
                                <Stack>
                                    <Title c={paperElColor} fz={28} component="h1">
                                       {course.title}
                                    </Title>
                                    <Text c={paperElColor} fw={400} lineClamp={2}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
                                        maxime unde, repellendus cupiditate enim officiis in. 
                                        Dolor a iste commodi?
                                    </Text>
                                    <Divider />
                                    <Stack>
                                        <Group justify="space-between" align="center">
                                            <Text c={paperElColor} fw={600}>{course.count}+ courses</Text>
                                            <Text c={paperElColor} fw={600}>
                                                KES {course.price.toLocaleString("en", {minimumFractionDigits: 2})}
                                            </Text>
                                        </Group>
                                        <Text c={paperElColor} lineClamp={3}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem similique 
                                            sint unde exercitationem porro incidunt voluptates deserunt mollitia asperiores 
                                            eligendi?
                                        </Text>
                                        <Button 
                                            px="xl"
                                            mt="xl"
                                            fz={12} 
                                            fw={600} 
                                            size="lg"
                                            radius="xs" 
                                            fullWidth
                                            tt="uppercase"
                                            variant="outline"
                                            color={paperBtnColor}
                                            rightSection={<LuArrowUpRight size={18} />}
                                            onClick={() => navigate(`/academics/${course.slug}`)}
                                        >
                                            Explore the programme
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Grid.Col>
                    )
                })}
            </Grid>
        </section>
    )
}
