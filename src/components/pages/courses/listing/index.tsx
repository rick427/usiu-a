import { LuArrowUpRight, LuSearch } from "react-icons/lu";
import { useParams, useNavigate } from "react-router";
import { Stack, Group, Button, Divider, TextInput, Paper, Grid, Title, Text } from "@mantine/core";

import styles from "./listing.module.scss";
import { courses } from "@/constants/courses";

export default function Listings() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const list = courses.filter(el => el.slug === slug);
    const programmes = list[0].programmes;
    return (
        <section className={styles["listings"]}>
            <Group justify="space-between" align="center">
                <Title fw={600}>
                    Programme Courses
                </Title>

                <TextInput 
                    leftSection={<LuSearch/>} 
                    placeholder="Search courses by name" 
                    w={300} 
                    size="md" 
                />
            </Group>

            <Grid>
                {programmes.map(el => {
                    return (
                        <Grid.Col span={{base: 12, md: 4}}>
                            <Paper className={styles["listings__paper"]}>
                                <Stack>
                                    <Title fz={28} component="h1">
                                       {el.title}
                                    </Title>
                                    <Text fw={400} lineClamp={2}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci 
                                        maxime unde, repellendus cupiditate enim officiis in. 
                                        Dolor a iste commodi?
                                    </Text>
                                    <Divider />
                                    <Stack>
                                        <Group justify="space-between" align="center">
                                            <Text fw={600}>{el.count}+ courses</Text>
                                            <Text fw={600}>
                                                KES {el.price.toLocaleString("en", {minimumFractionDigits: 2})}
                                            </Text>
                                        </Group>
                                        <Text lineClamp={3}>
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
                                            
                                            rightSection={<LuArrowUpRight size={18} />}
                                            onClick={() => navigate(`/academics/${list[0].slug}/${el.slug}`)}
                                        >
                                            View Course Details
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
