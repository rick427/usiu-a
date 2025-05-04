import { Grid, Stack, Button, Title, Text } from "@mantine/core";
import { LuArrowRight, LuArrowUpRight } from "react-icons/lu";

import styles from "./about.module.scss";
import home_1 from "@/assets/home-1.jpg";
import home_2 from "@/assets/home-2.jpg";

export default function About() {
    return (
        <section className={styles["about"]}>
            <Grid align="center">
                <Grid.Col span={{base: 12, md: 6}}>
                    <div className={styles["about__imgs"]}>
                        <img src={home_1} alt="home-1" />
                        <img src={home_2} alt="home-2" />

                        <div className={styles["about__vid"]}>
                            <svg className={styles["about__svg"]} viewBox="0 0 100 100">
                                <defs>
                                    <path id="circle" d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"></path>
                                </defs>
                                <text className={styles["about__svg__text"]}>
                                    <textPath xlinkHref="#circle">
                                        USIU-A University * Estd. 1971 * Explore Future *
                                    </textPath>
                                </text>
                            </svg>
                            <LuArrowUpRight className={styles["about__vid__icon"]} />
                        </div>
                    </div>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 6}}>
                    <Stack gap="xl" align="flex-start">
                        <Stack gap={5}>
                            <Text tt="uppercase" fz={12}>
                                Center for Executive Education
                            </Text>
                            <Title tt="capitalize">
                                About the Programme
                            </Title>
                        </Stack>
                        
                        <Stack>
                            <Text fw={400}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Pariatur ipsum quis ratione consectetur sint quos non 
                                harum soluta facere quam? eligendi ipsa rerum assumenda 
                                sapiente sunt mollitia. Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Delectus, molestias.
                            </Text>

                            <Text fw={400}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima 
                                necessitatibus commodi obcaecati assumenda. Nobis placeat reiciendis 
                                alias enim nemo maxime, eligendi ipsa rerum assumenda sapiente sunt mollitia 
                                autem. Unde rerum modi dolore repellendus rem.
                            </Text>
                        </Stack>

                        <Button 
                            px="xl"
                            fz={12} 
                            fw={600} 
                            size="lg"
                            radius="xs" 
                            tt="uppercase"
                            color="primary.8"
                            variant="filled"
                            rightSection={<LuArrowRight size={18} />}
                            //onClick={() => navigate("/products")}
                        >
                            Download Brochure
                        </Button>
                    </Stack>
                </Grid.Col>
            </Grid>

            <article className={styles["about__metrics"]}>
                <Stack align="center">
                    <Title c="dark" component="h1">90%</Title>
                    <Text fz={12} c="dark" tt="uppercase">
                        Post-Graduation Success Rate
                    </Text>
                </Stack>
                <Stack align="center">
                    <Title c="dark" component="h1">Top 10</Title>
                    <Text fz={12} c="dark" tt="uppercase">
                        Programmes that Create Futures
                    </Text>
                </Stack>
                <Stack align="center">
                    <Title c="dark" component="h1">Nos. 1</Title>
                    <Text fz={12} c="dark" tt="uppercase">
                        In the Nation For Materials R&D
                    </Text>
                </Stack>
            </article>
        </section>
    )
}
