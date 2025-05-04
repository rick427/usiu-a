import { Button, Stack, Title, Text } from "@mantine/core";
import { LuArrowRight } from "react-icons/lu";

import styles from "./hero.module.scss";

export default function Hero() {
    return (
        <section className={styles["hero"]}>
            <Stack align="center" className={styles["hero__stack"]}>
                <Text fz={13} tt="uppercase" fw={600}>
                    Center for Executive Education
                </Text>
                <Title component="h1">
                    Explore Your Future With Us At USIU-A
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Temporibus consequatur blanditiis distinctio, vitae voluptatum odit!
                </Text>
                <Button 
                    px="xl"
                    mt="lg"
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
                    View our program
                </Button>
            </Stack>
        </section>
    )
}
