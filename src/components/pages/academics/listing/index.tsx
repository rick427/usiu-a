import { useNavigate } from "react-router";
import { LuArrowUpRight, LuSearch } from "react-icons/lu";
import { Stack, Group, Button, Divider, TextInput, Paper, Grid, Title, Text } from "@mantine/core";

import styles from "./listing.module.scss";
import { courses } from "@/constants/courses";

export default function Listings() {
    const navigate = useNavigate();

    return (
        <section className={styles["listings"]}>
            <Group justify="space-between" align="center">
                <Title fw={600}>
                    Academics & Programmes
                </Title>

                <TextInput 
                    leftSection={<LuSearch/>} 
                    placeholder="Search programmes by name" 
                    w={300} 
                    size="md" 
                />
            </Group>

            <Grid>
                {courses.map(el => {
                    return (
                        <Grid.Col span={{base: 12, md: 4}}>
                            <Paper className={styles["listings__paper"]}>
                                <Stack>
                                    <Title fz={22} component="h1">
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
                                            onClick={() => navigate(`/academics/${el.slug}`)}
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
