import { Title, Text, Stack, Grid, Button } from "@mantine/core";
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router";

import styles from "./footer.module.scss";
import brandLogo from "@/assets/brand.png";

export default function Footer() {
    return (
        <footer className={styles["footer"]}>
            <Grid justify="space-between">
                <Grid.Col span={{base: 12, md: 5}}>
                    <Stack gap="xl">
                        <img className={styles["footer__logo"]} src={brandLogo} alt="USIU-A" />
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi similique distinctio quam adipisci minima sunt tempora nostrum facere animi pariatur, blanditiis asperiores laudantium inventore obcaecati iure voluptatem soluta delectus expedita.
                        </Text>
                    </Stack>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 2}}>
                    <Stack gap="xl">
                        <Title order={3}>Pages</Title>
                        <Stack>
                            <Link to="/">Home</Link>
                            <Link to="/contact">Help & Support</Link>
                            <Link to="/academics">Academics & Programmes</Link>
                            <Link to="/">Scholarship & Financial Aid</Link>
                        </Stack>
                    </Stack>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 3}}>
                    <Stack gap="xl">
                        <Title order={3}>Quick Links</Title>

                        <Stack>
                            <Button 
                                px="xl"
                                fz={12} 
                                fw={600} 
                                w={250}
                                size="lg"
                                radius="xs" 
                                tt="uppercase"
                                color="primary.8"
                                variant="filled"
                                style={{alignSelf: "flex-start"}}
                                rightSection={<LuArrowRight size={18} />}
                                //onClick={() => navigate("/products")}
                            >
                                Download Brochure
                            </Button>
                            <Button 
                                px="xl"
                                fz={12} 
                                fw={600} 
                                w={250}
                                size="lg"
                                radius="xs" 
                                tt="uppercase"
                                //color="white"
                                variant="outline"
                                style={{alignSelf: "flex-start"}}
                                rightSection={<LuArrowRight size={18} />}
                                //onClick={() => navigate("/products")}
                            >
                                Send an application
                            </Button>
                        </Stack>
                    </Stack>
                </Grid.Col>
            </Grid>
        </footer>
    )
}
